import React from 'react'
import Image from 'next/image'
import Phone from "./phone";

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='skill-container grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>


            <Phone imageSrc='/assets/skills/html.png' title='HTML'/>
            <Phone imageSrc='/assets/skills/css.png' title='CSS' />
            <Phone imageSrc='/assets/skills/javascript.png' title='JavaScript' />
            <Phone imageSrc='/assets/skills/react.png' title='React' />
            <Phone imageSrc='/assets/skills/tailwind.png' title='Tailwind' />
            <Phone imageSrc='/assets/skills/firebase.png' title='Firebase' />
            <Phone imageSrc='/assets/skills/github1.png' title='Github' />
            <Phone imageSrc='/assets/skills/python.png' title='Python' />
            <Phone imageSrc='/assets/skills/typeScript.png' title='TypeScript' />

               
            </div>
        </div>
    </div>
  )
}

export default Skills