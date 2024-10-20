import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FC } from "react";
import { Button } from "../ui/button";
import { useFilterStore } from "@/store/filterStore";
import { useFetchFilteredProducts } from "@/hooks/api/useFetchFilteredProducts";
import FilterSectionSkeleton from "../skeleton/FilterSectionSkeleton";

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

  const { isLoading, isRefetching, isFetching } = useFetchFilteredProducts();

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

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const handleClear = () => {
    setActiveCategories([]);
    setActiveColors([]);
    setActiveSizes([]);
    setPriceRange([0, 1000]);
  };

  const isAnyFilterApplied =
    activeCategories.length > 0 ||
    activeColors.length > 0 ||
    activeSizes.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 1000;

  if (isLoading || isRefetching || isFetching) {
    return <FilterSectionSkeleton />;
  }

  return (
    <>
      <div className="h-[70vh] flex flex-col gap-8 md:h-auto overflow-y-scroll md:overflow-auto bg-gray-100 py-2 px-4 md:p-5  rounded-md">
        <div>
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={activeCategories.includes(category)}
                onCheckedChange={() => {
                  handleCategoryChange(category);
                }}
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
            onValueChange={(value) =>
              handlePriceChange(value as [number, number])
            }
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
      </div>

      {isAnyFilterApplied && (
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleClear} className="flex-1">
            Clear
          </Button>
        </div>
      )}
    </>
  );
};

export default FilterContent;
