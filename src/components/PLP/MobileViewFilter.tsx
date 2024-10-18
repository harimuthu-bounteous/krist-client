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

interface MobileViewFilterProps {}

const MobileViewFilter: FC<MobileViewFilterProps> = ({}) => {
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
          <FilterContent open={isOpen} setOpen={setIsOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileViewFilter;
