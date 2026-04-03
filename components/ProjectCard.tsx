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
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <Image
          src={project.imgPath}
          width={400}
          height={180}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={project.title}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
          }}
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          {project.status === "online" && (
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(74, 222, 128, 0.28)",
                color: "#86efac",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              live
            </div>
          )}
          {project.status === "building" && (
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(234, 179, 8, 0.28)",
                color: "#fde047",
                backdropFilter: "blur(8px)",
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
        <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0.5 rounded-md pill"
              style={{ color: "#888" }}
            >
              {tech}
            </span>
          ))}
        </div>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#777" }}
        >
          {project.description}
        </p>

        <div
          className="flex gap-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {project.githubLink && (
            <Link
              target="_blank"
              href={project.githubLink}
              className="text-[#666] hover:text-emerald-400 transition-colors"
            >
              <FaGithub size={17} />
            </Link>
          )}
          {project.liveLink && (
            <Link
              target="_blank"
              href={project.liveLink}
              className="text-[#666] hover:text-emerald-400 transition-colors"
            >
              <LuLink size={17} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
