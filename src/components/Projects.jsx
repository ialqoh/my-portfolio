import React from "react";
import Work1 from '../assets/work1.jpg';
import Work2 from '../assets/work2.jpg';
import Work3 from '../assets/work3.jpg';





const Projects =() =>{
   
return (
    <div name='skills' className='w-full md:h-screen p-4 bg-[#000000] text-gray-300'>
        <div className=" max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                   
                        <p className="text-4xl py-4 font-bold inline ">Projects</p>
                        <p className="py-4 text-[#f48a32]" >Check out some of my recent projects</p>
                    

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    
                <div className='shadow-lg rounded-2xl shadow-[#fdfdfd] hover:scale-110 duration-500 bg-[#ffffff]'>
                  <img className='w-150  mx-auto rounded-2xl' src={Work1} alt="work1 img" />
                  <p className="py-4 text-center font-bold text-black">Restaurant website</p>
                  <a href="https://wcet.waketech.edu/ialqoh/GRD240/lesson10/"><button className="bg-orange-500 m-4 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-black-700 rounded-2xl">
                  See Project
                  </button></a>
                </div>
                
                <div className='shadow-lg  rounded-2xl shadow-[#fdfdfd] hover:scale-110 duration-500 bg-[#ffffff]'>
                   <img className='w-150   mx-auto rounded-2xl' src={Work3} alt="work1 img" />
                   <p className="py-4 text-center font-bold text-black">Wordpress Portfolio</p>
                  <a href="https://wcet.waketech.edu/ialqoh/WEB250/wordpress/" ><button className="bg-orange-500 m-4 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-black-700 rounded-2xl">
                  See Project
                  </button></a>
                </div>
                <div className='shadow-lg rounded-2xl shadow-[#fdfdfd] hover:scale-110 duration-500 bg-[#ffffff]'>
                  <img className='w-150  mx-auto rounded-2xl' src={Work2} alt="work1 img" />
                  <p className="py-4 text-center font-bold text-black">HTML/CSS Portfolio</p>
                  <a href="https://wcet.waketech.edu/ialqoh/WEB210/portfolio/index.html"><button className="bg-orange-500 m-4 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-black-700 rounded-2xl">
                  See Project
                  </button></a>
                </div>
                     
                   
                

                </div>

        </div>








    </div>
            
         
        )
      }

export default Projects;