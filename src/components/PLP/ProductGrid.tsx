import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductImage from "@/assets/image.png";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  activeCategories: string[];
  priceRange: [number, number];
  activeColors: string[];
  activeSizes: string[];
  sortBy: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Product 5",
    price: 69.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Product 6",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function ProductGrid({
  activeCategories,
  priceRange,
  activeColors,
  activeSizes,
  sortBy,
}: ProductGridProps) {
  // Filter and sort products based on active filters and sort option
  const filteredProducts = products.filter((product) => {
    return product.price >= priceRange[0] && product.price <= priceRange[1];
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={ProductImage}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-contain"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <Button className="mt-2 w-full">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
