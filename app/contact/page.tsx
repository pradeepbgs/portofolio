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
      className="pb-80 pt-6"
    >
      <p className="section-label">Contact</p>

      <div className="glass-card rounded-xl p-8 max-w-md flex flex-col gap-7">
        <div>
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Get in touch</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Interested in working together? Feel free to reach out.
          </p>
        </div>

        <Link
          href="mailto:pradeepkumarbgs62019@gmail.com"
          className="flex items-center gap-3 group w-fit"
        >
          <CiMail
            size={20}
            className="text-slate-500 group-hover:text-emerald-400 transition-colors"
          />
          <span className="text-slate-300 text-sm group-hover:text-emerald-300 transition-colors">
            pradeepkumarbgs62019@gmail.com
          </span>
        </Link>

        <div className="flex gap-4">
          <Link
            href={SocialLinks.github}
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href={SocialLinks.linkedin}
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
