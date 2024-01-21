import React, { useEffect, useState } from 'react';
import { GoArrowDown } from "react-icons/go";
import bg from '../../assets/txt.png'
import TextAnimation2 from '../TextAnimation2'
import { motion,AnimatePresence } from 'framer-motion';
import SmallTextAnimation from '../SmallTextAnimation';
import men from '../../assets/men3.webp'

export default function Banner() {
  return (
    <>
      <section className='bg-dark pt-20 md:pt-36 overflow-x-hidden' id='home'>
        <div className="container mx-auto relative">

          <h2 className='font-mulish font-[950] text-[72px] sm:text-[120px] md:text-[140px] lg:text-[180px] xl:text-[260px] text-white/90 leading-[.9]'> <TextAnimation2 text='FULL'/> </h2>
          <h2 className='font-mulish lg:my-8 font-[950] text-[72px] sm:text-[100px] md:text-[140px] lg:text-[160px] xl:text-[260px] text-white/90 leading-[1.2] sm:leading-[.9] md:leading-[.9] lg:leading-[.9] flex items-center justify-start'>  <span   className=' cursor-pointer w-14 h-14 sm:w-14 sm:h-14  md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-40 xl:h-40  rounded-full flex justify-center items-center xl:text-[120px] after:w-[110%] after:h-[110%] after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full  after:border after:border-black  after:z-[-1] z-[10] relative'> <picture className="animationCircle"><img src={bg} alt="" /></picture> <GoArrowDown className="inline-block text-white text-2xl md:text-6xl absolute top-1/2 -translate-y-1/2 " /></span> <TextAnimation2 text='STACK'/>
          </h2>
          <h2 className='font-mulish font-[950] text-[48px] relative z-10 sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[200px] 2xl:text-[240px] pt-0 text-white/90 leading-[.9]'><TextAnimation2 text='DEVELOPER'/></h2>
          <span className=' absolute top-10 md:-top-11 right-0 z-[2]   w-1/3 rounded-xl overflow-hidden'><picture><img className='w-fit' src={men} alt="" /></picture></span>
          
        </div>
      </section>
    </>
  )
}
