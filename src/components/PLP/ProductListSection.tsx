"use client";
import { FC } from "react";
import dynamic from "next/dynamic";
import ProductGrid from "./ProductGrid";
import { useFilterStore } from "@/store/filterStore";
import { Typography } from "../ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileViewFilter from "./MobileViewFilter";
import PaginationSection from "./Pagination";

const FilterSideBar = dynamic(() => import("@/components/PLP/FilterSideBar"));

const ProductListSection: FC = () => {
  const { setSortBy, setPageSize, setPageNumber } = useFilterStore();

  return (
    <div className="py-8 flex flex-col md:flex-row gap-8">
      <FilterSideBar />

      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-4">
          <Typography
            variant="p"
            value="All Products"
            className="hidden md:block text-2xl font-medium"
          />
          <div className="block md:hidden">
            <MobileViewFilter />
          </div>
          <div className="flex flex-row gap-4">
            <Select
              onValueChange={(value) => {
                setPageSize(parseInt(value));
                setPageNumber(1);
              }}
              defaultValue="16"
            >
              <SelectTrigger className="w-16 sm:w-28 md:w-40">
                <SelectValue placeholder="Page Size" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="24">24</SelectItem>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => setSortBy(value)}
              defaultValue="featured"
            >
              <SelectTrigger className="w-auto sm:w-28 md:w-40">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ProductGrid />

        <PaginationSection />
      </div>
    </div>
  );
};

export default ProductListSection;
