import { Loader2, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartStore } from "@/store/cartStore";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { useFetchCartByUserId } from "@/hooks/api/useFetchCartByUserId";
import { useEffect } from "react";

const MiniCart = () => {
  const { cart, removeFromCart, totalPrice } = useCartStore();
  const {
    data: cartItems = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useFetchCartByUserId();

  useEffect(() => {
    if (isSuccess) console.log(cartItems);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) console.log(error);
  }, [isError]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag
            className="h-4 w-4"
            onClick={() => {
              console.log(cart);
            }}
          />
          {cart.length > 0 && (
            <Typography
              value={cart.length}
              variant="span"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center"
            />
          )}
          <Typography value="Open Cart" variant="span" className="sr-only" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <div className="grid gap-4">
            <Typography
              value={`You have ${cart.length} items in your cart`}
              variant="h3"
              className="font-medium leading-none"
            />
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="flex items-center gap-4"
                >
                  <Image
                    src={item.product.Images[0].Url}
                    alt={item.product.Images[0].AltText}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <Typography
                      value={item.product.Name}
                      variant="h5"
                      className="font-medium"
                    />
                    <Typography
                      value={item.quantity + " x $" + item.product.Price}
                      variant="p"
                      className="text-sm text-muted-foreground"
                    />
                    <Typography
                      value={"Size: " + item.size}
                      variant="p"
                      className="text-sm text-muted-foreground"
                    />
                  </div>
                  <div className="flex justify-end items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <Typography
                        value="Remove item"
                        variant="span"
                        className="sr-only"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between font-medium">
              <Typography value="Subtotal" variant="span" />
              <Typography value={"$ " + totalPrice()} variant="span" />
            </div>
            <div className="grid gap-2">
              <Button variant="outline" className="w-full">
                View Cart
              </Button>
              <Button className="w-full">Checkout</Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default MiniCart;
