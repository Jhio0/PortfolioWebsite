/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Example from './phone';
import Mcree from './Mcree';

import Computer from './Computer';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
      <Parallax pages={1} className="">
        <ParallaxLayer>
          <Computer/>
        </ParallaxLayer>
      </Parallax>
    </div>
    
  );
};

export default About;
