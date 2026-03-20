import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLinks } from "@/lib/constants";
import { Experience, experience } from "@/data/experience";
import * as motion from "motion/react-client";

const categorizedSkills = [
  {
    title: "Web & Backend",
    skills: [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
      "Express.js", "Django", "Python", "NoSQL", "SQL",
      "Tailwind CSS", "Git", "Docker", "AWS (basic)", "REST APIs",
      "Go & Java (learning)",
    ],
  },
  {
    title: "App Development",
    skills: ["React Native Expo"],
  },
  {
    title: "System Design",
    skills: [
      "Scalability Concepts", "API Design", "Caching Strategies",
      "Microservices (Conceptual)",
    ],
  },
];

export default function Home() {
  const profile_picture = process.env.NEXT_PUBLIC_PROFILE_URL;

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className="pb-80"
    >

      {/* ── Hero ── */}
      <div className="min-h-[72vh] flex flex-col justify-center py-10">
        <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-end">

          {/* Profile photo */}
          <div className="relative flex-shrink-0 order-1 sm:order-2 sm:ml-auto">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(74,222,128,0.22) 0%, transparent 70%)",
                transform: "scale(1.5)",
                filter: "blur(20px)",
              }}
            />
            {/* Subtle green border glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "0 0 0 1px rgba(74,222,128,0.25), 0 8px 32px rgba(0,0,0,0.5)",
              }}
            />
            <Image
              src={profile_picture ?? ""}
              width={200}
              height={200}
              className="rounded-2xl relative"
              style={{ display: "block" }}
              alt="Pradeep"
            />
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-5 order-2 sm:order-1">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "rgba(74, 222, 128, 0.55)" }}
              >
                Software Developer
              </p>
              <h1 className="text-6xl sm:text-7xl font-bold gradient-text leading-none tracking-tight">
                Pradeep
              </h1>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              I build software that developers actually use — web frameworks,
              CLI tools, and full‑stack apps. Exploring system design along the way.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link
                href={SocialLinks.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ghost-btn text-slate-300"
              >
                <FaGithub size={15} />
                GitHub
              </Link>
              <Link
                href={SocialLinks.linkedin}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ghost-btn text-slate-300"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </Link>
            </div>

            {/* Status */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs w-fit"
              style={{
                background: "rgba(5, 46, 22, 0.4)",
                border: "1px solid rgba(74, 222, 128, 0.22)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span style={{ color: "#86efac" }}>
                Software Engineer @ Docxster
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-14">
          <div
            className="flex flex-col items-center gap-1 opacity-30"
            style={{ color: "#4ade80" }}
          >
            <div
              className="w-px h-10"
              style={{
                background: "linear-gradient(to bottom, rgba(74,222,128,0.8), transparent)",
              }}
            />
            <span className="text-xs tracking-widest uppercase">scroll</span>
          </div>
        </div>
      </div>

      {/* ── Experience ── */}
      <section className="py-10">
        <p className="section-label">Experience</p>
        <div className="flex flex-col gap-3">
          {experience.map((exp: Experience) => (
            <Link
              key={exp.company}
              href={exp.link}
              className="group block rounded-xl p-5 glass-card"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <h3 className="font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                  {exp.company}
                </h3>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-slate-400 text-sm">{exp.role}</span>
                <span className="text-slate-500 text-xs sm:ml-auto">{exp.duration}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{exp.info}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-10">
        <p className="section-label">Skills</p>
        <div className="flex flex-col gap-7">
          {categorizedSkills.map((cat) => (
            <div key={cat.title}>
              <p className="text-slate-500 text-xs mb-3 tracking-wide">{cat.title}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs text-slate-300 pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-10">
        <p className="section-label">Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgba(5, 46, 22, 0.32)",
              border: "1px solid rgba(74, 222, 128, 0.22)",
              color: "#86efac",
            }}
          >
            View all projects →
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
