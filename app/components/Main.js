"use client"
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { motion} from 'framer-motion'

const Main = () => {
    const text = "Coding visionary ready to bring your ideas to life.".split(" ");
    const name = "Hi, I am Jhio".split(" ");
    const jobDes = "A Software Developer".split("");

    return (
        <div id='home' className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-[1240px] w-full mx-auto p-2 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='py-4 text-gray-700 text-3xl md:text-4xl lg:text-5xl'>
                        {name.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.30,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </h1>
                    <h1 className='py-4 text-gray-700 text-3xl md:text-4xl lg:text-5xl'>
                        {jobDes.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.30,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </h1>
                    <div className="uppercase text-sm tracking-widest text-gray-600 text-center">
                        {text.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.30,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main