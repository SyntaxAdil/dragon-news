import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./../components/shared/Header";
import MarqueeText from "../components/shared/Marquee";
import Navbar from "../components/shared/Navbar";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "400", "800", "500"],
});

export const metadata = {
  title: "Dragon News",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${poppins.className}  h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col bg-base-200">
        <main className="container mx-auto max-w-6xl">{children}</main>

        {/* Footer */}
      </body>
    </html>
  );
}
