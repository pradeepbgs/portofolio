import { BlogMetadata } from "@/data/blogs";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";

export default function BlogCard({ blog }: { blog: BlogMetadata }) {
  return (
    <Link
      href={blog.link}
      target="_blank"
      className="flex flex-col gap-3 rounded-xl p-5 my-3 group glass-card"
    >
      <h2 className="text-lg font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors leading-snug">
        {blog.title}
      </h2>
      <div className="flex gap-5">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <FaCalendar size={11} />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <FaClock size={11} />
          <span>{blog.readingTime}</span>
        </div>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{blog.description}</p>
    </Link>
  );
}
