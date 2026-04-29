import Image from "next/image";
import React from "react";

import SocialMediaLogin from "./SocialMediaLogin";

const SocialRight = () => {
  return (
    <div className="bg-base-200">
      {/* Social media login */}
      <SocialMediaLogin />
      <div className="my-8">
        <h2 className="text-xl font-medium mb-3">Find Us On</h2>
        <div className="space-y-2">
          {[
            { src: "/fb.png", label: "Facebook", width: 10 },
            { src: "/twitter.png", label: "Twitter", width: 20 },
            { src: "/instagram.png", label: "Instagram", width: 20 },
          ].map(({ src, label, width }) => (
            <a
              href="#"
              target="_blank"
              key={label}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-base-200 hover:bg-base-100 cursor-pointer transition-colors"
            >
              <Image width={width} height={20} alt={label} src={src} />
              <p
                className={`text-sm font-medium w-fit  ${label === "Facebook" && "ms-2"}`}
              >
                {label}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-[#f3f3f3] p-4 my-8">
        <h2 className="text-xl font-medium mb-8">Q-Zone </h2>
        <div className="space-y-4 flex flex-col  justify-center">
          <Image
            width={300}
            height={300}
            alt="Image"
            src={"/swimming.png"}
            className="mx-auto"
          ></Image>
          <Image
            width={300}
            height={300}
            alt="Image"
            src={"/class.png"}
            className="mx-auto"
          ></Image>
          <Image
            width={300}
            height={300}
            alt="Image"
            src={"/playground.png"}
            className="mx-auto"
          ></Image>
        </div>
      </div>

      <div>
        <Image
          width={300}
          height={300}
          alt="Image"
          src={"/bg.png"}
          className="mx-auto"
        ></Image>
      </div>
    </div>
  );
};

export default SocialRight;
