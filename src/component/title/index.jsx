import React from 'react'
import {motion} from 'framer-motion'

export default function Title(props) {

  const container = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:.15,
      }
    }
  }
  const children = {
    initial:{
      opacity:0,
      scale:.5
    },
    animate:{
      opacity:1,
      scale:1,
      transition:{
        duration:.5,
      }
    }
  }

  return (
    <>
        <motion.div initial='initial' whileInView={'animate'} viewport={{ once:true }} variants={container} className="title relative after:w-1/5 after:absolute after:bottom-0 after:content after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:bg-gradient-to-r after:via-orangeRed after:from-transparent">
            <motion.h6 variants={children}  className='font-bold font-mulish text-2xl md:text-4xl text-center  block bg-clip-text text-transparent bg-gradient-to-r from-[45%] to-[52%]  from-lightGreen  to-orangeRed '>{props.heading}</motion.h6>
            <motion.p  variants={children} className='font-normal font-kodchasan text-sm md:text-base text-shadowLight text-center py-4 md:w-2/3 lg:w-1/2 mx-auto'>{props.subText}</motion.p>
        </motion.div>
    </>
  )
}
