"use client";
import { FC } from "react";
import { products } from "@/data/Products";
import dynamic from "next/dynamic";
import { Product, ProductImage } from "@/types/Product";

import ProductImageGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

interface ProductDescriptionSectionProps {
  productId: string;
}

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = ({
  productId = "1",
}) => {
  const product = products.find((product) => product.productId === productId);

  return (
    <div className="container mx-auto md:px-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProductImageGallery images={product?.images as ProductImage[]} />
        <ProductInfo product={product as Product} />
      </div>
      <ProductTabs product={product as Product} />
    </div>
  );
};

export default ProductDescriptionSection;
