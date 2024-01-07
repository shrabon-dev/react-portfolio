import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";


export default function ContactForm() {
  return (
    <>
        <section className='bg-dark'>
            <div className="container mx-auto py-4 sm:py-20">
                {/* CONTACT FORM & INFO START */}
                <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-0">
                    <div className="contactInfo w-full md:w-2/5">
                        {/* Title Start*/}
                        <h4 className='font-mulish font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.5] lg:leading-normal border-b-2 inline border-black capitalize'>For more details contact me!</h4>
                        <p className='font-mulish font-bold text-lg lg:text-xl pt-4 lg:pt-0 text-shadowLight leading-normal '>Don’t be afraid man! Just say hello</p>
                        {/* Title End*/}

                        <ul className='mt-10'>
                            <li className='flex  items-center mb-10 gap-5'>
                                <span className='bg-[#21212150] w-10 h-10 md:w-20 md:h-20 flex justify-center items-center text-lightGreen text-2xl md:text-5xl'><FiPhone /></span>
                                <div>
                                    <h6 className='bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[50%] from-lightGreen  to-orangeRed font-mulish font-bold text-base md:text-2xl uppercase'>Phone</h6>
                                    <p className='font-mulish font-normal text-sm md:text-lg text-shadowLight'>+880 1744190465</p>
                                </div>
                            </li>
                            <li className='flex items-center mb-10 gap-5'>
                                <span className='bg-[#21212150] w-10 h-10 md:w-20 md:h-20 flex justify-center items-center text-lightGreen text-2xl md:text-5xl'><MdEmail /></span>
                                <div>
                                    <h6 className='bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[50%] from-lightGreen  to-orangeRed font-mulish font-bold text-base md:text-2xl uppercase'>Email</h6>
                                    <p className='font-mulish font-normal text-sm md:text-lg text-shadowLight'>example@mail.com</p>
                                </div>
                            </li>
                            <li className='flex items-center mb-10 gap-5'>
                                <span className='bg-[#21212150] w-10 h-10 md:w-20 md:h-20 flex justify-center items-center text-lightGreen text-2xl md:text-5xl'><FaLocationDot /></span>
                                <div>
                                    <h6 className='bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[50%] from-lightGreen  to-orangeRed font-mulish font-bold text-base md:text-2xl uppercase'>Address</h6>
                                    <p className='font-mulish font-normal text-sm md:text-lg text-shadowLight'>Zinzira-Keranigonj, Dhaka</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="contactForm w-full md:w-3/5">
                        <form action="" method="post" className='max-w-[800px] ml-auto'>
                            <div className="flex justify-between w-full gap-10">
                            <div className="inp mb-5  w-1/2">
                                <label htmlFor="name" className='block bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[12%]  from-lightGreen  to-orangeRed  font-mulish text-lg md:text-xl font-bold'>Name*</label>
                                <input type="text" name="name" id="" placeholder='Name...' className='placeholder:font-mulish placeholder:text-base md:placeholder:text-lg placeholder:font-normal placeholder:text-[#323232] font-mulish text-sm md:text-lg font-normal bg-[#21212150] w-full p-4 mt-2 text-lightGreen'/>
                            </div>
                            <div className="inp mb-5 w-1/2">
                                <label htmlFor="name" className='block bg-clip-text text-transparent  bg-gradient-to-r from-[0%] to-[12%]  from-lightGreen  to-orangeRed font-mulish text-lg md:text-xl font-bold'>Email*</label>
                                <input type="text" name="email" id="" placeholder='Email...' className='placeholder:font-mulish placeholder:text-base md:placeholder:text-lg placeholder:font-normal font-mulish text-sm md:text-lg placeholder:text-[#323232] font-normal bg-[#21212150] w-full p-4 mt-2 text-lightGreen'/>
                            </div>
                            </div>
                            <div className="flex justify-between w-full gap-10">
                            <div className="inp mb-5 w-1/2">
                                <label htmlFor="name" className='block bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[20%] from-lightGreen  to-orangeRed font-mulish text-lg md:text-xl font-bold'>Phone Number*</label>
                                <input type="text" name="number" id="" placeholder='Number...' className='placeholder:font-mulish placeholder:text-base md:placeholder:text-lg placeholder:font-normal placeholder:text-[#323232] font-mulish text-sm md:text-lg font-normal bg-[#21212150] w-full p-4 mt-2 text-lightGreen'/>
                            </div>
                            <div className="inp mb-5 w-1/2">
                                <label htmlFor="name" className='block bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[15%]  from-lightGreen  to-orangeRed  font-mulish text-lg md:text-xl font-bold'>Subject*</label>
                                <input type="text" name="name" id="" placeholder='Subject...' className='placeholder:font-mulish placeholder:text-base md:placeholder:text-lg placeholder:font-normal font-mulish text-sm md:text-lg placeholder:text-[#323232] font-normal bg-[#21212150] w-full p-4 mt-2 text-lightGreen'/>
                            </div>
                            </div>
                            <div className="inp mb-5">
                                <label htmlFor="name" className='block bg-clip-text text-transparent bg-gradient-to-r from-[0%] to-[10%]  from-lightGreen  to-orangeRed font-mulish text-lg md:text-xl font-bold'>Message*</label>
                                <textarea name="" id="" cols="30" rows="6" className='placeholder:font-mulish placeholder:text-lg placeholder:font-normal font-mulish text-sm md:text-lg font-normal bg-[#21212150] w-full p-4 mt-2 placeholder:text-[#323232] text-lightGreen' placeholder='Message...'></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                {/* SOCIAL LINK START */}
                <div className="flex justify-between pt-10 gap-0 flex-wrap">
                    <a href="#" className='inline-block w-1/2 lg:w-1/5'>
                    <div className=" bg-[#21212150] flex justify-between items-center w-full  p-4 hover:bg-black/50 ease-linear duration-300">
                        <div className="flex">
                            <FaLinkedin className='text-4xl pr-2 text-[#323232]'/>
                            <span className='w-[1px] bg-[#323232] block'></span>
                        </div>
                        <p className='font-mulish font-bold  pl-1 md:pl-0 text-base sm:text-3xl text-[#323232] pr-4 uppercase'>Linkedin</p>
                    </div>
                    </a>
                    <a href="#"  className='inline-block w-1/2 lg:w-1/5'>
                    <div className=" bg-[#21212150] flex justify-between items-center p-4 hover:bg-black/50 ease-linear duration-300">
                        <div className="flex">
                            <FaFacebookSquare className='text-4xl pr-2 text-[#323232]'/>
                            <span className='w-[1px] bg-[#323232] block'></span>
                        </div>
                        <p className='font-mulish font-bold pl-1 md:pl-0 text-base sm:text-3xl text-[#323232] pr-4 uppercase'>Facebook</p>
                    </div>
                    </a>
                    <a href="#"  className='inline-block w-1/2 lg:w-1/5'>
                    <div className=" bg-[#21212150] flex justify-between items-center p-4 hover:bg-black/50 ease-linear duration-300">
                        <div className="flex">
                            <BsTwitterX className='text-4xl pr-2 text-[#323232]'/>
                            <span className='w-[1px] bg-[#323232] block'></span>
                        </div>
                        <p className='font-mulish font-bold pl-1 md:pl-0 text-base sm:text-3xl text-[#323232] pr-4 uppercase'>Twitter</p>
                    </div>
                    </a>
                    <a href="#"  className='inline-block w-1/2 lg:w-1/5'>
                    <div className=" bg-[#21212150] flex justify-between items-center p-4 hover:bg-black/50 ease-linear duration-300">
                        <div className="flex">
                            <FaInstagram className='text-4xl pr-2 text-[#323232]'/>
                            <span className='w-[1px] bg-[#323232] block'></span>
                        </div>
                        <p className='font-mulish font-bold pl-1 md:pl-0 text-base sm:text-3xl text-[#323232] pr-4 uppercase'>Instagram</p>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}
