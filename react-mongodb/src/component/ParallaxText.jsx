import React from 'react'
import { useParallax  } from 'react-scroll-parallax';
import mernLogo from '../assets/mernstack.png'
const ParallaxText = () => {
    const parallax = useParallax({
        translateY: [0,2], // Moves element from 0px to 50px on scroll
        scale: [0.8, 1, 'easeOutCubic'],    // Scales the element from 1 to 1.2
        shouldAlwaysCompleteAnimation: true,
        opacity: [0.8, 1],  // Fades out the element
      });
 
      
  return (
    <>
       <div ref={parallax.ref} style={{ marginBottom: "100px"  }}  
       className=' flex-row items-center justify-items-center'
       >    
            <div className='bg-green-css rounded-xl text-center  border-2 shadow-lg shadow-green-200   p-5'>
                <h3 className='text-md leading-8'>
                I'm a passionate web developer with expertise in React, Next.js, PHP ,CSS HTML JQUERY and Nodejs mysql mongodb ...And modern web technologies. I love creating beautiful and functional website that solve real world problems.
                </h3>
                
              </div>
                
              
        </div>
    </>
  )
}

export default ParallaxText
