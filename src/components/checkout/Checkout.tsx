// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface Product {
//   id: number;
//   name: string;
//   size: string;
//   price: number;
//   image: string;
// }

// const initialProducts: Product[] = [
//   {
//     id: 1,
//     name: "Girls Pink Moana Printed Dress",
//     size: "S",
//     price: 80,
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 2,
//     name: "Women Textured Handheld Bag",
//     size: "Regular",
//     price: 80,
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 3,
//     name: "Tailored Cotton Casual Shirt",
//     size: "M",
//     price: 40,
//     image: "/placeholder.svg?height=80&width=80",
//   },
// ];

// export default function Checkout() {
//   const [products, setProducts] = useState(initialProducts);
//   const [discountCode, setDiscountCode] = useState("");
//   const deliveryCharge = 5;

//   const updateQuantity = (id: number, change: number) => {
//     setProducts(
//       products.map((product) =>
//         product.id === id
//           ? {
//               ...product,
//               quantity: Math.max((product.quantity || 1) + change, 0),
//             }
//           : product
//       )
//     );
//   };

//   const removeProduct = (id: number) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const subtotal = products.reduce(
//     (sum, product) => sum + product.price * (product.quantity || 1),
//     0
//   );
//   const grandTotal = subtotal + deliveryCharge;

//   const applyDiscount = () => {
//     // In a real application, you would validate the discount code here
//     console.log("Applying discount:", discountCode);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-2/3">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Products</TableHead>
//                 <TableHead>Price</TableHead>
//                 <TableHead>Quantity</TableHead>
//                 <TableHead>Subtotal</TableHead>
//                 <TableHead></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>
//                     <div className="flex items-center space-x-4">
//                       <Image
//                         src={product.image}
//                         alt={product.name}
//                         width={80}
//                         height={80}
//                         className="rounded"
//                       />
//                       <div>
//                         <div className="font-medium">{product.name}</div>
//                         <div className="text-sm text-gray-500">
//                           Size: {product.size}
//                         </div>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell>${product.price.toFixed(2)}</TableCell>
//                   <TableCell>
//                     <div className="flex items-center space-x-2">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(product.id, -1)}
//                       >
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span>{product.quantity || 1}</span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() => updateQuantity(product.id, 1)}
//                       >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     ${((product.quantity || 1) * product.price).toFixed(2)}
//                   </TableCell>
//                   <TableCell>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => removeProduct(product.id)}
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="lg:w-1/3 space-y-6">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   placeholder="Enter Discount Code"
//                   value={discountCode}
//                   onChange={(e) => setDiscountCode(e.target.value)}
//                 />
//                 <Button onClick={applyDiscount}>Apply</Button>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery Charge</span>
//                 <span>${deliveryCharge.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-semibold text-lg">
//                 <span>Grand Total</span>
//                 <span>${grandTotal.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//           <Button className="w-full">Proceed to Checkout</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
