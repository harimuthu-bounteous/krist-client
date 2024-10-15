import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Krist",
  description: "Ecommerce Site for Fashion Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-jost min-h-screen bg-background">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
