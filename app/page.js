"use client"
import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetcs from "./components/Projetcs";
import Contact from "./components/Contact";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Clint | Front-End Developer</title>
        <meta name="description" content="Generated bt create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Parallax pages={10}>
        <Navbar />

        <ParallaxLayer offset={0}>
          <Main />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <Skills/>
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <Projetcs/>
        </ParallaxLayer>

        <ParallaxLayer offset={5}>     
          <Contact/>
        </ParallaxLayer>

      </Parallax>
      
    </div>
    
  );
};

export default Page;

