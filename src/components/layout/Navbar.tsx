import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Heart, Search } from "lucide-react";
import MiniCart from "../common/MiniCart";

import LoginAvatar from "../common/LoginAvatarDesktop";
import CustomImageWrapper from "../common/CustomImageWrapper";
import { Separator } from "../ui/separator";
import MobileNavbar from "./MobileNavbar";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:border-muted">
          <CustomImageWrapper
            alt="logo"
            src="https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/KristLogo.png"
            className="h-8 w-20 bg-transparent"
            priority={true}
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
        <div className="hidden md:flex items-center gap-4 h-12">
          <div className="flex flex-row gap-4">
            {isAuthenticated && <MiniCart />}

            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <Separator orientation="vertical" className="bg-black/30" />
          <LoginAvatar />
        </div>

        {/* Mobile View */}
        <MobileNavbar />
      </nav>
    </header>
  );
}
