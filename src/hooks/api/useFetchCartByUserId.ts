import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { Cart } from "@/types/Cart";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useFilterStore } from "@/store/filterStore";

const fetchCartByUserId = async (
  token: string,
  userId: string,
  setCart: (cart: Cart[]) => void,
  clearAuth: () => void,
  router: AppRouterInstance,
  setPageNumber: (pageNumber: number) => void
): Promise<Cart[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCart(data);
    setPageNumber(1);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 401) {
        toast("Session expired");
        clearAuth();
        router.push("/shop");
      } else {
        console.log("Error in 'useFetchCartByUserId' :", error);
      }
    }
    return [];
  }
};

const useFetchCartByUserId = () => {
  const { user, token, clearAuth } = useAuthStore();
  const { setPageNumber } = useFilterStore();
  const { setCart } = useCartStore();
  const router = useRouter();

  return useQuery({
    queryKey: ["cartByUserId", user?.UserId],
    queryFn: () =>
      fetchCartByUserId(
        token as string,
        user?.UserId as string,
        setCart,
        clearAuth,
        router,
        setPageNumber
      ),
  });
};
export { useFetchCartByUserId, fetchCartByUserId };
