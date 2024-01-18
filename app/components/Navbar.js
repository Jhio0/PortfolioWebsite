'use client'
import React, {useState, useEffect}from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() =>{
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadows-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                <button class="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">button Three</button>
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                    <Link href="/#about" >
                        <li className='ml-10 text-sm uppercase hover-border-b'>About</li>
                    </Link>
                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover-border-b'>Skills</li>
                    </Link>
                    <Link href="/#project">
                        <li className='ml-10 text-sm uppercase hover-border-b'>Projects</li>
                    </Link>
                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover-border-b'>Contacts</li>
                    </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div> 

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div 
                className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[45] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='flex w-full items-center justify-between'>
                        <div>
                            <Image src='/../assets/navLogo.png' width='87' height='35' alt='/'/>
                        </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                        
                    </div>

                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[58%] md:w-[90%] py-4'>Lets build something legendary together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contacts</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar

