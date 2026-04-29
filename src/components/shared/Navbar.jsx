"use client";
import React from "react";
import Image from "next/image";

import NavLink from "../../utils/NavLinks";
import Link from "next/link";
import { authClient } from "../../lib/auth/auth-client";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const NAV_LINKS = [
    { id: 1, href: "/", name: "Home" },
    { id: 2, href: "/about", name: "About" },
    { id: 3, href: "/carrer", name: "Carrer" },
  ];

  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-0">
      <ul className="md:text-center flex md:items-center gap-4 justify-center flex-1">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <NavLink href={link.href}>{link.name}</NavLink>
          </li>
        ))}
      </ul>

      {isPending ? (
        <span className="loading"></span>
      ) : (
        <div className="flex items-center gap-3">
          {user && (
            <div className="flex-col justify-end text-right hidden sm:flex">
              <strong>Welcome</strong>
              <p className="text-sm text-neutral-600">{user?.name}</p>
            </div>
          )}
          <Image
            src={user?.image ? user?.image : "/user.png"}
            width={100}
            height={100}
            alt={user?.name || "User name"}
            data-tip={user?.name || "User name"}
            className="h-8 w-8 sm:h-10 sm:w-10 tooltip cursor-pointer rounded-full"
          />

          {user ? (
            <button
              onClick={async () => await authClient.signOut()}
              data-tip="Logout"
              className="btn btn-neutral btn-soft tooltip"
            >
              <BiLogOut size={18} />
            </button>
          ) : (
            <Link className="btn btn-neutral w-25" href={"/sign-in"}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
