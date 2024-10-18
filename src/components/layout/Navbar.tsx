"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Logo from "@/assets/Logo.png";
import MiniCart from "../common/MiniCart";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Typography } from "../ui/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { isAuthenticated, user, clearAuth } = useAuthStore();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:border-muted">
          <Image
            alt="logo"
            src={Logo}
            width={200}
            height={200}
            className="h-10 w-28"
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <MiniCart />
          {isAuthenticated ? (
            <div className="flex flex-row items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="size-10 cursor-pointer">
                    <AvatarImage
                      src={
                        user?.ProfileImageUrl
                          ? user?.ProfileImageUrl
                          : "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/default_dp.png"
                      }
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled className="font-medium">
                    {user?.Email}
                  </DropdownMenuItem>

                  {/* <Typography
                    value={user?.Email}
                    variant="p"
                    className="text-sm font-medium text-center"
                  /> */}

                  <DropdownMenuItem
                    onClick={() => {
                      clearAuth();
                      router.push("/login");
                    }}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button
              className="w-full"
              onClick={() => {
                setIsOpen(false);
                router.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </div>

        {/* Mobile View */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            aria-describedby={undefined}
            side="right"
            className="w-[300px]"
          >
            <SheetHeader>
              <SheetTitle className="text-left relative">
                <Image
                  alt="logo"
                  src={Logo}
                  height={200}
                  width={200}
                  className="w-24 absolute -top-2 -left-2"
                  priority
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex h-full flex-col justify-between pt-6">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-muted-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row justify-evenly">
                  <Button
                    variant="outline"
                    className="size-14"
                    onClick={() => setIsOpen(false)}
                  >
                    <Search className="size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="size-14"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="size-14"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingCart className="size-5" />
                  </Button>
                </div>

                {isAuthenticated ? (
                  <div className="flex flex-row items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Avatar className="size-12">
                          <AvatarImage
                            src={
                              user?.ProfileImageUrl
                                ? user?.ProfileImageUrl
                                : "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/default_dp.png"
                            }
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                          onClick={() => {
                            clearAuth();
                            router.push("/login");
                          }}
                        >
                          Log out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Typography
                      value={user?.Email}
                      variant="p"
                      className="text-lg font-medium "
                    />
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      router.push("/login");
                    }}
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
