import { Color } from "./Color";
import { ProductCategory } from "./ProductCategory";
import { FootwearSize } from "./Size/FootwearSize";
import { MenSize } from "./Size/MenSize";
import { WomenSize } from "./Size/WomenSize";

export interface ProductImage {
  Url: string;
  AltText: string;
}

export interface Product {
  ProductId: string;
  Name: string;
  Category: ProductCategory;
  Price: number;
  OriginalPrice: number;
  AvailableStock: number;
  Rating: number;
  TotalReviews: number;
  Description: string;
  Colors?: Color[];
  Sizes?: MenSize[] | WomenSize[] | FootwearSize[];
  Images: ProductImage[];
}

// type ProductCategory = "Men" | "Women" | "Footwear" | "Accessories"
// type Color = "White" | "Light Blue" | "Dark Blue" | "Black" | "Gray" | "Pink" | "Blue" | "Red" | "Navy" | "Beige" | "Olive" | "Camel" | "Cream" | "Brown" | "Green"
// type MenSize = "S" | "M" | "L" | "XL" | "XXL" | "30" | "32" | "34" | "6" | "7" | "8" | "9" | "10" | "11"
// type WomenSize = "S" | "M" | "L" | "XL" | "XXL" | "30" | "32" | "24" | "26" | "28"
// type FootwearSize = "6" | "7" | "8" | "9" | "10" | "11" | "One Size"

// {
//   "name": "string",
//   "category": "string",
//   "price": 0,
//   "originalPrice": 0,
//   "availableStock": 0,
//   "rating": 0,
//   "totalReviews": 0,
//   "description": "string",
//   "colors": [
//     "string"
//   ],
//   "sizes": [
//     "string"
//   ],
//   "images": [
//     {
//       "url": "string",
//       "altText": "string"
//     }
//   ]
// }
