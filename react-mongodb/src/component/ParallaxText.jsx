import React from 'react'
import { useParallax  } from 'react-scroll-parallax';
import mernLogo from '../assets/mernstack.png'
const ParallaxText = () => {
    const parallax = useParallax({
        translateY: [0, 50], // Moves element from 0px to 50px on scroll
        scale: [0.51, 1, 'easeOutCubic'],    // Scales the element from 1 to 1.2
        shouldAlwaysCompleteAnimation: true,
        opacity: [0.5, 1],  // Fades out the element
      });
 
      
  return (
    <>
       <div ref={parallax.ref} style={{ marginBottom: "80px"  }}  
       className=' flex-row items-center justify-items-center'
       >    
            <div className='bg-green-css rounded-xl  border-2 shadow-lg shadow-green-200   p-3'>
                <p>
                I'm a passionate web developer with expertise in React, Next.js, PHP ,CSS HTML JQUERY and Nodejs mysql mongodb ..., and modern web technologies. I love creating beautiful and functional website that solve real world problems.
                </p>
                
              </div>
                
              
        </div>
    </>
  )
}

export default ParallaxText
