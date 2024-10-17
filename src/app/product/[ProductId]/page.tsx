import ProductDescriptionSection from "@/components/PDP/ProductDescriptionSection";
import { FC } from "react";

interface ProductPageProps {
  params: {
    ProductId: string;
  };
}

const ProductPage: FC<ProductPageProps> = ({ params }) => {
  const { ProductId } = params;

  return <ProductDescriptionSection productId={ProductId} />;
};

export default ProductPage;
