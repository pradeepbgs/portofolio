import project1 from "../assets/project1.png"
import project2 from "../assets/project2.webp"
import Pingfile from '../assets/pingfile.png'
import { AiFillGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
        img: project1,
        title: "DieselJS",
        description: "Diesel is a lightweight HTTP server library for Bunjs, think like express where you build your backend , its the same with diesel you can build your backend applications",
        links: {
            site: "https://diesel-core.vercel.app/getting-started/getting-started",
            github: "https://github.com/diesel-core/diesel",
        }
    },
    {
        img: Pingfile,
        title: "PingFile",
        description: "PingFile is a command-line tool that allows you to execute API requests from configuration files defined in JSON, YAML, or PKFILE formats. It helps automate and manage API testing and execution, making it easier to work with various API configurations from a single command.",
        links: {
            site: "https://github.com/pradeepbgs/PingFile",
            github: "https://github.com/pradeepbgs/PingFile",
        }
    },
    {
        img: project2,
        title:"DevTube",
        description: "Devtube is a full-stack web application that replicates key features of the popular video-sharing platform, YouTube. It allows users to upload, watch, and interact with videos.",
        links: {
            site: "https://video-backend-3ot2.onrender.com/",
            github: "https://github.com/pradeepbgs/DevTube-backend",
        }
    }
]

const Project = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="project">
            <Reveal>
                <h2 className='text-4xl font-bold text-center text-gray-200 mb-12'>Projects</h2>
                {projects.map((project, index) => (
                    <Reveal key={index.toString()}>
                        <div key={index}
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                            <div className='w-full md:w-1/2 p-6'>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='w-full h-full object-cover rounded-lg shadow-lg'
                                />
                            </div>
                            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex space-x-4'>
                                    <a href={project.links.site}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target="_blank">
                                        View Site
                                    </a>
                                    <a href={project.links.github}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target="_blank">
                                        <AiFillGithub/>
                                    </a>

                                </div>

                            </div>

                        </div>
                    </Reveal>
                ))}
            </Reveal>

        </div>
    )
}

export default Project;
