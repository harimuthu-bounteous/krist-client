"use client";
import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface LoginAvatarProps {}

const LoginAvatar: FC<LoginAvatarProps> = ({}) => {
  const router = useRouter();
  const { isAuthenticated, user, clearAuth } = useAuthStore();

  return isAuthenticated ? (
    <div className="flex flex-row items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-10 cursor-pointer">
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
          <DropdownMenuItem disabled className="font-medium">
            {user?.Email}
          </DropdownMenuItem>
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
    </div>
  ) : (
    <Button className="w-20" onClick={() => router.push("/login")}>
      Login
    </Button>
  );
};

export default LoginAvatar;
