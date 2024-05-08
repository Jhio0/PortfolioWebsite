/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Image from 'next/image';

const Contact = () => {
  return (
    <div id='contact' className='flex items-center justify-center h-screen'>
      <div className='max-w-[500px] px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get in Touch</h2>
        <div>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <Image width={250} height={500} className='rounded-xl hover:scale-105 ease-in duration-300' src="/assets/ME.jpg" alt='/' />
              <div>
                <h2 className='py-2'>Name Here</h2>
                <p>Software Developer</p>
                <p className='py-4'>I am Available for freelance or full-time position. Contact me.</p>
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
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#home'>
            <div className='rounded-full shadow-lg shadow-gray-400 mr-4 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;