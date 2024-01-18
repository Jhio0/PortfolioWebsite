"use client"
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { motion} from 'framer-motion'


const Main = () => {

    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <motion.div
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.5, delay: 0.30}}
                >
                    <p className='uppercase test-sm tracking-widest text-gray-600'>Lets Build Something Together</p>
                    <h1 className='py-4 text-gray-700'>Hi, I am<span className='text-[#5651e5]'> Jhio</span></h1>
                    <h1 className='py-2 text-gray-700'>A Software Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>If youre looking for a shorthand way to generate Lorem Ipsum placeholder text in Visual Studio Code using the ES7 React/Redux/GraphQL/React-Native snippets extension, you can use the lorem snippet. Heres how you can do it:</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default Main