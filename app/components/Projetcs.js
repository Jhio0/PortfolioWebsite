import React from 'react'
import propertyImg from '../../public/assets/projects/property.jpg'
import CryptoImg from '../../public/assets/projects/crypto.jpg'
import netflixImg from '../../public/assets/projects/netflix.jpg'
import twitchImg from '../../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem'

import Cards from './cards'
const Projetcs = () => {
  return (
    <div id='project' >
        <div className='max-w-[1240px] mx-auto px-2 py-16'></div>
        <p className='flex justify-center text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='flex justify-center'>What Ive Built</h2>
        
        <Cards />
    </div>
  )
}

export default Projetcs 

{/* <div className='grid md:grid-cols-2 gap-8'>

<ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />

<ProjectItem title='Crypto App' backgroundImg={CryptoImg} projectUrl='/property' />

<ProjectItem title='Netflix Copy' backgroundImg={netflixImg} projectUrl='/property' />

<ProjectItem title='Twitch' backgroundImg={twitchImg} projectUrl='/property' />

</div> */}