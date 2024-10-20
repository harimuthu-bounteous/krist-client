"use client";

import { FC } from "react";
import FilterContent from "./FilterContent";

interface FilterSideBarProps {}

const FilterSideBar: FC<FilterSideBarProps> = ({}) => {
  return (
    <aside className="hidden md:block w-64 space-y-6">
      <FilterContent />
    </aside>
  );
};

export default FilterSideBar;
