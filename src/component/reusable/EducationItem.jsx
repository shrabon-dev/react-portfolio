import React from 'react'


export default function EducationItem(props) {


  return (
    <>
    <div className="w-full p-4 md:p-8 border-[1px] border-[#88888831] rounded-md mb-5 backdrop-blur-md">
    {/* <div className="w-full p-8 border-[1px] border-[#88888831] rounded-md mb-5"> */}
        {/* Date */}
        <h6 className='text-lightGreen font-kodchasan font-normal text-xs md:text-base ' >2021-2022</h6>

        <h2 className='font-mulish font-bold text-xl md:text-3xl text-white py-2'>BBA’S  (ACCOUNTING)</h2>
        <h4  className='font-kodchasan font-normal text-xs md:text-base text-white pb-4'>Result : <span className='text-orangeRed'> 5 out of 5</span></h4>
        <p  className='font-mulish font-normal text-xs md:text-base text-shadowLight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </>
  )
}
