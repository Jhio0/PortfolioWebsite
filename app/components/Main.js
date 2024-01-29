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
        <div id='home' className='w-full h-screen'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center'>
                <div>
                    <h1 className='py-4 text-gray-700'>
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
                    <h1 className='py-4 text-gray-700'>
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
                    <div className="uppercase test-sm tracking-widest text-gray-600">
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