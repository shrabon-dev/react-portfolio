import React from 'react'
import img from '../../assets/about.jpg'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import hover from '../../assets/hover.png'
import shape1 from '../../assets/Polygon 5.png'
import { motion,cubicBezier} from "framer-motion"
export default function About() {
    const container = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren:.35,
            },
        },
    };

    const children = {
        initial:{
            opacity:0,
            x:'100px',
        },
        animate:{
            opacity:1,
            x:'0px',
            transition:{
                duration:.81,
                ease:cubicBezier(.8,.8,.8,.8),
            }
        }
    }

    const ulMotion = {

        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren:.35,
            },
        },
    };

    const liMotion = {
        initial:{
            opacity:0,
            y:'20px',
        },
        animate:{
            opacity:1,
            y:'0px',
            transition:{
                duration:.4,
                ease:cubicBezier(.8,.8,.8,.8),
            }
        }
    }

  return (
    <>
        <section className='bg-dark h-full relative py-20 '  id='about'>
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
            <div className="container mx-auto overflow-hidden">
                <motion.h3 initial={{y:'100px',opacity:0}} whileInView={{ y:'0px',opacity:1 }} transition={{ duration:1,ease:cubicBezier(.8,.8,.8,.8) }} viewport={{ once:true }} className='font-kodchasan font-bold text-[50px] sm:text-[70px] md:text-[80px] lg:text-[120px] text-center text-transparent bg-clip-text bg-gradient-to-r from-orangeRed to-lightGreen pb-10'>MUHAMMAD SHRABON</motion.h3>
                <div className="aboutInfo flex flex-col sm:flex-row justify-between md:items-center">
                <motion.div initial={{y:'-100px',opacity:0}} whileInView={{ y:'0px',opacity:1 }} transition={{ duration:1,ease:cubicBezier(.8,.8,.8,.8) }} viewport={{ once:true }} className="img sm:w-1/2">
                    <picture>
                        <img className='block w-1/2 rounded-md mx-auto' src={img} alt="" />
                    </picture>
                </motion.div>
                <motion.div initial={'initial'} whileInView={'animate'} variants={container} viewport={{ once:true }} className="info  sm:w-1/2 pt-10 sm:pt-0 pl-4 sm:pl-0">
                    <motion.h4 variants={children} className='font-bold text-2xl sm:text-2xl lg:text-4xl font-kodchasan text-white/95 uppercase'>Muhammad Shrabon</motion.h4>
                    <motion.h6 variants={children} className='font-bold text-lg lg:text-2xl font-kodchasan text-lightGreen py-3'>Full Stack Developer</motion.h6>
                    <motion.p  variants={children} className='font-normal text-sm lg:text-lg font-kodchasan text-shadowLight w-4/5 pb-5'>I'm a skilled Full Stack Developer with expertise in end-to-end web application 
                    development. Proficient in both front-end and back-end technologies, I seamlessly
                    merge coding and design for intuitive digital experiences. Fueled by a passion for 
                    technology, I excel in problem-solving, optimizing performance, and delivering 
                    high-quality web applications through strategic planning and execution.</motion.p>
                    <motion.p  variants={children} className='font-normal text-sm lg:text-lg font-kodchasan text-shadowLight/90 w-4/5'> I work collaboratively with other developers, designers, and stakeholders to bring projects to life. I stay up-to-date with the latest web development trends and technologies to ensure exceptional results. Reach out to me for your web development needs!</motion.p>
                    <motion.ul variants={ulMotion}  viewport={{ once:true }} className='flex gap-4 pt-10'>
                        <motion.li variants={liMotion}><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaYoutube className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaInstagram className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><BsTwitterX className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-10 h-10 mr-1 px-4 inline-block text-white text-2xl relative group' href="#"><FaLinkedin className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                    </motion.ul>
                </motion.div>
                </div>           
            </div>
        </section>
    </>
  )
}
