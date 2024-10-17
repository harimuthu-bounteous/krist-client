import { products } from "@/data/Products";
import ProductCard from "../common/ProductCard";

interface ProductGridProps {
  activeCategories: string[];
  priceRange: [number, number];
  activeColors: string[];
  activeSizes: string[];
  sortBy: string;
}

export default function ProductGrid({
  activeCategories,
  priceRange,
  activeColors,
  activeSizes,
  sortBy,
}: ProductGridProps) {
  const filteredProducts = products.filter((product) => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (activeCategories.length === 0 ||
        activeCategories.includes(product.category)) &&
      (activeColors.length === 0 ||
        product.colors?.some((color) => activeColors.includes(color))) &&
      (activeSizes.length === 0 ||
        product.sizes?.some((size) => activeSizes.includes(size)))
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sortedProducts.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}
