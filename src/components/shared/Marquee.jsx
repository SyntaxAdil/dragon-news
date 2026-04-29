import React from "react";
import Marquee from "react-fast-marquee";
import { getBreakingNews } from "../../lib/news";

const MarqueeText = async () => {
  const LN = await getBreakingNews();

  const LATEST_NEWS = LN.map((ln) => {
    return { id: ln._id, title: ln.title };
  });

  console.log(LATEST_NEWS);
  return (
    <div className="py-4 px-2 flex items-center gap-4 bg-[#f3f3f3]">
      <button className="btn btn-error text-white">Latest</button>
      <Marquee pauseOnHover className="gap-4 ">
        {LATEST_NEWS.map((news) => (
          <span className="me-2" key={news.id}>
            {news.title} . </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeText;
