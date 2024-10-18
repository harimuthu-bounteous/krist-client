import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="hidden md:block h-screen w-2/5 relative">
        <Image
          alt="Login Model"
          src="https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/LoginModel.png"
          width={1000}
          height={1200}
          className="h-screen w-full object-top object-cover"
          priority
        />
        <Image
          alt=""
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
