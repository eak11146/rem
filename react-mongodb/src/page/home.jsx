import React,{ useRef } from 'react'
 
import mernLogo from '../assets/mernstack.png' 
import ParallaxText from '../component/ParallaxText';
import SkillComp from '../component/SkillComp';

import { getProducts } from "../data/product"
import { getImageURL } from "../utils/image-util";
import css from '../assets/images/CSS.png'
import { ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {

  const products = getProducts();

  return (
    <>
    <div className='container mx-auto  md:h-[unset] md:max-w-[95%] lg:h-[100vh] lg:max-w-[70%] p-3'>
   
   <div className="w-full md:h-[250px] flex-col items-center justify-center sm:p-36">
 

      <h1 className="font-Pattaya text-5xl text-green-me font-semibold text-center ">
              Hi There, I'm  Eakawee
      </h1>  
      <h2 className="font-Pattaya text-3xl text-white font-normal text-center  my-3">
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

      <div className='my-10 grid grid-cols-1 md:grid-cols-4'>
      {
        products.map(product => (
            <div className=" mx-3 my-3 p-4 border border-zinc-500 rounded-xl
            bg-zinc-800 cursor-pointer hover:border-green-400 hover:shadow-md hover:shadow-green-300" 
            key={product.id} >
                 <img 
              src={getImageURL(product.cover)} 
              alt={product.name}               
              className=" h-12 w-12 rounded-full object-cover object-center" />
            <h2 className="text-lg font-semibold my-3 text-green-me">{product.title}</h2>
            <p className='text-gray-400 text-sm truncate'>{product.description}</p>
            {/* <img src={require('../assets/images/CSS.png')}  /> */}
            </div>


        ))
      }
      </div>

    </div>
    </>
  )
}

export default Home
