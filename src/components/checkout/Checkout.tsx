"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2, Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/store/cartStore";
import { useFetchCartByUserId } from "@/hooks/api/useFetchCartByUserId";
import { Typography } from "../ui/typography";
import { useUpdateCartQuantity } from "@/hooks/api/useUpdateCartQuantity";
import { useDeleteFromCart } from "@/hooks/api/useDeleteFromCart";

export default function Checkout() {
  const { data: cartItems = [], isLoading } = useFetchCartByUserId();
  const updateCartQuantityMutation = useUpdateCartQuantity();
  const deleteFromCartMutation = useDeleteFromCart();

  const { updateQuantity, removeFromCart, totalPrice } = useCartStore();

  const [discountCode, setDiscountCode] = useState("");
  const deliveryCharge = 5;

  const applyDiscount = () => {
    // In a real application, you would validate the discount code here
    console.log("Applying discount:", discountCode);
  };

  if (isLoading) {
    return (
      <div className="h-[100vh] flex items-end justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Typography
        value="Checkout"
        variant="h1"
        className="text-3xl font-bold my-3"
      />
      <div className="flex flex-col justify-evenly items-center lg:flex-row gap-8">
        <Table className="w-max table-auto border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-1/2">Products</TableHead>
              <TableHead className="w-1/6 text-right">Price</TableHead>
              <TableHead className="w-1/6 text-center">Quantity</TableHead>
              <TableHead className="w-1/6 text-right">Subtotal</TableHead>
              <TableHead className="w-1/12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.ProductId}>
                <TableCell className="">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        ("https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images" +
                          item.Images?.[0].Url) as string
                      }
                      alt={item.Images?.[0].AltText as string}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium text-sm sm:text-base truncate w-24 md:w-48">
                        {item.ProductName}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        Size: {item.Size}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${item.Price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        updateCartQuantityMutation.mutate({
                          cartId: item.CartId,
                          newQuantity: item.Quantity - 1,
                        });
                        updateQuantity(item.ProductId, -1);
                      }}
                      className="size-7"
                    >
                      <Minus className="size-3" />
                    </Button>
                    <Typography
                      value={item.Quantity || 1}
                      variant="span"
                      className="font-medium"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-7"
                      onClick={() => {
                        updateCartQuantityMutation.mutate({
                          cartId: item.CartId,
                          newQuantity: item.Quantity + 1,
                        });
                        updateQuantity(item.ProductId, 1);
                      }}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${((item.Quantity || 1) * item.Price).toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      deleteFromCartMutation.mutate(item.CartId);
                      removeFromCart(item.ProductId);
                    }}
                    className="hover:text-red-500 hover:bg-red-50"
                  >
                    {deleteFromCartMutation.isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4 text-red-500" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="bg-gray-100 p-6 rounded-lg w-full lg:w-1/3 space-y-6 border">
          <Typography
            value="Order Summary"
            variant="h2"
            className="text-xl font-semibold mb-4"
          />
          <div className="space-y-2">
            <div className="flex justify-between">
              <Typography value="Subtotal" variant="span" />
              <Typography
                value={"$" + totalPrice().toFixed(2)}
                variant="span"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Enter Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button onClick={applyDiscount}>Apply</Button>
            </div>
            <div className="flex justify-between">
              <Typography value="Delivery Charge" variant="span" />
              <Typography
                value={"$" + deliveryCharge.toFixed(2)}
                variant="span"
              />
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <Typography value="Grand Total" variant="span" />
              <Typography
                value={"$" + (totalPrice() + deliveryCharge).toFixed(2)}
                variant="span"
              />
            </div>
          </div>

          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
}
