import { Color } from "./Color";
import { ProductCategory } from "./ProductCategory";
import { FootwearSize } from "./Size/FootwearSize";
import { MenSize } from "./Size/MenSize";
import { WomenSize } from "./Size/WomenSize";

export interface ProductImage {
  url: string;
  alt_text: string;
}

export interface Product {
  productId: string;
  name: string;
  category: ProductCategory;
  price: number;
  original_price: number;
  available_stock: number;
  rating: number;
  total_reviews: number;
  description: string;
  colors?: Color[];
  sizes?: MenSize[] | WomenSize[] | FootwearSize[];
  images: ProductImage[];
}
