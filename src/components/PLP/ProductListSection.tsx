"use client";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import ProductGrid from "./ProductGrid";
import { useFilterStore } from "@/store/filterStore";

const FilterSideBar = dynamic(() => import("@/components/PLP/FilterSideBar"));

const ProductListSection: FC = () => {
  const { sortBy, setSortBy } = useFilterStore();

  return (
    <div className="py-8 flex flex-col md:flex-row gap-8">
      <FilterSideBar />

      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">All Products</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-2"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductListSection;
