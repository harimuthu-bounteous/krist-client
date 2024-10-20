"use client";
import { FC } from "react";
import { Product, ProductImage } from "@/types/Product";

import ProductImageGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useFetchProductById } from "@/hooks/api/useFetchProductById";
import ProductDescriptionSkeleton from "../skeleton/ProductDescriptionSkeleton";
import RelatedProducts from "./RelateProduct";

interface ProductDescriptionSectionProps {
  productId: string;
}

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = ({
  productId,
}) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useFetchProductById(productId);

  if (isLoading) {
    return <ProductDescriptionSkeleton />;
  }

  if (isError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container mx-auto p-8 md:px-20 md:py-8 space-y-8">
      <div className="flex flex-col items-center justify-evenly lg:flex-row gap-6 lg:gap-12">
        <ProductImageGallery images={product?.Images as ProductImage[]} />
        <ProductInfo product={product as Product} />
      </div>
      <div className="md:p-8 flex flex-col gap-4">
        <ProductTabs product={product as Product} />
        <RelatedProducts productId={product?.ProductId as string} />
      </div>
    </div>
  );
};

export default ProductDescriptionSection;
