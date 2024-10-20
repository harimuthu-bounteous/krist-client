import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (credentials: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        credentials
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("OnSuccess in 'useRegister'", data);
      toast("Registration Successful");
      router.push("/shop");
    },
    onError: (error) => {
      console.log("Error in 'useLogin' : ", error);
      if (error instanceof AxiosError) {
        if (error.status == 409) {
          toast("User already exists");
          router.push("/register");
        }
      }
    },
  });
};
