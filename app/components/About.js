/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Example from './phone';
import Mcree from './Mcree';

import ThreeSister from './threesister';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='md:col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <div className="max-w-md"> {/* Added max-width for the paragraph content */}
            <p className='py-2 text-gray-600'>
              I specialize in building mobile responsive front-end UI applications
              that connect with APIs and other backend technologies. I’m
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, JavaScript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.
            </p>
            <p className='py-2 text-gray-600'>
              I started web development in 2013 managing multiple e-commerce
              websites on CMS platforms such as WordPress, BigCommerce, and
              Shopify. I have experience working directly with clients and taking
              mock wireframes all the way to deployed applications. In my spare
              time, I run Code Commerce, a Youtube channel where I teach web
              development and various front-end technologies.
            </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
          </div>
        </div>
        <Mcree />

      </div>
    </div>
    
  );
};

export default About;