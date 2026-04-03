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
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Python",
      "NoSQL",
      "SQL",
      "Tailwind CSS",
      "Git",
      "Docker",
      "AWS",
      "REST APIs",
      "Go",
      "Java",
    ],
  },
  {
    title: "App & System Design",
    skills: [
      "React Native Expo",
      "Scalability",
      "API Design",
      "Caching",
      "Microservices",
    ],
  },
];

export default function Home() {
  const profile_picture = process.env.NEXT_PUBLIC_PROFILE_URL;

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="pb-24"
    >
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex flex-col justify-center py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          {/* Text block */}
          <div className="flex flex-col gap-7 order-2 sm:order-1 max-w-lg">
            {/* Status badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs w-fit"
              style={{
                background: "rgba(74, 222, 128, 0.08)",
                border: "1px solid rgba(74, 222, 128, 0.2)",
                color: "#86efac",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Software Engineer @ Docxster
            </div>

            {/* Name + role */}
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-none text-white mb-3">
                Pradeep
              </h1>
              <p
                className="text-xl sm:text-2xl font-medium"
                style={{ color: "#4ade80" }}
              >
                Software Developer
              </p>
            </div>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#888" }}
            >
              I build software that developers actually use — web frameworks,
              CLI tools, and full-stack apps. Exploring system design along the
              way.
            </p>

            {/* Social buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link
                href={SocialLinks.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ghost-btn"
                style={{ color: "#aaa" }}
              >
                <FaGithub size={15} />
                GitHub
              </Link>
              <Link
                href={SocialLinks.linkedin}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ghost-btn"
                style={{ color: "#aaa" }}
              >
                <FaLinkedin size={15} />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative flex-shrink-0 order-1 sm:order-2">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(74,222,128,0.14) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <Image
              src={profile_picture ?? ""}
              width={190}
              height={190}
              className="rounded-2xl relative block"
              style={{
                border: "1px solid rgba(74,222,128,0.18)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.5)",
              }}
              alt="Pradeep"
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <div
            className="flex flex-col items-center gap-2"
            style={{ color: "rgba(74,222,128,0.22)" }}
          >
            <div
              className="w-px h-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(74,222,128,0.45), transparent)",
              }}
            />
            <span className="text-xs tracking-[0.22em] uppercase">scroll</span>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="py-10">
        <p className="section-label">Experience</p>
        <div className="flex flex-col gap-3">
          {experience.map((exp: Experience) => (
            <div key={exp.company} className="flex gap-4">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center pt-5 flex-shrink-0">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "#4ade80",
                    boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                  }}
                />
                <div
                  className="w-px flex-1 mt-2"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(74,222,128,0.2), transparent)",
                    minHeight: "24px",
                  }}
                />
              </div>

              {/* Card */}
              <Link
                href={exp.link}
                target="_blank"
                className="group flex-1 block rounded-xl p-5 glass-card-green mb-2"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.company}
                  </h3>
                  <span style={{ color: "#444" }} className="text-xs">
                    ·
                  </span>
                  <span className="text-sm" style={{ color: "#888" }}>
                    {exp.role}
                  </span>
                  <span className="text-xs sm:ml-auto" style={{ color: "#555" }}>
                    {exp.duration}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#777" }}
                >
                  {exp.info}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-10">
        <p className="section-label">Skills</p>
        <div className="flex flex-col gap-6">
          {categorizedSkills.map((cat) => (
            <div key={cat.title}>
              <p
                className="text-xs mb-3 tracking-wide font-medium"
                style={{ color: "#555" }}
              >
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs pill"
                    style={{ color: "#999" }}
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
            className="px-6 py-2.5 rounded-lg text-sm font-medium ghost-btn transition-all duration-200"
            style={{ color: "#888" }}
          >
            View all projects →
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
