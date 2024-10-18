import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useAuthRoutes = () => {
  const pathname = usePathname();

  const isAuthRoute = useMemo(() => {
    return pathname === "/login" || pathname === "/register";
  }, [pathname]);

  return isAuthRoute;
};
