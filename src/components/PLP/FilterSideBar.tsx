"use client";

import { FC } from "react";
import FilterContent from "./FilterContent";
import MobileViewFilter from "./MobileViewFilter";

interface FilterSideBarProps {
  activeCategories: string[];
  setActiveCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  activeColors: string[];
  setActiveColors: (colors: string[]) => void;
  activeSizes: string[];
  setActiveSizes: (sizes: string[]) => void;
}

const FilterSideBar: FC<FilterSideBarProps> = ({
  activeCategories,
  activeColors,
  activeSizes,
  priceRange,
  setActiveCategories,
  setActiveColors,
  setActiveSizes,
  setPriceRange,
}) => {
  return (
    <>
      <MobileViewFilter
        activeCategories={activeCategories}
        activeColors={activeColors}
        activeSizes={activeSizes}
        priceRange={priceRange}
        setActiveCategories={setActiveCategories}
        setActiveColors={setActiveColors}
        setActiveSizes={setActiveSizes}
        setPriceRange={setPriceRange}
      />
      <aside className="hidden md:block w-64 space-y-6">
        <FilterContent
          activeCategories={activeCategories}
          activeColors={activeColors}
          activeSizes={activeSizes}
          priceRange={priceRange}
          setActiveCategories={setActiveCategories}
          setActiveColors={setActiveColors}
          setActiveSizes={setActiveSizes}
          setPriceRange={setPriceRange}
        />
      </aside>
    </>
  );
};

export default FilterSideBar;
