import { useAuthStore } from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

export const useUpdateCartQuantity = () => {
  const router = useRouter();
  const { token, user, clearAuth } = useAuthStore(); // Access token and user from Zustand store

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { cartId: string; newQuantity: number }) => {
      if (!token || !user) {
        toast("Please kindly login for Purchasing");
        throw new Error("Authentication required");
      }

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/update`,
        { cartId: payload.cartId, quantity: payload.newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      // console.log("On Success 'useUpdateCartQuantity'", data);
      queryClient.invalidateQueries({
        queryKey: ["cartByUserId", user?.UserId],
      });
    },
    onError: (error: AxiosError) => {
      console.log("Error in 'useUpdateCartQuantity' :", error);

      if (error.status === 401) {
        clearAuth();
        toast("Session expired", {
          description: "Please login again",
          action: {
            label: "Login",
            onClick: () => redirect("/login"),
          },
          actionButtonStyle: {
            padding: 15,
            borderColor: "black",
          },
          style: {
            borderColor: "red",
          },
        });
      }
    },
  });
};
