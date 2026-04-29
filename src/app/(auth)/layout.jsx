import React from "react";
import Navbar from "../../components/shared/Navbar";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-base-200 px-4">
      <Navbar></Navbar>

      <main>{children}</main>
    </div>
  );
}
