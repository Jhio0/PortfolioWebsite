"use client"
import React, {Suspense} from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetcs from "./components/Projetcs";
import Contact from "./components/Contact";

import Computer from "./components/Computer";

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
      <div className="w-full h-auto mx-auto max-w-7xl px-4 md:px-0 py-10 md:py-16">
        <Skills />
      </div>
      <div className="w-full h-auto mx-auto  px-4 md:px-0 py-10 md:py-16">
        <Projetcs />
      </div>
    
      <div className="w-full h-full mx-auto max-w-7xl px-4 md:px-0 py-10 md:py-16">
        <Contact/>
      </div>
    </div>
  );
};

export default Page;