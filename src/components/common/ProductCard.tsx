"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Eye, Share2, Heart } from "lucide-react";
import ProductImg from "@/assets/image.png";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 transform hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={ProductImg}
            alt={product.images[0].alt_text}
            fill
            className="object-cover"
          />
          {isHovered && (
            <div className=" flex items-end p-4 absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300">
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <Button size="icon" variant="secondary">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => router.push("/product/" + product.productId)}
                  size="icon"
                  variant="secondary"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>

              <Button
                onClick={() => router.push("/product/" + product.productId)}
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <Typography variant="h4" className="mb-1" value={product.name} />
        <div className="flex justify-between items-center gap-2 mb-2">
          <Typography variant="large" value={"$" + product.price.toFixed(2)} />
          <Typography
            variant="muted"
            className="line-through text-base"
            value={"$" + product.original_price.toFixed(2)}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

{
  /* <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div> */
}
