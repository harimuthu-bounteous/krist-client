import { Product } from "@/types/Product";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Typography } from "../ui/typography";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: FC<ProductTabsProps> = ({ product }) => {
  return (
    <Tabs
      defaultValue="description"
      className="w-full border p-1 md:p-4 rounded-md shadow"
    >
      <TabsList className="w-auto md:w-full bg-gray-200">
        <TabsTrigger value="description" className="w-auto md:w-full">
          Description
        </TabsTrigger>
        <TabsTrigger value="additional" className="w-auto md:w-full">
          Additional Information
        </TabsTrigger>
        <TabsTrigger value="reviews" className="w-auto md:w-full">
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4 space-y-4">
        <Typography value={product.Description} variant="p" />
        <Typography
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          variant="p"
        />
      </TabsContent>
      <TabsContent value="additional" className="mt-4 space-y-4">
        <Typography
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          variant="p"
        />
        <Typography
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          variant="p"
        />
        <Typography
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
