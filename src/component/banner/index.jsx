import React, { useEffect, useState } from 'react';
import { IoIosPlay } from "react-icons/io";
import bg from '../../assets/i.jpg'
import TextAnimation2 from '../TextAnimation2'
import { motion,AnimatePresence } from 'framer-motion';
import SmallTextAnimation from '../SmallTextAnimation';

export default function Banner() {
  return (
    <>
      <section className='bg-dark pt-36 ' id='home'>
        <div className="container mx-auto relative">
          <h2 className='font-mulish font-[950] text-[78px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[260px] text-white/90 leading-[.9]'> <TextAnimation2 text='FULL'/> </h2>
          <h2 className='font-mulish lg:my-8 font-[950] text-[78px] sm:text-[100px] md:text-[140px] lg:text-[160px] xl:text-[260px] text-white/90  text-center leading-[1.2] sm:leading-[.9] md:leading-[.9] lg:leading-[.9] flex items-center justify-center'> <TextAnimation2 text='STACK'/> <span style={{background:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='shadow-2xl shadow-orangeRed/5  cursor-pointer w-14 h-14 sm:w-14 sm:h-14  md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-40 xl:h-40 bg-black rounded-full flex justify-center items-center xl:text-[120px] after:w-[110%] after:h-[110%] after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full after:border-4 after:border-lightGreen after:shadow-xl after:shadow-black after:z-[-1] z-[10] relative'> <IoIosPlay className="inline-block text-white" /></span>
          </h2>
          <h2 className='font-mulish font-[950] text-[62px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[200px] 2xl:text-[240px] pt-0 text-white/90 leading-[.9]'><TextAnimation2 text='DEVELOPER'/></h2>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-4 lg:top-20 left-1/3 md:left-2/3 animate-scale'><SmallTextAnimation text='HTML'/></span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-10 right-10 sm:right-0 animate-scale'><SmallTextAnimation text='CSS'/></span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-1/2 left-0 sm:left-10 animate-scale'><SmallTextAnimation text='React'/></span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-0 sm:bottom-4 lg:bottom-0 left-10 lg:left-6 animate-scale'><SmallTextAnimation text='JavaScript'/></span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute top-20 sm:top-40 left-1/2 animate-scale'><SmallTextAnimation text='BOOTSTRAP'/></span>
          <span className='font-kodchasan text-base md:text-4xl font-bold uppercase text-shadowLight absolute bottom-24 sm:bottom-1/3 right-10 animate-scale'><SmallTextAnimation text='TAILWIND'/></span>
        </div>
      </section>
    </>
  )
}
