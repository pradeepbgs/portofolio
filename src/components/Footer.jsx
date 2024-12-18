import React from 'react'
import { AiOutlineGithub, AiOutlineX, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex justify-between p-4 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-4'>
                <div className='flex flex-row gap-8 text-gray-200 text-4xl'>
                    <a href="https://github.com/pradeepbgs/" target="_blank"><AiOutlineGithub/></a>
                    <a href="https://x.com/exvillager" target="_blank"><AiOutlineX/></a>
                    {/* <a href="https://www.youtube.com/@64TechBits" target="_blank"><AiOutlineYoutube/></a> */}
                </div>
            </div>
            <p className='text-gray-200'>@2024 Pradeep Sahu</p>
        </div>
    )
}

export default Footer