import React,{ useRef } from 'react'
 
import mernLogo from '../assets/mernstack.png'
import imageMid from '../assets/images/parallax-demon-woods-mid-trees.png';


const Home = () => {

   
  return (
    <>
    <div className='container mx-auto justify-center md:h-[unset] md:max-w-[95%] lg:h-[100vh] lg:max-w-[70%] p-3'>
       <h1 className="text-3xl text-green-me font-normal">
       Hi There, I'm  Eakawee
    </h1> 
    <h2>
      Web Developer & Designer
    </h2>    
    <div className='bg-green-css rounded-xl  border-2 justify-items-center p-3'>
      <p className='my-3'>
      I'm a passionate web developer with expertise in React, Next.js, PHP ,CSS HTML JQUERY and Nodejs mysql mongodb ..., and modern web technologies. I love creating beautiful and functional website that solve real world problems.
      </p>
      
    </div>
    

    <div className='grid justify-items-center w-full my-3'>
      <img src={ mernLogo } style={{ height:'60px'}} className=''/>
    </div>
 

    </div>
    </>
  )
}

export default Home
