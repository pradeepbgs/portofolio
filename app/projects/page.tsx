import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import * as motion from "motion/react-client";

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
      className="pb-80 pt-6"
    >
      <p className="section-label">All Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.main>
  );
}
