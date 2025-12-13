import React from "react";
import Sidebar from "../ui/sidebar/Sidebar";
import StoreProvider from "../provider";

export const metadata = {
  title: "LitLoop - Buy or Rent Books",
  description: "An Online Bookstore to Sell and Rent Books",
};

export default function BookStoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen md:mx-10">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center w-full">
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}
