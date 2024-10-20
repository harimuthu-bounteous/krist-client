import { useFilterStore } from "@/store/filterStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface FetchFilteredProductsRequest {
  categories: string[];
  colors: string[];
  sizes: string[];
  minPrice: number;
  maxPrice: number;
  sortBy: string;
  pageNumber: number;
  pageSize: number;
}

const fetchFilteredProducts = async (
  requestBody: FetchFilteredProductsRequest,
  setTotalProducts: (totalProducts: number) => void
) => {
  // const { setTotalProducts } = useFilterStore();
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/filter`,
      requestBody
    );
    // console.log("Success in 'useFilteredProducts'", response.data);

    setTotalProducts(response.data.totalNumberOfProducts);
    if (response.data) return response.data.paginatedProducts;
    else return [];
  } catch (error) {
    console.log("Error in 'useFilteredProducts' : ", error);
  }
};

const useFetchFilteredProducts = () => {
  const {
    activeCategories,
    activeColors,
    activeSizes,
    priceRange,
    sortBy,
    pageNumber,
    pageSize,
    setTotalProducts,
  } = useFilterStore();

  const requestBody: FetchFilteredProductsRequest = {
    categories: activeCategories,
    colors: activeColors,
    sizes: activeSizes,
    sortBy: sortBy,
    maxPrice: priceRange[1],
    minPrice: priceRange[0],
    pageNumber,
    pageSize,
  };

  return useQuery({
    queryKey: ["filteredProducts"],
    queryFn: () => fetchFilteredProducts(requestBody, setTotalProducts),
  });
};

export { useFetchFilteredProducts, fetchFilteredProducts };
