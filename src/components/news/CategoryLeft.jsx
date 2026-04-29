import Link from "next/link";

const CategoryLeft = ({ category, id }) => {
  
  return (
    <div className=" w-full mx-auto">
      <h2 className="text-base font-semibold mb-5">All Category</h2>
      <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide hide-scroll-bar">
        {category.news_category.map((cat) => (
          <li key={cat.category_id} className="shrink-0 md:shrink">
            <Link
              href={`/category/${cat.category_id}`}
              className={`block hover:bg-base-300 transition-colors px-4 py-3 rounded-lg text-sm font-medium text-center whitespace-nowrap md:whitespace-normal ${id === cat.category_id ? "bg-base-300 border border-gray-300 " : "bg-base-200 "}`}
            >
              
              {cat.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryLeft;
