import { Product } from "@/types/Product";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cartStore";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCart({
        productId: product.productId,
        product: product,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
      });
    }
  };

  // useEffect(() => {
  //   console.log("Updated Cart", cart);
  // }, [cart]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({product.total_reviews} Reviews)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
        {product.original_price > product.price && (
          <span className="text-sm text-gray-500 line-through">
            ${product.original_price.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-gray-600">{product.description}</p>
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          {product.colors?.map((color) => (
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
          {product.sizes?.map((size) => (
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
              setQuantity(Math.min(product.available_stock, quantity + 1))
            }
            className="p-2"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <Button className="flex-1" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
