import React from "react";

import CategoryLeft from "../../../../components/news/CategoryLeft";
import MiddleHome from "../../../../components/news/MiddleHome";
import SocialRight from "../../../../components/news/SocialRight";
import { getNews, getNewsCategory } from "../../../../lib/news";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const category = await getNewsCategory();
  const news = await getNews(id);

  return (
    <div className="my-8 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 md:sticky top-16 self-start">
          <CategoryLeft id={id} category={category} />
        </div>

        <div className="md:col-span-6">
          <MiddleHome news={news} />
        </div>

        <div className="md:col-span-3 md:sticky top-16 self-start">
          <SocialRight />
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
