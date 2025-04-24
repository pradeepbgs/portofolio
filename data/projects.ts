export type Project = {
    title: string,
    description: string,
    imgPath: string
    techs: string[],
    githubLink?: string,
    liveLink?: string,
    status: 'online' | 'building'
}

export const projects: Project[] = [
    {
        title: "DevTube",
        description: "A YouTube-like full-stack app with video uploads, authentication, comments, likes, and more.",
        imgPath: "/project-images/devtube.png",
        techs: ["ReactJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT", "Multer", "Cloudinary"],
        githubLink: "https://github.com/pradeepbgs/DevTube-backend",
        liveLink: "https://video-backend-3ot2.onrender.com",
        status: 'online'
    },
    {
        title: "Diesel.js",
        description: "A web framework built using Bun.js – similar to Express, but with more advanced features.",
        imgPath: "/project-images/diesel.png",
        techs: ["Bun.js", "TypeScript", "Web Framework"],
        githubLink: "https://github.com/diesel-core/diesel",
        liveLink: "https://npmjs.com/package/diesel-core",
        status: 'online'
    },
    {
        title: "PingFile",
        description: "A CLI tool for running API requests from JSON/YAML/PKFILE configs. Great for automated testing.",
        imgPath: "/project-images/pingfile.png",
        techs: ["Node.js", "CLI", "TypeScript", "YAML", "API Testing"],
        githubLink: "https://github.com/pradeepbgs/PingFile",
        status: 'online'
    },
    {
        title: "ex-router",
        description: "A file-based routing library like Next.js for building modular backends easily.",
        imgPath: "https://pbs.twimg.com/profile_images/1906706191469662208/6I5OCfzr_400x400.jpg",
        techs: ["Node.js", "File-based Routing", "NPM Package"],
        githubLink: "https://github.com/pradeepbgs/ex-router",
        liveLink: "https://npmjs.com/package/ex-router",
        status: 'online'
    },
]
