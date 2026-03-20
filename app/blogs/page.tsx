import BlogCard from "@/components/BlogCard";
import { blogmetadata } from "@/data/blogs";
import * as motion from "motion/react-client";

export default function Blogs() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className="pb-80 pt-6"
    >
      <p className="section-label">Writing</p>
      {blogmetadata.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </motion.main>
  );
}
