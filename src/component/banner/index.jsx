import React, { useEffect } from 'react';
import { IoIosPlay } from "react-icons/io";
import bg from '../../assets/i.jpg'

export default function Banner() {

  return (
    <>
      <section className='bg-dark pt-20 '>
        <div className="container mx-auto relative">
          <h2 className='font-mulish font-[950] text-[78px] sm:text-[100px] md:text-[140px] lg:text-[250px] xl:text-[260px] textStroke'>FULL </h2>
          <h2 className='font-mulish font-[950] text-[78px] sm:text-[100px] md:text-[140px] lg:text-[160px] xl:text-[260px]  stackStroke text-center leading-[.0] flex items-center justify-center'>STACK <span style={{background:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='shadow-2xl shadow-orangeRed/5  cursor-pointer w-14 h-14 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-black rounded-full flex justify-center items-center xl:text-[120px] after:w-[110%] after:h-[110%] after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full after:border-4 after:border-lightGreen after:shadow-xl after:shadow-black after:z-[-1] z-[10] relative'> <IoIosPlay className="inline-block text-white" /></span> 
            </h2>
          <h2 className='font-mulish font-[950] text-[62px] sm:text-[100px] md:text-[130px] lg:text-[160px] xl:text-[250px] pt-0 developerStroke'>DEVELOPER</h2>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-4 lg:top-20 left-1/3 md:left-2/3 animate-scale'>HTML</span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-10 right-10 sm:right-0 animate-scale'>CSS</span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-1/2 left-0 sm:left-10 animate-scale'>React JS</span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-0 sm:bottom-4 lg:bottom-14 left-10 lg:left-6 animate-scale'>JAVASCRIPT</span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-20 sm:top-40 left-1/2 animate-scale'>BOOTSTRAP</span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-24 sm:bottom-1/3 right-10 animate-scale'>TAILWIND CSS</span>
        </div>
      </section>
    </>
  )
}
