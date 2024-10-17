import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Filter } from "lucide-react";
import FilterContent from "./FilterContent";

interface MobileViewFilterProps {
  activeCategories: string[];
  setActiveCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  activeColors: string[];
  setActiveColors: (colors: string[]) => void;
  activeSizes: string[];
  setActiveSizes: (sizes: string[]) => void;
}

const MobileViewFilter: FC<MobileViewFilterProps> = ({
  activeCategories,
  activeColors,
  activeSizes,
  priceRange,
  setActiveCategories,
  setActiveColors,
  setActiveSizes,
  setPriceRange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="md:hidden w-14">
          <Filter />
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="w-[97%] sm:max-w-[425px] rounded-md"
      >
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <FilterContent
            activeCategories={activeCategories}
            activeColors={activeColors}
            activeSizes={activeSizes}
            priceRange={priceRange}
            setActiveCategories={setActiveCategories}
            setActiveColors={setActiveColors}
            setActiveSizes={setActiveSizes}
            setPriceRange={setPriceRange}
            open={isOpen}
            setOpen={setIsOpen}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileViewFilter;
