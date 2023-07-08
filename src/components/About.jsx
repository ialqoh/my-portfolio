import React from "react";
import IaImg from '../assets/ia.jpg';

const About =() =>{
    return (
    <div name='about' className='md:h-screen bg-[#ffffff] text-black-300'>
        
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
       
        <div className="p-4 "> 
        <h4 className='text-4xl  font-bold text-[#f48a32]'>
                About me
                </h4>
            
                <p className="py-6 text-[#000000]">
                Hello! My name is Ilham, and I’m 30 years old. It has been five years since I moved to NC. I am married and have a son. Traveling and discovering new places are two of my favorite things to do. During my free time, I enjoy exercising and watching movies. 

                 I enjoy creating web pages that live on the internet. I became interested in web development around 2015. I have created many
                  web pages using html, CSS, and JavaScript. I have also learned the important basics about C++, PHP, and WordPress.
                </p>
       </div>
        <div className="p-4">
        <img src={IaImg} alt='me' className="rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]" />

        </div>
        </div>
        </div>
       







    </div>
    
    )
}

export default About;