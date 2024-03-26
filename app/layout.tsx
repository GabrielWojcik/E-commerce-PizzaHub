"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pizza",
//   description: "PizzaHub",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    
    <>
      <div className={inter.className}>
        <NavBar />
        {children}
      </div>
    </>
  );
}
