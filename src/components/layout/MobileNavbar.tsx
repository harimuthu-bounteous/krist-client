import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import CustomImageWrapper from "../common/CustomImageWrapper";
import LoginAvatarMobile from "../common/LoginAvatarMobile";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MobileNavbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        aria-describedby={undefined}
        side="right"
        className="w-[300px] md:hidden"
      >
        <SheetHeader>
          <SheetTitle className="text-left relative">
            <CustomImageWrapper
              alt="logo"
              src="https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/KristLogo.png"
              className="h-8 w-20 bg-transparent -top-2 absolute"
              priority={true}
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
                <ShoppingCart
                  className="size-5"
                  onClick={() => {
                    router.push("/checkout");
                    setIsOpen(false);
                  }}
                />
              </Button>
            </div>

            <LoginAvatarMobile setIsOpen={setIsOpen} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
