import React,{ useRef } from 'react'
 
import mernLogo from '../assets/mernstack.png' 
import ParallaxText from '../component/ParallaxText';
import SkillComp from '../component/SkillComp';

import { getProducts } from "../data/product"
import { getImageURL } from "../utils/image-util";

import { ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {

  const products = getProducts();

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

      <div className='my-3.5'>
      More About Me
     <p className='text-white text-lg'> 
Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also run a YouTube channel where I teach Javascript, MERN Stack development, Wordpress and digital Marketing, helping others dive deep into the world of programming and technology.
     </p>
      </div>

      <div className='my-10 grid grid-cols-4 gap-4'>
      {
        products.map(product => (
            <div className="  mx-3 my-3 p-4 border border-green-400  rounded-xl" 
            key={product.id} >
                 <img 
              src={getImageURL(product.cover)} 
              alt={product.name} 
              className=" " />
            <h2 className="text-xl my-3 text-green-me">{product.title}</h2>
            <p className='text-gray-400 text-sm truncate'>{product.description}</p>

            </div>


        ))
      }
      </div>

    </div>
    </>
  )
}

export default Home
