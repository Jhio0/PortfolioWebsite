"use client"
import React, {Suspense} from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetcs from "./components/Projetcs";
import Contact from "./components/Contact";

import Phone from "./components/phone";
import TitleCard from "./components/TitleCard";

import WaterDropGrid from "./components/WaterDropGridVideo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import './components/Computer.css'



const Page = () => {
  const offset = 0; // Assuming no parallax effect for Main component

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
        <div className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          lorem
        </div>
        <div className="w-full">
          <TitleCard/>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full h-auto mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="w-full">
          <TitleCard/>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          lorem
        </div>
      </div>
      
      <div className="w-full h-full mx-auto max-w-7xl px-4 md:px-0 py-10 md:py-16">
        <Contact/>
      </div>
      <Phone/>
    </div>
  );
};

export default Page;