import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FilterSideBar from "@/components/PLP/FilterSideBar";
import ProductListSection from "@/components/PLP/ProductListSection";

const page: FC = ({}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-lg font-medium">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ProductListSection />
    </>
  );
};

export default page;
