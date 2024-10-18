import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (credentials: {
      Email: string;
      Password: string;
      Username: string;
    }) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        credentials
      );
      return response.data;
    },
    onSuccess: () => {
      alert("Registration successful");
    },
    onError: (error) => {
      console.error("Registration failed", error);
    },
  });
};
