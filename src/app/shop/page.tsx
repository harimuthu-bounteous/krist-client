import { FC } from "react";
import ProductListSection from "@/components/PLP/ProductListSection";
import BreadCrumbSection from "@/components/common/BreadCrumbSection";

const page: FC = ({}) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <>
      <BreadCrumbSection links={links} />
      <ProductListSection />
    </>
  );
};

export default page;
