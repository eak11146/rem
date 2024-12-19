import React from 'react'
  import Html from '../assets/images/Html.png'
import Css from '../assets/images/CSS.png'
import Javascript from '../assets/images/JS.png'
import ReactLogo from '../assets/images/React.png'
import greenuxLogo from '../assets/images/Redux.png'
import Tailwind from '../assets/images/TailwindCss.png'
import Bootstrap from '../assets/images/Bootstrap.png'
import NodeLogo from '../assets/images/NodeLogo.png'
import Mongodb from '../assets/images/mongodb.svg'
import Express from '../assets/images/Express.png'
import NextJs from '../assets/images/NextJs.png' 
//const images = import.meta.glob("./assets/images/*.{png,jpg,jpeg,svg}");

 

import { useParallax  } from 'react-scroll-parallax';

 
 

const SkillComp = () => {
 

  const parallax = useParallax({
           translateX: [0, 2], // Moves element from 0px to 50px on scroll
          scale: [0.8, 1, 'easeOutCubic'],    // Scales the element from 1 to 1.2
          shouldAlwaysCompleteAnimation: true,
          opacity: [0.8, 1],  // Fades out the element
        });
   


  return (
    <>
      <div ref={parallax.ref} className=' rounded-xl border border-green-400 shadow-lg shadow-green-200 my-5 p-5'>
 
        <h3 className='text-center text-2xl font-semibold text-white my-5'>Skills & Expertise</h3>

        <div className='flex items-center justify-center flex-wrap gap-3'>
 

          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Html} alt="" className='w-10' />
            <span className='text-green-me'>HTML</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Css} alt="" className='w-8' />
            <span className='text-green-me'>CSS</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Javascript} alt="" className='w-10' />
            <span className='text-green-me'>Javascript</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={ReactLogo} alt="" className='w-8 rounded-full' />
            <span className='text-green-me'>React</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={greenuxLogo} alt="" className='w-8' />
            <span className='text-green-me'>greenux</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Tailwind} alt="" className='w-8 rounded-full' />
            <span className='text-green-me'>Tailwind Css</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Bootstrap} alt="" className='w-10' />
            <span className='text-green-me'>Bootstrap</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={NodeLogo} alt="" className='w-10' />
            <span className='text-green-me'>Node Js</span>
          </div>
          <div className='border border-green-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Mongodb} alt="" className='w-10' />
            <span className='text-green-me'>Mongodb</span>
          </div>
          <div className='border border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={Express} alt="" className='w-10' />
            <span className='text-green-me'>Express Js</span>
          </div>
          <div className='border bg-white border-green-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-300'>
            <img src={NextJs} alt="" className='w-9' />
            <span className=''>Next Js</span>
          </div> 
        </div>


      </div>

    
      
    </>
  )
}

export default SkillComp
