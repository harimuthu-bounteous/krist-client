import { FC } from "react";
import ProductListSection from "@/components/PLP/ProductListSection";
import BreadCrumbSection from "@/components/common/BreadCrumbSection";

const page: FC = ({}) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <div className="p-6">
      <BreadCrumbSection links={links} />
      <ProductListSection />
    </div>
  );
};

export default page;
