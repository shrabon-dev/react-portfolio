import React, { useEffect, useState } from 'react'

export default function ActiveSection() {

    let [progress,setProgress] = useState()

    useEffect(()=>{
        window.addEventListener('scroll',function(){
            let scrollY = this.window.scrollY
            let pageHeight = this.document.documentElement.scrollHeight - window.innerHeight;
            let progress = (scrollY / pageHeight) * 100

            let pgrsToStr = Math.floor(progress) + '%'

            setProgress(pgrsToStr)
        })
    },[])
    const progressBarStyle = {
        width: `${progress}`,
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '9999999',
      };
  return (
    <>
     <div className={`activeSection fixed z-[9999999] top-0 left-0 w-full bg-[#2c2c2c] duration-300 ease-linear h-[6px] shadow-inner`}>
     <div style={progressBarStyle} className='block bg-lightGreen h-full shadow-xl shadow-black duration-300 ease-linear rounded-full'></div>
     </div>
    </>
  )
}
