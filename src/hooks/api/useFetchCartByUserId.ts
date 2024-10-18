import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { Cart } from "@/types/Cart";

const fetchCartByUserId = async (): Promise<Cart[]> => {
  const { user, token } = useAuthStore();

  try {
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${user?.UserId}`);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${user?.UserId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while fetching the product"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

const useFetchCartByUserId = () => {
  const { user } = useAuthStore();
  return useQuery({
    queryKey: ["cartByUserId", user?.UserId],
    queryFn: () => fetchCartByUserId(),
  });
};
export { useFetchCartByUserId, fetchCartByUserId };
