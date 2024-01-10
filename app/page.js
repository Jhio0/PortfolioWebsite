"use client"
import React, {useEffect} from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetcs from "./components/Projetcs";
import Contact from "./components/Contact";

import Image from "next/image";

import Creation from '../public/assets/hero.jpg';

const Page = () => {
  useEffect(() => {
    // Scroll event for parallax effect
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      document.querySelector(".hero-back").style.backgroundSize = `100% ${100 + scrollPos}%`;
    };

    window.addEventListener("scroll", handleScroll);
 
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#2C2F34]">
    <div className="hero-back w-full h-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${Creation.src})`}}>
        <Navbar />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
          <Main />
        </div>
       <Image className="absolute" src='/../assets/hero-front.png' alt='/' layout="fill"/>
    </div>
      <Head>
        <title>Clint | Front-End Developer</title>
        <meta name="description" content="Generated bt create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className=" w-full h-auto mx-auto max-w-7xl py-10">
      <About />
      <Skills/>
      <Projetcs/>
      <Contact/>
      </div>
    </div>
 

  );
};

export default Page;