import React from 'react'
import img from '../../assets/about.jpg'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import hover from '../../assets/hover.png'
import shape1 from '../../assets/Polygon 5.png'

export default function About() {
  return (
    <>
        <section className='bg-dark h-full relative '>
            {/* shape for animation start */}
                <span className='w-20 h-20  rounded-full bg-gradient-to-r from-[#191E1C] to-[#101010] inline-block absolute top-40 left-40 animate-pulse'></span>
                <span className='w-10 h-10  rounded-full bg-gradient-to-r from-[#191E1C] to-[#0c0c0c] inline-block absolute top-72 right-40 animate-pulse'></span>
                <span className='w-14 h-14  rounded-full bg-gradient-to-r from-[#0f0f0f] to-[#191E1C] inline-block absolute top-96 right-80 animate-pulse'></span>
                <span className='inline-block absolute bottom-10 sm:top-3/4 right-96 lg:right-[85%] animate-pulse'>
                    <picture>
                        <img src={shape1} alt={shape1} />
                    </picture>
                </span>
            {/* shape for animation end */}
            <span className=''></span>
            <div className="container mx-auto py-20">
                <h3 className='font-kodchasan font-bold text-[50px] sm:text-[70px] md:text-[80px] lg:text-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r from-orangeRed to-lightGreen pb-10'>MUHAMMAD ALI</h3>
                <div className="aboutInfo flex flex-col sm:flex-row justify-between md:items-center">
                <div className="img sm:w-1/2">
                    <picture>
                        <img className='block w-1/2 rounded-md mx-auto' src={img} alt="" />
                    </picture>
                </div>
                <div className="info  sm:w-1/2 pt-10 sm:pt-0 pl-4 sm:pl-0">
                    <h4 className='font-bold text-2xl sm:text-2xl lg:text-4xl font-kodchasan text-white/95 uppercase'>Muhammad Sulaiman</h4>
                    <h6 className='font-bold text-lg lg:text-2xl font-kodchasan text-lightGreen py-3'>Full Stack Developer</h6>
                    <p className='font-normal text-sm lg:text-lg font-kodchasan text-shadowLight w-4/5 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                    <p className='font-normal text-sm lg:text-lg font-kodchasan text-shadowLight/90 w-4/5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                    <ul className='flex gap-4 pt-10'>
                        <li><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaYoutube className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></li>
                        <li><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaInstagram className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></li>
                        <li><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><BsTwitterX className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></li>
                        <li><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaLinkedin className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></li>
                    </ul>
                </div>
                </div>           
            </div>
        </section>
    </>
  )
}
