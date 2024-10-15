"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { FC, useState } from "react";
import Navbar from "./Navbar";

interface MainLayoutProp {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProp> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="container mx-auto px-6 py-8">{children}</main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
