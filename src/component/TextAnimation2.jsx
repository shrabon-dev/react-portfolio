import React from 'react'
import {motion,cubicBezier} from 'framer-motion'

export default function TextAnimation2(props) {

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
        duration:.4,
        ease:cubicBezier(.8,.8,.8,.8),
      }
    }
  }



  

  return (
    <>
      <motion.span  initial='initial' whileInView='animate' variants={container} className='overflow-hidden'>
       {text.map((ele,index)=>(
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
       ))
      }
      </motion.span>
    </>
  )
}
