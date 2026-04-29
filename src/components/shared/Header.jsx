import { format } from "date-fns";
import Image from "next/image";
import React from "react";

const Header = () => {
  
  return (
    <header className="mx-auto text-center my-12 space-y-2 md:space-y-3">
      <Image
        src={"/logo.png"}
        width={471}
        height={60}
        alt="logo"
        className="w-90 md:w-117.75 md:h-15 mx-auto"
      ></Image>
      <h4 className="text-[#706F6F] font-thin">
        Journalism Without Fear or Favour
      </h4>
      <p>{format(new Date(), "EEEE,LLLL dd, yyyy")}</p>
    </header>
  );
};

export default Header;
