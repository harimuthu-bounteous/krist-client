import { Product } from "@/types/Product";
import { Heart, Loader2, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useAddToCart } from "@/hooks/api/useAddToCart";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState(product.Colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product.Sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const { cart, addToCart } = useCartStore();
  const addToCartMutation = useAddToCart();

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCartMutation.mutate({
        productId: product.ProductId,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
      });

      // Add to store
      addToCart({
        ProductId: product.ProductId,
        ProductName: product.Name,
        Color: selectedColor,
        Size: selectedSize,
        Quantity: quantity,
        CartId: "",
        Category: product.Category,
        Price: product.Price,
        UserId: "",
      });

      // Success Toast
      toast("Add To Cart", {
        description: "Product has been added to the Cart",
        action: {
          label: <ShoppingCart className="size-5" />,
          onClick: () => router.push("/checkout"),
        },
        actionButtonStyle: {
          padding: 15,
          borderColor: "black",
        },
        style: {
          borderColor: "green",
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.Name}</h1>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.Rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({product.TotalReviews} Reviews)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">${product.Price.toFixed(2)}</span>
        {product.OriginalPrice > product.Price && (
          <span className="text-sm text-gray-500 line-through">
            ${product.OriginalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-gray-600">{product.Description}</p>
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          {product.Colors?.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
        <p className="mt-2 text-sm">Selected: {selectedColor}</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex gap-2">
          {product.Sizes?.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border rounded-md ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm">Selected: {selectedSize}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() =>
              setQuantity(Math.min(product.AvailableStock, quantity + 1))
            }
            className="p-2"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <Button className="flex-1 gap-2" onClick={handleAddToCart}>
          Add to Cart{" "}
          {addToCartMutation.isPending && <Loader2 className="animate-spin" />}
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
