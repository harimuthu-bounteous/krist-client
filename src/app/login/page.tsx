// "use client";

import LoginForm from "@/components/auth/LoginForm";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { toast } from "sonner";

const page: FC = ({}) => {
  // const { isAuthenticated } = useAuthStore();
  // const router = useRouter();
  // useEffect(() => {
  //   console.log(isAuthenticated);
  //   if (isAuthenticated) {
  //     router.push("/shop");
  //   }
  // }, []);
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="hidden md:block h-screen w-2/5 relative">
        <Image
          alt="Login Model"
          src="https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/LoginModel.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-screen w-full object-top object-cover"
          priority
        />
        <Image
          alt="KristLogo"
          src="https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/KristLogo.png"
          width={200}
          height={200}
          className="absolute top-4 left-6 h-12 w-28"
          priority
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default page;
