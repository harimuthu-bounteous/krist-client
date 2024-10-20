import { ProductImage } from "./Product";

export interface Cart {
  CartId: string;
  UserId: string;
  ProductId: string;
  Quantity: number;
  Color: string;
  Size: string;
  ProductName: string;
  Category: string;
  Price: number;
  Colors?: string[];
  Sizes?: string[];
  Images?: ProductImage[];
}
