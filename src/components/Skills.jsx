import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import PHP from '../assets/php.png';
import SQL from '../assets/sql.jpg';
import C from '../assets/c++.png';
import WordPress from '../assets/wordpress.png';









const Skills =() =>{
   
    return (
        <div name='skills' className='w-full  md:h-screen bg-[#f49511] text-black-300'>
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <h2 className="py-8  font-bold text-4xl ">My skills</h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
        
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl bg-[#ffffff]'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={ReactJs} alt="HTML icon" />
                  <p className='my-4'>React.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={PHP} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ffffff] rounded-2xl'>
                  <img className='w-20 mx-auto' src={WordPress} alt="HTML icon" />
                  <p className='my-4'>WordPress</p>
              </div>
             

            </div>
            </div>

        </div>
     
    )
  }






export default Skills;