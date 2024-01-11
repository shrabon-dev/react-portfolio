import React from 'react'
import img from '../../assets/i.jpg'
import { ImPlay3 } from "react-icons/im";
import TextAnimation2 from '../TextAnimation2';

export default function Show() {
  return (
    <>
        <section className='no-repeat bg-cover h-full ' style={{ backgroundImage:`url(${img})` }}>
            <div className="container mx-auto relative p-6 md:p-0 md:py-10">
                <h2 className='font-[950] font-mulish mb-2 md:mb-0 text-[65px] sm:text-[92px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] text-white uppercase leading-[1.2]'>
                <TextAnimation2 text='We'/> 
                <TextAnimation2 text='provide '/> 
                <TextAnimation2 text='best work'/> 
                </h2>
             
                <div className="img w-auto  md:w-[200px] lg:w-[280px] lg:max-w-[340px] xl:w-[340px] relative md:absolute right-0 md:h-72 lg:h-[420px] md:top-10 lg:top-20 border p-6 rounded-md">
                    <picture>
                        <img className='w-full h-full object-cover rounded-md block relative z-0' src={img} alt={img} />
                    </picture>
              
                    <a href="#">
                        <span class="relative flex  h-14 w-14 top-0 left-1/2  -translate-x-1/2 text-white text-6xl  text-center rounded-full -translate-y-[200%] sm:-translate-y-[280%] lg:-translate-y-[380%] z-50">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightGreen "></span>
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-6xl bg-lightGreen/25 w-20 h-20 text-center rounded-full -translate-y-1/2 z-50'>
                                <ImPlay3  className='inline-block pl-2'/>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}
