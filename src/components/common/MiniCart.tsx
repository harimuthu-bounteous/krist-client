import { Loader2, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartStore } from "@/store/cartStore";
import { Typography } from "../ui/typography";
import { useFetchCartByUserId } from "@/hooks/api/useFetchCartByUserId";
import { useDeleteFromCart } from "@/hooks/api/useDeleteFromCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card } from "../ui/card";
import CustomImageWrapper from "./CustomImageWrapper";

const MiniCart = () => {
  const router = useRouter();
  const { removeFromCart, totalPrice } = useCartStore();
  const { data: cartItems = [], isLoading } = useFetchCartByUserId();
  const deleteFromCartMutation = useDeleteFromCart();

  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  // useEffect(() => {
  //   console.log("Cart", cart);
  //   console.log("totalPrice", totalPrice());
  // }, [removeFromCart, totalPrice, addToCart, cart, updateQuantity]);

  return (
    <Popover open={isMiniCartOpen} onOpenChange={setIsMiniCartOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-4 w-4" />
          {cartItems.length > 0 && (
            <Typography
              value={cartItems.length}
              variant="span"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center"
            />
          )}
          <Typography value="Open Cart" variant="span" className="sr-only" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-96 min-h-40 flex items-center justify-center"
        align="end"
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <div className="grid gap-4">
            <Typography
              value={`You have ${cartItems.length} items in your cart`}
              variant="h3"
              className="font-medium leading-none"
            />
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card
                  key={`${item.ProductId}-${item.Color}-${item.Size}`}
                  className="flex items-center justify-between gap-4 py-2 px-2.5"
                >
                  <div className=" flex flex-row items-center gap-3">
                    <div className="h-16 w-16 rounded-md">
                      <CustomImageWrapper
                        alt={item.Images?.[0].AltText as string}
                        src={
                          ("https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images" +
                            item.Images?.[0].Url) as string
                        }
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Typography
                        value={item.ProductName}
                        variant="h5"
                        onClick={() => {
                          router.push("/product/" + item.ProductId);
                        }}
                        className="font-medium w-48 text-ellipsis truncate hover:underline cursor-pointer"
                      />
                      <Typography
                        value={item.Quantity + " x $" + item.Price}
                        variant="p"
                        className="text-sm text-muted-foreground"
                      />
                      <Typography
                        value={"Size: " + item.Size}
                        variant="p"
                        className="text-sm text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        deleteFromCartMutation.mutate(item.CartId);
                        removeFromCart(item.ProductId);
                      }}
                    >
                      {deleteFromCartMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4 text-red-500" />
                      )}
                      <Typography
                        value="Remove item"
                        variant="span"
                        className="sr-only"
                      />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-between font-medium">
              <Typography value="Subtotal" variant="span" />
              <Typography
                value={"$ " + totalPrice().toFixed(2)}
                variant="span"
              />
            </div>
            <div className="grid gap-2">
              <Button variant="outline" className="w-full">
                View Cart
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  setIsMiniCartOpen(false);
                  router.push("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default MiniCart;
