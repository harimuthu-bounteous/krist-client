import { useAuthStore } from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAddToCart = () => {
  const router = useRouter();
  const { token, user, clearAuth } = useAuthStore(); // Access token and user from Zustand store

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: {
      productId: string;
      color: string;
      size: string;
      quantity: number;
    }) => {
      if (!token || !user) {
        toast("Please kindly login for Purchasing");
        throw new Error("Authentication required");
      }

      const requestData = {
        userId: user.UserId,
        ...credentials,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      console.log("On Success : ", data);
      queryClient.invalidateQueries({
        queryKey: ["cartByUserId", user?.UserId],
      });

      // router.push("/shop");
    },
    onError: (error: AxiosError) => {
      // console.log("Add to Cart failed:", error);

      if (error.status === 401) {
        clearAuth();
        toast("Session expired", {
          description: "Please login again",
          action: {
            label: "Login",
            onClick: () => router.push("/login"),
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
