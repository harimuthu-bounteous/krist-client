import { useFetchRelatedProductById } from "@/hooks/api/useFetchRelatedProducts";
import { FC } from "react";
import ProductCard from "../common/ProductCard";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";
import { Typography } from "../ui/typography";

interface RelatedProductProps {
  productId: string;
}

const RelatedProducts: FC<RelatedProductProps> = ({ productId }) => {
  const {
    data: relatedProducts = [],
    isLoading,
    isError,
    isRefetching,
    isFetching,
    error,
  } = useFetchRelatedProductById(productId);

  if (isLoading || isRefetching || isFetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    console.log(error);
    <div>Something went wrong</div>;
  }

  return (
    <>
      <Typography
        value="Related Products"
        variant="h3"
        className="py-4 text-3xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {relatedProducts.map((product, index) => (
          <ProductCard
            key={product.ProductId}
            product={product}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
