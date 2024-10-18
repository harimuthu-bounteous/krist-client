import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
    );
    // console.log("products", data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching products"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

export { useFetchAllProducts, fetchAllProducts };
