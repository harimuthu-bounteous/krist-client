import { useAuthStore } from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useDeleteFromCart = () => {
  const router = useRouter();
  const { token, user, clearAuth } = useAuthStore(); // Access token and user from Zustand store

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartId: string) => {
      if (!token || !user) {
        toast("Please kindly login for Purchasing");
        throw new Error("Authentication required");
      }

      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      // console.log("On Success : ", data);
      queryClient.invalidateQueries({
        queryKey: ["cartByUserId", user?.UserId],
      });
      toast("Deleted From Cart", {
        description: "Product deleted successfully",
        style: {
          borderColor: "green",
        },
      });
    },
    onError: (error: AxiosError) => {
      console.log("Error in 'useDeleteFromCart' :", error);

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
