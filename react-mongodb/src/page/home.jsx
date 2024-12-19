import React,{ useRef } from 'react'
 
import mernLogo from '../assets/mernstack.png'
 
import ParallaxText from '../component/ParallaxText';
import SkillComp from '../component/SkillComp';


const Home = () => {

   
  return (
    <>
    <div className='container mx-auto  md:h-[unset] md:max-w-[95%] lg:h-[100vh] lg:max-w-[70%] p-3'>
   
   <div className="h-[250px] flex-col items-center justify-center p-36">
      <h1 className="font-Pattaya text-5xl text-green-me font-semibold text-center ">
              Hi There, I'm  Eakawee
      </h1>  
      <h2 className="font-Pattaya text-xl text-white font-normal text-center  my-3">
        Web Developer & Designer
      </h2>  
   </div>
       
 
    <ParallaxText />  
    <div className=''>
    <img src={ mernLogo } style={{ height:'70px'}} className='mx-auto  my-10 '/>
    </div>
       
     <SkillComp />
 

    </div>
    </>
  )
}

export default Home
