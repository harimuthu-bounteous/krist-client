"use client";
import { FC, useEffect } from "react";
import { Product, ProductImage } from "@/types/Product";

import ProductImageGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useFetchProductById } from "@/hooks/api/useFetchProductById";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container mx-auto p-8 md:px-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProductImageGallery images={product?.Images as ProductImage[]} />
        <ProductInfo product={product as Product} />
      </div>
      <ProductTabs product={product as Product} />
    </div>
  );
};

export default ProductDescriptionSection;
