import { FaNewspaper } from "react-icons/fa";

const NoNews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl border border-dashed border-base-300 bg-base-100 my-4">
      <FaNewspaper className="text-4xl text-base-content/20 mb-4" />
      <h2 className="text-base font-semibold text-base-content/60">No News Found</h2>
      <p className="text-sm text-base-content/40 mt-1">There are no articles in this category yet.</p>
    </div>
  );
};

export default NoNews;