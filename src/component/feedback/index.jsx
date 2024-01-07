import React, { useEffect, useState } from 'react'
import Title from '../title'
import img from '../../assets/about.jpg'
import Slider from "react-slick";
import { HiOutlineArrowNarrowUp,HiOutlineArrowNarrowDown } from "react-icons/hi";
import { TfiAngleUp  } from "react-icons/tfi";
import { TfiAngleDown  } from "react-icons/tfi";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";


const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="text-4xl md:text-7xl text-shadowLight -bottom-24 md:bottom-[-140px] lg:bottom-[-120px] animate-rotateMoveBtm md:right-[-10px] lg:right-[-10px] xl:right-[-180px] absolute bg-black/25 hover:bg-black w-16 h-16 md:w-32 md:h-32 hover:text-lightGreen duration-300 rounded-full shadow-lg shadow-black flex justify-center items-center cursor-pointer" onClick={onClick}>
        <TfiAngleUp  />
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="text-4xl md:text-7xl text-shadowLight -bottom-32 md:bottom-[-200px] lg:bottom-[-220px] xl:bottom-[-180px] animate-rotateMoveTop left-52 sm:left-72 md:left-[-10px] lg:left-[-350px] xl:left-[-550px] absolute bg-black/25 hover:bg-black  hover:text-lightGreen duration-300 w-16 h-16 md:w-32 md:h-32 rounded-full shadow-lg shadow-black flex justify-center items-center cursor-pointer" onClick={onClick}>
        <TfiAngleDown  />
      </div>
    );
  };

export default function Feedback() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1, slider2;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

    const settings = {
        dots: false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: nav2,
      };
    const settings2 = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: false,
        ltr: true,
        nextArrow: <CustomPrevArrow />,
        prevArrow: <CustomNextArrow />,
        asNavFor: nav1,
      };
  return (
    <>
        <section className='bg-dark '>
            <div className="container mx-auto py-20 pb-32 relative">
                <Title heading='Feedback' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

                <span className='absolute top-72 lg:top-60 xl:top-72  text-6xl md:text-8xl text-shadowLight/25 left-10 lg:-left-20 xl:left-10'><FaQuoteLeft/></span>
                <span className='absolute top-72 md:top-68 lg:top-60 xl:top-68 right-10 md:right-0 text-6xl md:text-9xl text-shadowLight/25 '><FaQuoteRight/></span>
                <div className="feedbacks pt-24">
                    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center ">
                        <div className="img w-60 h-60 md:w-72 md:h-72 rounded-md bg-[#49494924] backdrop-blur-sm text-center flex items-center shadow-2xl shadow-black/30">
                            <Slider  ref={(slider) => (slider1 = slider)} {...settings}>
                                <div className='w-52 h-52 md:w-60 md:h-60 m-auto'>
                                <picture>
                                <img className='w-52 h-52 md:w-60 md:h-60 m-auto block rounded-full ' src={img} alt={img} />
                                </picture>
                                </div>
                                <div className='w-52 h-52 md:w-60 md:h-60 m-auto'>
                                <picture>
                                <img className='w-52 h-52 md:w-60 md:h-60 m-auto block rounded-full ' src={img} alt={img} />
                                </picture>
                                </div>
                                <div className='w-52 h-52 md:w-60 md:h-60 m-auto'>
                                <picture>
                                <img className='w-52 h-52 md:w-60 md:h-60 m-auto block rounded-full ' src={img} alt={img} />
                                </picture>
                                </div>
                          
                           
                            </Slider>
                        </div>
                        <div className="info w-[300px] max-w-[450px] md:w-[600px] md:max-w-[650px] lg:w-[800px] md:h-72 rounded-md bg-[#49494924] backdrop-blur-sm p-4 sm:p-10 shadow-2xl shadow-black/30">
                            <Slider ref={(slider) => (slider2 = slider)} {...settings2}>
                            <div className="textInfo">
                                <h3 className='font-mulish font-bold text-xl md:text-4xl text-white'>MUHAMMAD SULAIMAN </h3>
                                <h6 className='font-mulish md:font-bold text-base md:text-xl text-shadowLight py-1'>Manager of <span className='text-lightGreen'> HN ltd</span></h6>
                                <p className='font-mulish font-normal text-sm md:text-base text-shadowLight/50 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo saepe quas magnam rem dolorum modi facilis eligendi tenetur officia recusandae blanditiis, impedit, porro dicta pariatur iusto, debitis veritatis expedita!</p>
                            </div>
                            <div className="textInfo">
                                <h3 className='font-mulish font-bold text-xl md:text-4xl text-white'>MUHAMMAD SULAIMAN </h3>
                                <h6 className='font-mulish md:font-bold text-base md:text-xl text-shadowLight py-1'>Manager of <span className='text-lightGreen'> HN ltd</span></h6>
                                <p className='font-mulish font-normal text-sm md:text-base text-shadowLight/50 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo saepe quas magnam rem dolorum modi facilis eligendi tenetur officia recusandae blanditiis, impedit, porro dicta pariatur iusto, debitis veritatis expedita!</p>
                            </div>
                            <div className="textInfo">
                                <h3 className='font-mulish font-bold text-xl md:text-4xl text-white'>MUHAMMAD SULAIMAN </h3>
                                <h6 className='font-mulish md:font-bold text-base md:text-xl text-shadowLight py-1'>Manager of <span className='text-lightGreen'> HN ltd</span></h6>
                                <p className='font-mulish font-normal text-sm md:text-base text-shadowLight/50 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo saepe quas magnam rem dolorum modi facilis eligendi tenetur officia recusandae blanditiis, impedit, porro dicta pariatur iusto, debitis veritatis expedita!</p>
                            </div>
                         
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    </>
  )
}
