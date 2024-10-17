import { FC } from "react";
import { Input } from "../ui/input";
import { Facebook, Instagram, Twitter, Mail, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const InformationLinks = [
    { name: "My Account", href: "/shop" },
    { name: "Login", href: "/shop" },
    { name: "My Cart", href: "/shop" },
    { name: "My Wishlist", href: "/shop" },
    { name: "Checkout", href: "/shop" },
  ];

  const ServiceLinks = [
    { name: "About Us", href: "/shop" },
    { name: "Careers", href: "/shop" },
    { name: "Delivery Information", href: "/shop" },
    { name: "Privacy Policy", href: "/shop" },
    { name: "Terms & Conditions", href: "/shop" },
  ];

  return (
    <footer className="bg-gray-900 text-white px-4 py-8 md:p-12 container mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/*  */}
          <div className="pr-12 md:w-1/4">
            <Typography
              className="text-2xl font-bold mb-4"
              variant="h2"
              value={"Krist"}
            />
            <div className="flex flex-col gap-3">
              <Typography
                variant="p"
                value={"(704) 555-0127"}
                className="m-0 p-0"
              />
              <Typography variant="p" value={"krist@example.com"} />
              <Typography
                variant="p"
                value={"3891 Ranchview Dr. Richardson, California 62639"}
              />
            </div>
          </div>
          <div className="flex flex-row gap-14 md:gap-10 md:w-1/2">
            {/*  */}
            <div className="flex flex-col gap-2 md:px-12 md:w-1/2">
              <Typography value="Information" variant="h3" />
              {InformationLinks.map((link) => (
                <Link
                  className="hover:underline"
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/*  */}
            <div className="flex flex-col gap-2 md:px-12 md:w-1/2">
              <Typography value="Service" variant="h3" />
              {ServiceLinks.map((link) => (
                <Link
                  className="hover:underline"
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col md:w-1/4">
            <Typography value="Subscribe" variant="h3" className="mb-2" />
            <Typography
              value="Enter your email below to be the first to know about new
              collections and product launches."
              variant="p"
              className="mb-4"
            />
            <form className="flex">
              <div className="relative w-full">
                <Mail
                  strokeWidth={1}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
                />
                <Input
                  type="email"
                  placeholder={"Your Email"}
                  className="pl-10 rounded-r-none bg-transparent placeholder:text-white w-full"
                />
              </div>
              <Button
                type="submit"
                className="rounded-l-none bg-transparent hover:bg-transparent border border-l-0 group"
              >
                <MoveRight className="size-5 transition-transform duration-200 group-hover:scale-125" />
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <Typography
            variant="p"
            value={"©2023 Krist All Rights are reserved"}
            className="text-sm mb-4 md:mb-0"
          />
          <div className="flex space-x-4">
            <Link
              href="/shop"
              className="text-white hover:scale-110 transition"
            >
              <span className="sr-only">Facebook</span>
              <Facebook size={24} strokeWidth={1.2} fill="white" />
            </Link>
            <Link
              href="/shop"
              className="text-white hover:scale-110 transition"
            >
              <span className="sr-only">Instagram</span>
              <Instagram size={24} strokeWidth={2.5} />
            </Link>
            <a
              href="#"
              className="text-white hover:text-primary transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter size={24} strokeWidth={1.8} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
