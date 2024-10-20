import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

interface LoginAvatarMobileProps {
  setIsOpen: (isOpen: boolean) => void;
}

const LoginAvatarMobile: FC<LoginAvatarMobileProps> = ({ setIsOpen }) => {
  const router = useRouter();
  const { isAuthenticated, user, clearAuth } = useAuthStore();

  return isAuthenticated ? (
    <div className="flex flex-row items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-12">
            <AvatarImage
              src={
                user?.ProfileImageUrl
                  ? user?.ProfileImageUrl
                  : "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images/default_dp.png"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => {
              clearAuth();
              router.push("/login");
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Typography
        value={user?.Email}
        variant="p"
        className="text-lg font-medium "
      />
    </div>
  ) : (
    <Button
      className="w-full"
      onClick={() => {
        setIsOpen(false);
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginAvatarMobile;
