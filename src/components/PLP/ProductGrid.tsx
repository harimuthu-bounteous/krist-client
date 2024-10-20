import { useFetchFilteredProducts } from "@/hooks/api/useFetchFilteredProducts";
import ProductCard from "../common/ProductCard";
import { useFilterStore } from "@/store/filterStore";
import { Product } from "@/types/Product";
import { useEffect } from "react";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";

interface ProductGridProps {}

export default function ProductGrid({}: ProductGridProps) {
  const {
    sortBy,
    activeCategories,
    activeColors,
    activeSizes,
    priceRange,
    pageNumber,
    pageSize,
    setPageNumber,
  } = useFilterStore();

  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    isFetching,
  } = useFetchFilteredProducts();

  useEffect(() => {
    refetch();
  }, [
    sortBy,
    activeCategories,
    activeColors,
    activeSizes,
    priceRange,
    pageNumber,
    pageSize,
    setPageNumber,
  ]);

  if (isLoading || isRefetching || isFetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: pageSize }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product: Product, index: number) => (
        <ProductCard key={product.ProductId} product={product} index={index} />
      ))}
    </div>
  );
}
