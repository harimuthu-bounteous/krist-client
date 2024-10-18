import { Product } from "@/types/Product";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Typography } from "../ui/typography";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: FC<ProductTabsProps> = ({ product }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="additional">Additional Information</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4">
        <Typography value={product.Description} variant="p" />
      </TabsContent>
      <TabsContent value="additional" className="mt-4">
        <Typography
          value="Additional product information would go here."
          variant="p"
        />
      </TabsContent>
      <TabsContent value="reviews" className="mt-4">
        <Typography
          value="Product reviews would be displayed here."
          variant="p"
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
