import React from 'react'
import send from '../../assets/sent.png'
import { IoIosSend } from "react-icons/io";

export default function Newsletter() {
  return (
    <>
        <section className='bg-gradient-to-r from-lightGreen to-orangeRed '>
            <div className="container mx-auto py-5 px-6 sm:px-0">
                <div className="flex justify-between items-center ">
                    <div className='w-1/2'> 
                        <h2 className='font-[950] font-mulish text-base sm:text-xl md:text-6xl lg:text-7xl text-white italic uppercase'>Subscribe 
                            <span className='text-sm sm:text-xl text-[#F78E1E] flex items-center'>
                            <picture className='inline-block'>
                                <img src={send} alt={send} />
                            </picture>
                            to my newsletter</span>
                        </h2>
                    </div>
                    {/* INPUT TAG FOR EMAIL SENDING */}
                    <div className='w-1/2 relative'>
                        <input type="text" name="email" id="" placeholder='Email...' className='placeholder:font-mulish placeholder:text-sm sm:placeholder:text-2xl font-mulish text-base sm:text-2xl placeholder:text-[#323232] placeholder:font-bold bg-white w-full p-4 sm:p-6 rounded-full uppercase sm:font-bold text-lightGreen italic'/>
                        <span className='inline-block bg-lightGreen rounded-full px-2 py-2 sm:py-0 sm:px-10 absolute right-2 hover:bg-orangeRed duration-300 ease-linear cursor-pointer top-1'>
                        <IoIosSend className='text-2xl sm:text-7xl text-white inline-block'/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
