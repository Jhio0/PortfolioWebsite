import React from "react";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import Image from 'next/image'
const Example = ({ imageSrc, title }) => {
  return (
    <section className="grid place-content-center bg-white-900 p-4 md:p-12">
      <div className="md:w-auto"> {/* Adjusting width for responsiveness */}
        <FloatingPhone imageSrc={imageSrc} title={title} />
      </div>
    </section>
  );
};

const FloatingPhone = ({ imageSrc, title }) => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-violet-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className=" relative h-[120px] w-[20vh] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar imageSrc={imageSrc} title={title}/>
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = ({ imageSrc, title }) => {
  return (
    <>
      <div className="absolute right-3 z-10 flex gap-2">
        <div className='ms-2 mt-3 p-6 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2  justify-center items-center gap-5'>
              <div className='m-auto'>
                <Image src={imageSrc} width='64' height='64' alt={title} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{title}</h3>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};


const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
 
    </div>
  );
};

export default Example;