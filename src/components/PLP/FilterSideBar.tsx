import { FC } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

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
  const categories = ["Men", "Women", "Kids", "Accessories"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleCategoryChange = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((c) => c !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  const handleColorChange = (color: string) => {
    if (activeColors.includes(color)) {
      setActiveColors(activeColors.filter((c) => c !== color));
    } else {
      setActiveColors([...activeColors, color]);
    }
  };

  const handleSizeChange = (size: string) => {
    if (activeSizes.includes(size)) {
      setActiveSizes(activeSizes.filter((s) => s !== size));
    } else {
      setActiveSizes([...activeSizes, size]);
    }
  };

  return (
    <aside className="w-full md:w-64 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={activeCategories.includes(category)}
              onCheckedChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={`category-${category}`}>{category}</label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Colors</h2>
        {colors.map((color) => (
          <div key={color} className="flex items-center space-x-2">
            <Checkbox
              id={`color-${color}`}
              checked={activeColors.includes(color)}
              onCheckedChange={() => handleColorChange(color)}
            />
            <label htmlFor={`color-${color}`}>{color}</label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Sizes</h2>
        {sizes.map((size) => (
          <div key={size} className="flex items-center space-x-2">
            <Checkbox
              id={`size-${size}`}
              checked={activeSizes.includes(size)}
              onCheckedChange={() => handleSizeChange(size)}
            />
            <label htmlFor={`size-${size}`}>{size}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSideBar;
