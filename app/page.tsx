// "use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinks } from "@/lib/constants";
import { Experience, experience } from "@/data/experience";
import * as motion from "motion/react-client"

export default function Home() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  }

  // Categorized skills data
  const categorizedSkills = [
    {
      title: "Web & Other Skills",
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
        "AWS (basic)",
        "REST APIs",
        "Go & Java ( learning and exploring )"
      ]
    },
    {
      title: "App Development",
      skills: ["React Native Expo"]
    },
    {
      title: "High-Level System Design",
      skills: [
        "Scalability Concepts",
        "API Design (High Level)",
        "Caching Strategies",
        "Microservices (Conceptual)"
      ]
    }
  ];


const profile_picture = process.env.NEXT_PUBLIC_PROFILE_URL;

  return (
    <motion.main initial={{ filter: "blur(15px)", y:20 }} animate={{ filter: "blur(0px)", opacity: 1, y:0 }} transition={transition} className="opacity-0">
      {/* About me Section */}
      <div  className="pt-10 flex gap-10 sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <Image
            src={profile_picture ?? ''}
            width={350}
            height={350}
            className="rounded-2xl"
            alt="Pradeep"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            Hi, i&apos;m pradeep 👋
          </h1>

          <div className="">
            I am a software developer who loves building softwares that developers
            use in real world.{" "}
          </div>
          {/* You can keep this sentence if you like the extra context */}
          <p className="">
            Im also actively learning and exploring system design concepts at a high level.
          </p>
          <div className="">
            I am very active on{" "}
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              x/twitter
            </Link>{" "}
            where i share my thoughts.{" "}
          </div>
          <div className="flex gap-3 ">
            <Link
              href={SocialLinks.github}
              target="_blank"
              className="flex items-center"
            >
              <FaGithub size={27} className="hover:scale-125 transition-all" />
            </Link>
            <Link
              href={SocialLinks.linkedin}
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.instagram}
              target="_blank"
              className="flex items-center"
            >
              <FaInstagram
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="flex items-center"
            >
              <FaXTwitter
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.discord}
              target="_blank"
              className="flex items-center"
            >
              <FaDiscord size={27} className="hover:scale-125 transition-all" />
            </Link>
          </div>
          <div className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-2 font-bold border w-fit border-green-800">
            open for work
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Work experience section */}
      <h1 className="text-3xl font-bold pt-10 ">Work experience</h1>
      <div>
        {experience.map((exp: Experience) => (
          <Link
            href={exp.link}
            key={exp.company}
            className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all"
          >
            <div className="flex gap-3 items-center">
              {/* <Image
                src={exp.logo}
                width={45}
                height={45}
                alt="EdSlash"
                className="rounded-full"
              /> */}
              <h2 className="font-bold underline hover:no-underline text-lg">
                {exp.company}
              </h2>
            </div>
            <h3>{exp.info}</h3>
          </Link>
        ))}
      </div>

      {/* Categorized Skills Section */}
      <h1 className="text-3xl font-bold pt-10 ">Skills</h1>
      <div className="flex flex-col gap-6 py-4"> {/* Container for skill categories */}
        {categorizedSkills.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <div className="flex flex-wrap gap-2"> {/* Container for skill tags within a category */}
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects section */}
      <h1 className="text-3xl font-bold pt-10 ">Projects</h1>
      <div className="flex flex-wrap">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            project={project}
            className=" md:w-1/2 sm:w-1/2 w-full"
            key={project.title}
          />
        ))}
        <div className="w-full flex justify-center p-4">
          <Link
            href={"/projects"}
            className="font-bold underline hover:no-underline text-lg"
          >
            Show more
          </Link>
        </div>
      </div>
    </motion.main>
  );
}