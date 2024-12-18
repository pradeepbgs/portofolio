import profilepic from "../assets/profpic.webp"
import { TypeAnimation } from "react-type-animation"
import ShinyEffect from "./ShinyEffect"
import { Link } from 'react-scroll'
import js from '../assets/JavaScript-logo.png'
import {
    AiOutlineGithub,
    AiOutlineX,
    AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Fullstack Developer",
                            1100,
                            "React Native Mobile Application",
                            1100,
                            "Backend Developer",
                            1100,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-lg md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-5xl text-3xl tracking-tight mb-4"
                    >
                        <br />
                        Hey, I'm <br />
                        <span className="text-purple-500 md:text-5xl text-3xl">Pradeep Kumar Sahu </span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-xl text-lg mb-6"
                    >
                        I’m a passionate full-stack developer with experience in building and implementing dynamic web and mobile applications. I specialize in developing seamless full-stack solutions and intuitive mobile apps using React Native, delivering engaging user experiences across platforms.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                        >
                            <Link to="contact">Connect with Me</Link>
                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/pradeepbgs/" target="_blank">
                                <AiOutlineGithub />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/exvillager" target="_blank">
                                <AiOutlineX />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/pradeep-sahu-180b3423a/" target="_blank">
                                <AiOutlineLinkedin />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.img
                    src={profilepic}
                    className="w-[300px] md:w-[420px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>

{/* Skills Section */}
<div className="mt-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8">My Skills</h2>
    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 text-gray-300 text-lg md:text-xl"
                >
                    <span className="p-2 border border-purple-400 rounded-lg">JavaScript</span>
                    <span className="p-2 border border-purple-400 rounded-lg">TypeScript</span>
                    <span className="p-2 border border-purple-400 rounded-lg">ReactNative</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Python</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Django</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Backend</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Frontend</span>
                    <span className="p-2 border border-purple-400 rounded-lg">React</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Next.js</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Docker</span>
                    <span className="p-2 border border-purple-400 rounded-lg">Node.js</span>
                    <span className="p-2 border border-purple-400 rounded-lg">APIs</span>
                </motion.div>
</div>




            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}

export default Hero
