import { BlogMetadata } from "@/data/blogs";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";

export default function BlogCard({ blog }: { blog: BlogMetadata }) {
  return (
    <Link
      href={blog.link}
      target="_blank"
      className="flex flex-col gap-3 rounded-xl p-5 my-2 group glass-card"
    >
      <h2 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
        {blog.title}
      </h2>
      <div className="flex gap-4">
        <div
          className="flex items-center gap-1.5 text-xs"
          style={{ color: "#555" }}
        >
          <FaCalendar size={10} />
          <span>{blog.date}</span>
        </div>
        <div
          className="flex items-center gap-1.5 text-xs"
          style={{ color: "#555" }}
        >
          <FaClock size={10} />
          <span>{blog.readingTime}</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
        {blog.description}
      </p>
    </Link>
  );
}
