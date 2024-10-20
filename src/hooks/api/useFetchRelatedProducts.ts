import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/Product";

const fetchRelatedProductById = async (id: string): Promise<Product[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}/related`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error in 'useFetchRelatedProductById' : ", error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching the product"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchRelatedProductById = (id: string) => {
  return useQuery({
    queryKey: ["relatedProductById", id],
    queryFn: () => fetchRelatedProductById(id),
    staleTime: 0,
  });
};

export { useFetchRelatedProductById, fetchRelatedProductById };
