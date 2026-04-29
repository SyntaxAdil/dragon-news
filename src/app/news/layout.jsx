import React from "react";
import SocialRight from "./../../components/news/SocialRight";
import Header from "../../components/shared/Header";

export default function NewsLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Header></Header>
      <main className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 px-4 mb-8">
        <section className="md:col-span-9" >{children}</section>
        <aside className="md:col-span-3">
          <SocialRight />
        </aside>
      </main>

      {/* Footer */}
    </div>
  );
}
