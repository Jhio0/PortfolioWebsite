import React from 'react';
import Computer from './Computer';
import Skills from './Skills';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col md:flex-row'>
      <div className='w-full md:w-3/4 h-3/4 md:h-screen flex'>
        <Computer/>
      </div>
      <div className='w-full md:w-full h-3/4 md:h-auto md:order-last flex'>
        <Skills/>
      </div>
    </div>
  );
};

export default About;
