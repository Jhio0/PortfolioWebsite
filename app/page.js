"use client"
import React, {useState} from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import WaterDropGrid from "./components/WaterDropGridVideo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

//projects
import TitleCard from './components/projects/titleCards/planeTitleCard'
import CapTitleCard from './components/projects/titleCards/CapstoneTitleCard'
import StyleTitleCard from './components/projects/titleCards/CapstoneTitleCard'
import WeatherAppTitleCard from './components/projects/titleCards/CapstoneTitleCard'

import SpringModal from './components/projects/modal'
import {project1Content ,project2Content, project3Content, project4Content} from './components/projects/contentFiles'
import './components/Computer.css'



const Page = () => {
  const offset = 0; // Assuming no parallax effect for Main component
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle project click and open modal with corresponding content
  const handleProjectClick = (projectContent) => {
    setSelectedProject(projectContent);
    setIsOpen(true);
  };
  return (
    <div className="doNotAllowHorizontal">
      <Navbar />
      <Parallax pages={8} className="parallax-container">
        <ParallaxLayer speed={1} offset={offset}>
          <Main />
        </ParallaxLayer>
      </Parallax>
      <WaterDropGrid />
      <div className="mobileSize w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <About />
      </div>
   
      <div className="flex flex-col md:flex-row w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="mb-5">Plane Text</h2>
        </div>
        <div className="w-full">
          <div onClick={() => handleProjectClick(project1Content)}><TitleCard /></div>
        </div>
      </div>
                                                 
      <div className="flex flex-col-reverse md:flex-row w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="w-full">
          <div onClick={() => handleProjectClick(project2Content)}><CapTitleCard /></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="mb-5">Carbon Emission Tracker</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="mb-5">Styles Boutique</h2>
        </div>
        <div className="w-full">
          <div onClick={() => handleProjectClick(project3Content)}><StyleTitleCard /></div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="w-full">
          <div onClick={() => handleProjectClick(project4Content)}><WeatherAppTitleCard /></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="mb-5">Weather Mobile App</h2>
        </div>
      </div>

      

      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} content={selectedProject} />
      <div className="w-full h-full mx-auto max-w-7xl px-4 md:px-0 py-10 md:py-16">
        <Contact/>
      </div>
    </div>
  );
};

export default Page;