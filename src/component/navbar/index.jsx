import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";

export default function Navbar() {

    let [fixedMenu,setFixedMenu] = useState(false);
    let [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
            window.addEventListener('scroll', function (){
                if(this.scrollY > 600 ){
                    setFixedMenu(true)
                }else if(this.scrollY <= 500){
                    setFixedMenu(false)
                }
            })
    },[])



  return (
    <>
        {/* <nav className=''> */}
        <nav className={` bg-dark py-4  shadow-xl shadow-black/25 w-full z-[999999] ${fixedMenu ? 'border-white/50 bg-dark/25 backdrop-blur-sm fixed border-b-[1px] rounded-b-[50px] duration-700 ease-linear' : 'absolute border-b border-shadowLight duration-700 ease-linear'}`}>
            <div className="container mx-auto px-4 md:px-0">
               <div className="flex justify-between items-center">
                    {/* LOGO START */}
                    <div className="logo w-40">
                        <picture>
                            <img className='w-10 md:w-20 block' src={logo} alt={logo} />
                           
                        </picture>
                    </div>
                    {/* MENUS START */}
                    {/*  ${isOpen ? 'visible mMenu':'hidden'} */}
                    <div className={`menuBars ease-linear md:block md:visible ${isOpen ? 'visible mMenu md:static ':'hidden'} bg-dark md:bg-transparent top-24 sm:top-40 right-16 sm:right-1/4 md:right-full border-t-0 w-4/6 sm:w-1/2 shadow-2xl md:shadow-none shadow-black rounded-md p-10 md:p-0 absolute `}>
                        <ul className=' space-y-10 md:space-y-0  flex flex-col md:flex-row justify-between items-center'>
                            <li><a className='a' href="#">Home</a></li>
                            <li><a className='a' href="#">About</a></li>
                            <li><a className='a' href="#">Services</a></li>
                            <li><a className='a' href="#">Portfolio</a></li>
                            <li><a className='a' href="#">Info <GoDownload className='inline-block'/> </a></li>
                        </ul>
                        <span onClick={()=>setIsOpen(!isOpen)} className={`bg-dark w-10 h-10 flex justify-center items-center rounded-full shadow-inner animate-bounce duration-300 hover:text-lightGreen cursor-pointer shadow-black text-white md:hidden text-4xl absolute -top-4 -right-14 ${isOpen ? '':''}`}><IoCloseOutline className="inline-block"/></span>
                    </div>
                    {/* MENU BUTTON */}
                    <div className="menuButton w-20 text-right">
                        <TbMenuDeep onClick={()=>setIsOpen(!isOpen)} className='text-white inline-block text-2xl md:text-4xl cursor-pointer'/>
                    </div>
               </div>
            </div>
        </nav>
    </>
  )
}