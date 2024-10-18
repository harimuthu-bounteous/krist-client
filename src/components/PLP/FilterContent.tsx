import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { useFilterStore } from "@/store/filterStore";

interface FilterContentProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const FilterContent: FC<FilterContentProps> = ({ open, setOpen }) => {
  const {
    activeCategories,
    activeColors,
    activeSizes,
    priceRange,
    setActiveCategories,
    setActiveColors,
    setActiveSizes,
    setPriceRange,
  } = useFilterStore();

  const categories = ["Men", "Women", "Kids", "Accessories"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const [tempCategories, setTempCategories] = useState(activeCategories);
  const [tempColors, setTempColors] = useState(activeColors);
  const [tempSizes, setTempSizes] = useState(activeSizes);
  const [tempPriceRange, setTempPriceRange] = useState(priceRange);

  const handleCategoryChange = (category: string) => {
    if (tempCategories.includes(category)) {
      setTempCategories(tempCategories.filter((c) => c !== category));
    } else {
      setTempCategories([...tempCategories, category]);
    }
  };

  const handleColorChange = (color: string) => {
    if (tempColors.includes(color)) {
      setTempColors(tempColors.filter((c) => c !== color));
    } else {
      setTempColors([...tempColors, color]);
    }
  };

  const handleSizeChange = (size: string) => {
    if (tempSizes.includes(size)) {
      setTempSizes(tempSizes.filter((s) => s !== size));
    } else {
      setTempSizes([...tempSizes, size]);
    }
  };

  const handleClear = () => {
    setTempCategories([]);
    setTempColors([]);
    setTempSizes([]);
    setTempPriceRange([0, 1000]);
  };

  const handleApply = () => {
    setActiveCategories(tempCategories);
    setActiveColors(tempColors);
    setActiveSizes(tempSizes);
    setPriceRange(tempPriceRange);
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="h-[70vh] flex flex-col gap-8 md:h-auto overflow-y-scroll md:overflow-auto bg-gray-100 py-2 px-4 md:p-5  rounded-md">
        <div>
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={tempCategories.includes(category)}
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
            value={tempPriceRange}
            onValueChange={(value) =>
              setTempPriceRange(value as [number, number])
            }
          />
          <div className="flex justify-between mt-2">
            <span>${tempPriceRange[0]}</span>
            <span>${tempPriceRange[1]}</span>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Colors</h2>
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={tempColors.includes(color)}
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
                checked={tempSizes.includes(size)}
                onCheckedChange={() => handleSizeChange(size)}
              />
              <label htmlFor={`size-${size}`}>{size}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" onClick={handleClear} className="flex-1">
          Clear
        </Button>
        <Button onClick={handleApply} className="flex-1">
          Apply
        </Button>
      </div>
    </>
  );
};

export default FilterContent;
