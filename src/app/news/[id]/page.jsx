import Image from "next/image";
import React from "react";
import { getNewsDeatiles } from "../../../lib/news";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const NewsDetailes = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDeatiles(id);

  const { title, image_url, details, category_id } = news[0];

  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dragon News</h2>
      <div
        href={`/category/${"01"}`}
        className="mx-auto mb-4 rounded-2xl border overflow-hidden border-base-300 hover:border-slate-600 transition-colors duration-150 inline-block"
      >
        <div className="px-5 py-6 space-y-5">
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVQI12O4/+D+fwYGBgYmBgSoqKhgAAIQBC0tLTMDAwMDEAMAERAC/RkQhgAAAABJRU5ErkJggg=="
            src={image_url}
            alt={title}
            width={400}
            height={225}
            className="w-full aspect-video object-cover rounded-xl"
          />
          <h2 className="text-2xl my-4 font-semibold leading-snug">{title}</h2>
          <p className=" text-base text-base-content/60 leading-6  ">
            {details}
          </p>
          <Link
            href={`/category/${category_id}`}
            className="btn text-white  font-normal btn-error"
          >
            <BsArrowLeft></BsArrowLeft>
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailes;
