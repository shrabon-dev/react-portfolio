import React from 'react'

import { motion } from "framer-motion"

export default function SkillItem(props) {
  return (
    <>
    <motion.div variants={props.variant} className="skill bg-[#21212150] backdrop-blur-sm flex justify-center items-center w-1/3 sm:w-1/4 md:w-1/6  p-2">
        <div className="flex gap-1 pr-2">
            <picture>
                <img className='w-10 block' src={props.img} alt="" />
            </picture>
            <span className='w-[1px] bg-[#323232] block'></span>
        </div>
        <p className='font-mulish font-bold text-lg md:text-xl lg:text-xl text-[#323232] pr-4 uppercase'>{props.name}</p>
    </motion.div>
    </>
  )
}
