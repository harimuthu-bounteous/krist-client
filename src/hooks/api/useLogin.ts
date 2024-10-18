import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials: { Email: string; Password: string }) => {
      // console.log("BASEURL");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
        credentials
      );
      return response.data;
    },
    onSuccess: (response) => {
      console.log(response.message);
      setAuth(JSON.parse(response.data.user), response.data.token);
      router.push("/shop");
    },
    onError: (error) => {
      console.log("Login failed :", error);
    },
  });
};
