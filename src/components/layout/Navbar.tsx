import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";

export default function Navbar() {
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
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-muted-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-muted-foreground transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="hover:text-muted-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-muted-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="px-7 font-normal">Login</Button>
        </div>
      </nav>
    </header>
  );
}
