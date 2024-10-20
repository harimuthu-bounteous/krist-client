import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";
import { useFilterStore } from "@/store/filterStore";

interface PaginationProps {}

const PaginationSection: FC<PaginationProps> = () => {
  const { pageSize, totalProducts, pageNumber, setPageNumber } =
    useFilterStore();

  const totalPages = Math.ceil(totalProducts / pageSize);

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setPageNumber(page);
  };

  const renderPageLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={pageNumber === i}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  };

  return (
    <Pagination className="pt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious}>
            <ChevronLeft />
          </PaginationPrevious>
        </PaginationItem>

        {renderPageLinks()}

        {totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext onClick={handleNext}>
            <ChevronRight />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
