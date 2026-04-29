import Image from "next/image";
import Link from "next/link";
import { BiBookmarkPlus, BiShare } from "react-icons/bi";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view, _id } =
    news;

  return (
    <Link
      href={`/news/${_id}`}
      className="mx-auto mb-4 rounded-2xl border overflow-hidden border-base-300 hover:border-slate-600 transition-colors duration-150 inline-block"
    >
      
      <div className="bg-base-200 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img}
            alt={author.name || "Author Image"}
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVQI12O4/+D+fwYGBgYmBgSoqKhgAAIQBC0tLTMDAwMDEAMAERAC/RkQhgAAAABJRU5ErkJggg=="
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-sm font-semibold">{author.name}</h1>
            <p className="text-xs text-base-content/50">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-base-content/50">
          <BiBookmarkPlus size={20} />
          <BiShare size={20} />
        </div>
      </div>

      <div className="px-5 py-4 space-y-3">
        <h2 className="text-base font-semibold leading-snug">{title}</h2>
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVQI12O4/+D+fwYGBgYmBgSoqKhgAAIQBC0tLTMDAwMDEAMAERAC/RkQhgAAAABJRU5ErkJggg=="
          src={thumbnail_url}
          alt={title}
          width={400}
          height={225}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <p className="line-clamp-3 text-sm text-base-content/60 leading-relaxed">
          {details}
        </p>
        <div className="divider my-0 divide-base-300" />
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar key={idx} size={14} fill="#ff8c47" />
              ))}
            </div>
            <span className="text-sm font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1.5 text-base-content/50">
            <FaEye size={16} />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
