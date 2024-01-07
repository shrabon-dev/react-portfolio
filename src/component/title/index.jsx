import React from 'react'

export default function Title(props) {
  return (
    <>
        <div className="title relative after:w-1/5 after:absolute after:bottom-0 after:content after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:bg-gradient-to-r after:via-orangeRed after:from-transparent">
            <h6 className='font-bold font-mulish text-2xl md:text-4xl text-center  block bg-clip-text text-transparent bg-gradient-to-r from-[45%] to-[52%]  from-lightGreen  to-orangeRed '>{props.heading}</h6>
            <p className='font-normal font-kodchasan text-sm md:text-base text-shadowLight text-center py-4 md:w-2/3 lg:w-1/2 mx-auto'>{props.subText}</p>
        </div>
    </>
  )
}
