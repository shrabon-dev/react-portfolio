import React from 'react'
import html from '../../assets/skill/Html5.png'
import { motion } from "framer-motion"

export default function SkillItem(props) {
  return (
    <>
    <motion.div variants={props.variant} className="skill bg-[#21212150] backdrop-blur-sm flex justify-between items-center w-1/3 sm:w-1/4 md:w-1/6  p-2">
        <div className="flex pr-1">
            <picture>
                <img className='w-10 md:w-20 lg:w-full block' src={html} alt="" />
            </picture>
            <span className='w-[1px] bg-[#323232] block'></span>
        </div>
        <p className='font-mulish font-bold text-lg md:text-xl lg:text-3xl text-[#323232] pr-4 uppercase'>{props.name}</p>
    </motion.div>
    </>
  )
}
