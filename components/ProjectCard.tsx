import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col group glass-card">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.imgPath}
          width={370}
          height={200}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={project.title}
        />
        <div className="absolute top-2 right-2">
          {project.status === "online" && (
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium"
              style={{
                background: "rgba(5, 46, 22, 0.88)",
                border: "1px solid rgba(74, 222, 128, 0.35)",
                color: "#86efac",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              live
            </div>
          )}
          {project.status === "building" && (
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium"
              style={{
                background: "rgba(66, 32, 6, 0.88)",
                border: "1px solid rgba(234, 179, 8, 0.35)",
                color: "#fde047",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              building
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 rounded text-slate-400 pill"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div
          className="flex gap-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {project.githubLink && (
            <Link
              target="_blank"
              href={project.githubLink}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <FaGithub size={17} />
            </Link>
          )}
          {project.liveLink && (
            <Link
              target="_blank"
              href={project.liveLink}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <LuLink size={17} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
