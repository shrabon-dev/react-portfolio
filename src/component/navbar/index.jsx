import React, { useEffect, useState } from 'react'
import logo from '../../assets/a-logo.svg'
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import hover from '../../assets/hover.png'
import { motion,cubicBezier} from "framer-motion"

export default function Navbar() {

    let [fixedMenu,setFixedMenu] = useState(false);
    let [isOpen,setIsOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('home');
    useEffect(()=>{
            window.addEventListener('scroll', function (){
                if(this.scrollY > 600 ){
                    setFixedMenu(true)
                }else if(this.scrollY <= 500){
                    setFixedMenu(false)
                }
                     // Determine the active section based on the scroll position
                const sections = ['home', 'about', 'services', 'portfolio','feedback','faqs'];
                const sectionOffsets = sections.map((section) =>
                  document.getElementById(section)?.offsetTop
                );

                const activeSection = sections.find(
                  (_, index) =>
                    (window.scrollY+250) >= sectionOffsets[index] &&
                    (window.scrollY+250 < sectionOffsets[index + 1] || index === sections.length - 1)
                );
                
                if (activeSection) {
                  setActiveMenuItem(activeSection);
                }

            })
    },[])
    const ulMotion = {

        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren:.35,
            },
        },
    };

    const liMotion = {
        initial:{
            opacity:0,
            y:'20px',
        },
        animate:{
            opacity:1,
            y:'0px',
            transition:{
                duration:.4,
                ease:cubicBezier(.8,.8,.8,.8),
            }
        }
    }
  return (
    <>
        {/* <nav className=''> */}
        <nav className={`py-4 w-full z-[999999] ${fixedMenu ? 'shadow-xl shadow-black/25 bg-[#121212] fixed duration-700 ease-linear top-0' : 'absolute bg-transparent duration-700 ease-linear top-0 md:top-14'}`}>
            <div className="container mx-auto px-4 md:px-0">
               <div className="flex justify-between items-center">
                    {/* LOGO START */}
                    <div className="logo w-40">
                        <picture>
                            <img className='w-10 md:w-20 block' src={logo} alt={logo} />
                           
                        </picture>
                    </div>
                    {/* MENU BUTTON */}
                    <div className="menuButton w-20 text-right">
                        <TbMenuDeep onClick={()=>setIsOpen(!isOpen)} className='text-white inline-block text-2xl md:text-4xl cursor-pointer'/>
                    </div>
               </div>
                    {/* MENUS START */}
                    <div className={`menuBars !fixed  z-0 ease-linear md:block md:visible duration-300 ${isOpen ? 'left-0 ':'-left-full '} bg-[#121212] border-r border-[#1f1e1e] top-0 w-1/2 overflow-auto md:overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/5 h-full md:h-screen  shadow-2xl md:shadow-none shadow-black py-0 md:py-10`}>
                           {/* LOGO START */}
                    <div className="logo pt-5 md:pt-10 text-right pl-6 md:pl-14 lg:pl-20">
                        <picture>
                            <img className='w-10 md:w-20  block' src={logo} alt={logo} />
                           
                        </picture>
                    </div>
                        <ul className='pt-10 md:pt-20'>
                            <li><a className={`a ${activeMenuItem == 'home' ? 'a !text-lightGreen':'a'}`} href="#home">Home </a></li>
                            <li><a className={`a ${activeMenuItem == 'about' ? 'a !text-lightGreen':'a'}`} href="#about">About</a></li>
                            <li><a className={`a ${activeMenuItem == 'services' ? 'a !text-lightGreen':'a'}`} href="#services">Services</a></li>
                            <li><a className={`a ${activeMenuItem == 'portfolio' ? 'a !text-lightGreen':'a'}`} href="#portfolio">Portfolio</a></li>
                            <li><a className={`a ${activeMenuItem == 'feedback' ? 'a !text-lightGreen':'a'}`} href="#feedback">Feedback</a></li>
                            <li><a className={`a ${activeMenuItem == 'faqs' ? 'a !text-lightGreen':'a'}`} href="#faqs">Faq's</a></li>
                            <li><a className='a flex justify-start items-center gap-2 !border-b-0' href="#">Info <GoDownload className='inline-block'/> </a></li>
                        </ul>
                        {/* Contact Me Start*/}

                        <div className="contact_me p-6 md:p-14 lg:p-20">
                            <h6 className='p-0 text-base font-medium uppercase text-white/75 border-b inline pb-1 border-lightGreen font-mulish'>Contact Me</h6>
                            <p className='p-0 text-sm font-medium  text-white/75 pt-4  font-mulish'>Zinzira, Keranigonj-Dhaka 1210</p>
                            <p className='p-0 text-sm font-medium  text-white/75 pt-1  font-mulish'>Whatsapp: +880 1786119237</p>
                            
                            <motion.ul variants={ulMotion}  viewport={{ once:true }} className='flex gap-0 md:gap-4 pt-10 -ml-4'>
                        <motion.li variants={liMotion}><a className='w-6 h-6 md:w-10 md:h-10 mr-1 px-4 inline-block text-white text-base md:text-2xl relative group' href="#"><FaYoutube className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-6 h-6 md:w-10 md:h-10 mr-1 px-4 inline-block text-white text-base md:text-2xl relative group' href="#"><FaInstagram className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-6 h-6 md:w-10 md:h-10 mr-1 px-4 inline-block text-white text-base md:text-2xl relative group' href="#"><BsTwitterX className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        <motion.li variants={liMotion}><a className='w-6 h-6 md:w-10 md:h-10 mr-1 px-4 inline-block text-white text-base md:text-2xl relative group' href="#"><FaLinkedin className='relative z-10'/> <span className='absolute z-0 left-1/2 top-1/2 w-full -translate-x-[27%] -translate-y-[62%] opacity-0 group-hover:opacity-100 duration-300 ease-linear'><img className='block w-[200px]' src={hover} alt={hover} /></span></a></motion.li>
                        </motion.ul>
                        </div>



                    </div>
                    <span onClick={()=>setIsOpen(!isOpen)} className={`bg-dark w-10 h-10 flex justify-center items-center rounded-full shadow-inner animate-bounce duration-300 hover:text-lightGreen cursor-pointer shadow-black text-white md:hidden text-4xl absolute top-40  ${isOpen ? 'right-10':'-right-full'}`}><IoCloseOutline className="inline-block"/></span>

            </div>
        </nav>
    </>
  )
}
