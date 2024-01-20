import React from 'react'
import logo from '../../assets/a-logo.svg'

export default function Footer() {
  return (
    <>
        <footer className='bg-dark'>
            <div className="container mx-auto py-20 px-4 md:px-0">
                <div className="flex justify-between gap-5">
                    <div className="w-1/6 md:w-1/3">
                        <picture>
                            <img className='w-20' src={logo} alt={logo} />
                        </picture>
                    </div>
                    <div className="w-2/3">
                        <ul className='flex justify-center gap-5 md:gap-20 lg:gap-32 items-center border-b border-black pb-5'>
                            <li><a className='a !px-0 md:text-base ' href="#">About</a></li>
                            <li><a className='a !px-0 md:text-base ' href="#">Services</a></li>
                            <li><a className='a !px-0 md:text-base ' href="#">Portfolio</a></li>
                            <li><a className='a !px-0 md:text-base ' href="#">Info</a></li>
                        </ul>
                        <p className='font-kodchasan font-normal text-xs md:text-sm xl:text-xl text-center pt-5 text-white/50 '>All Rights Reserved 2023 & This site created by <span className='text-lightGreen'>Muhammad Shrabon</span></p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
