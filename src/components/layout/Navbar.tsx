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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Button className="px-7 font-normal">Login</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            aria-describedby={undefined}
            side="right"
            className="w-[300px] sm:w-[400px]"
          >
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  alt="logo"
                  src={Logo}
                  height={200}
                  width={200}
                  className="h-9 w-24"
                />
              </SheetTitle>
            </SheetHeader>
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
            <div className="flex flex-col space-y-4 mt-6">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="mr-2 h-4 w-4" /> Wishlist
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Cart
              </Button>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
