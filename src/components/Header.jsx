import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
const Header =() =>{
    return (
        <div name='header' className='w-full h-screen bg-[#000000]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-orange-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ilham Alqoh
        </h1>
        <h4 className='text-4xl sm:text-7xl font-bold text-orange-200'>
          I'm a Full Stack Developer.
        </h4>

       
        
          
         
        </div>
       
        </div>
        
    )
}

export default Header;