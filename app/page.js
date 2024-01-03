import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projetcs from "./components/Projetcs";
import Contact from "./components/Contact";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Clint | Front-End Developer</title>
        <meta name="description" content="Generated bt create next app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills/>
      <Projetcs/>
      <Contact/>
    </div>
    
  );
};

export default Page;

