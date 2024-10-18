import ProductCard from "../common/ProductCard";
import { useFetchAllProducts } from "@/hooks/api/useFetchProducts";
import { useFilterStore } from "@/store/filterStore";

interface ProductGridProps {}

export default function ProductGrid({}: ProductGridProps) {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useFetchAllProducts();

  const { sortBy, activeCategories, activeColors, activeSizes, priceRange } =
    useFilterStore();

  const filteredProducts = products.filter(
    (product) =>
      product.Price >= priceRange[0] &&
      product.Price <= priceRange[1] &&
      (activeCategories.length === 0 ||
        activeCategories.includes(product.Category)) &&
      (activeColors.length === 0 ||
        product.Colors?.some((color) => activeColors.includes(color))) &&
      (activeSizes.length === 0 ||
        product.Sizes?.some((size) => activeSizes.includes(size)))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.Price - b.Price;
    } else if (sortBy === "price-desc") {
      return b.Price - a.Price;
    }
    return 0;
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sortedProducts.map((product) => (
        <ProductCard key={product.ProductId} product={product} />
      ))}
    </div>
  );
}
