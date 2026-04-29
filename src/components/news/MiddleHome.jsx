import React from "react";
import NewsCard from "./NewsCard";
import NoNews from "./NoNews";

const MiddleHome = ({ news }) => {
  return (
    <>
      {" "}
      <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
      {news.length > 0 ? (
        news.map((n) => <NewsCard  key={n._id} news={n} />)
      ) : (
        <NoNews />
      )}
    </>
  );
};

export default MiddleHome;
