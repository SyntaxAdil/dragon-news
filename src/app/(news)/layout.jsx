import React from "react";
import Header from "../../components/shared/Header";
import MarqueeText from "../../components/shared/Marquee";

import Navbar from "./../../components/shared/Navbar";

export const metadata = {
  title: "News | Dragon News",
};

export default function NewsLayout({ children }) {
  return (
    <div className="min-h-full w-full flex flex-col">
      <header className="container mx-auto max-w-6xl ">
        <Header></Header>
        <MarqueeText></MarqueeText>
        <Navbar></Navbar>
      </header>

      <main className="container mx-auto max-w-6xl">{children}</main>

      {/* Footer */}
    </div>
  );
}
