"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/" || pathname.startsWith("/category")
      : pathname === href;

  return (
    <Link href={href} className={`${isActive ? "underline font-medium" : ""} ${className ?? ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;