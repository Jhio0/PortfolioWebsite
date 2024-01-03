import React from 'react'
import propertyImg from '../../public/assets/projects/property.jpg'
import CryptoImg from '../../public/assets/projects/crypto.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import twitchImg from '../../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem'

function Projetcs() {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'></div>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2>What Ive Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />

        <ProjectItem title='Crypto App' backgroundImg={CryptoImg} projectUrl='/property' />

        <ProjectItem title='Netflix Copy' backgroundImg={netflixImg} projectUrl='/property' />

        <ProjectItem title='Twitch' backgroundImg={twitchImg} projectUrl='/property' />

        </div>
    </div>
  )
}

export default Projetcs 