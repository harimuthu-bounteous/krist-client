"use client";

import { FC } from "react";
import FilterContent from "./FilterContent";
import MobileViewFilter from "./MobileViewFilter";
import { useFilterStore } from "@/store/filterStore";

interface FilterSideBarProps {}

const FilterSideBar: FC<FilterSideBarProps> = ({}) => {
  return (
    <>
      <MobileViewFilter />
      <aside className="hidden md:block w-64 space-y-6">
        <FilterContent />
      </aside>
    </>
  );
};

export default FilterSideBar;
