import React from 'react'
import {motion,cubicBezier} from 'framer-motion'

export default function TextAnimation(props) {
  const text = props.text.split(' ')

  const container = {
    initial : {
      opacity:0,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration:.41,
        staggerChildren:.35
      }
    }
  }
  const children = {
    initial : {
      opacity:0,
      y:40,  
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type: 'spring',
        damping: 6,
      }
    }
  }

  return (
    <>
       {text.map((ele,index)=>(
          <motion.span key={index} initial='initial' whileInView='animate' viewport={{ once:true }} variants={container} className='overflow-hidden'>
          <>
          {ele.split('').map((txt,ind)=>(
          <>
          <motion.span variants={children} className='inline-block overflow-hidden'  key={ind} >
          {txt}
          </motion.span>
          </>
        ))}
          <span> </span>
          </>
        </motion.span>
       ))
      }
    </>
  )
}
