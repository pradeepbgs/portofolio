import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLinks } from "@/lib/constants";
import * as motion from "motion/react-client";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className="pb-24 pt-6"
    >
      <p className="section-label">Contact</p>

      <div className="max-w-lg">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Let&apos;s work together
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        {/* Email CTA */}
        <Link
          href="mailto:pradeepkumarbgs62019@gmail.com"
          className="group flex items-center justify-between p-5 rounded-xl glass-card-green mb-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(74, 222, 128, 0.08)",
                border: "1px solid rgba(74, 222, 128, 0.15)",
              }}
            >
              <CiMail size={18} style={{ color: "#4ade80" }} />
            </div>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "#555" }}>
                Email
              </p>
              <p
                className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors"
              >
                pradeepkumarbgs62019@gmail.com
              </p>
            </div>
          </div>
          <span className="text-lg" style={{ color: "#444" }}>
            →
          </span>
        </Link>

        {/* Social links */}
        <div className="flex gap-3">
          <Link
            href={SocialLinks.github}
            target="_blank"
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm flex-1 justify-center ghost-btn"
            style={{ color: "#888" }}
          >
            <FaGithub size={18} />
            GitHub
          </Link>
          <Link
            href={SocialLinks.linkedin}
            target="_blank"
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm flex-1 justify-center ghost-btn"
            style={{ color: "#888" }}
          >
            <FaLinkedin size={18} />
            LinkedIn
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
