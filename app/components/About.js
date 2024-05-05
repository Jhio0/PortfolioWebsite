/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Example from './phone';
import Mcree from './Mcree';

import Computer from './Computer';
import Skills from './Skills';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 h-3/4 md:h-screen flex'><Computer/></div>
      <div className='w-full md:w-1/2 h-1/4 md:h-screen flex md:order-last'></div>
    </div>

    
  );
};

export default About;
