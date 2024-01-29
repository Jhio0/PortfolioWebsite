/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { motion} from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
    {/**left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src="../assets/contact.jpg" alt='/'/>
                        <div>
                            <h2 className='py-2'>Name Here</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I am Available for free lance or full time position Contact me</p>
                        </div>

                        <div>
                            <p className='uppercase pt-8'>Connect with me </p>
                            <div className='flex items-center py-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 mr-4 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 mr-4 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 mr-4 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </div>                
                        </div>
                    </div>
            
                </div>
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="text" name="" id=""/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="text" name="" id=""/>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="email" name="" id=""/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="text" name="" id=""/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'/>
                                </div>
                                <div className='flex justify-center'>
                                <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-20 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Submit!</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                    <Link href='/#home'>
                        <div className='rounded-full shadow-lg shadow-gray-400 mr-4 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
                        </div>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Contact