import React from 'react'
import imgOne from '../../assets/service/bdev.png'
import { motion  } from "framer-motion"

export default function ServiceItem(props) {
  
  return (
    <>
    <motion.div variants={props.variant} className="serviceItem w-[300px] max-w-[350px] sm:max-w-[45%] lg:w-[380px] lg:max-w-[400px] bg-dark/40  backdrop-blur-md p-4 md:p-6 rounded-md border-[1px] border-transparent shadow-black shadow-2xl mb-10 hover:rotate-0 duration-300 ease-linear hover:border-lightGreen/50 hover:bg-dark">
        <div className="flex gap-4 items-center">
            <picture>
                <img className='block w-16 lg:w-24' src={imgOne} alt={imgOne} />
            </picture>
            <h4 className='font-bold font-kodchasan text-xl lg:text-3xl text-shadowLight text-left pt-4'>{props.service}</h4>
        </div>
        <p className='font-normal font-kodchasan text-sm text-shadowLight text-left pt-4'>{props.info}</p>
        <a href="#" className='font-normal font-kodchasan text-sm text-orangeRed text-right block pt-4 hover:text-lightGreen duration-300 ease-linear'>Know more...</a>
    </motion.div>
    </>
  )
}
