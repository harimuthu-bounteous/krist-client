import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/Product";

const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching the product"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchProductById = (id: string) => {
  return useQuery({
    queryKey: ["productById", id],
    queryFn: () => fetchProductById(id),
  });
};

export { useFetchProductById, fetchProductById };
