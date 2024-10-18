"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BenefitSection from "./BenefitSection";
import { useAuthRoutes } from "@/hooks/useAuthRoute";
import { Toaster } from "@/components/ui/sonner";

interface MainLayoutProp {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProp> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const isAuthRoute = useAuthRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      {!isAuthRoute && <Navbar />}

      <main className="container mx-auto">{children}</main>

      {!isAuthRoute && <BenefitSection />}
      {!isAuthRoute && <Footer />}
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
