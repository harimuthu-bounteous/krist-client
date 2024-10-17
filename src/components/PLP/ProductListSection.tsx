"use client";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const FilterSideBar = dynamic(() => import("@/components/PLP/FilterSideBar"));

const ProductListSection: FC = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [activeSizes, setActiveSizes] = useState<string[]>([]);

  // const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="py-8 flex flex-col md:flex-row gap-8">
      <FilterSideBar
        activeCategories={activeCategories}
        activeColors={activeColors}
        activeSizes={activeSizes}
        priceRange={priceRange}
        setActiveCategories={setActiveCategories}
        setActiveColors={setActiveColors}
        setActiveSizes={setActiveSizes}
        setPriceRange={setPriceRange}
      />

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
        <ProductGrid
          activeCategories={activeCategories}
          priceRange={priceRange}
          activeColors={activeColors}
          activeSizes={activeSizes}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
};

export default ProductListSection;

{
  /* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={10}
        /> */
}
