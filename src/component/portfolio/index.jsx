import React from 'react'
import Title from '../title'
import { HiOutlineArrowNarrowLeft,HiOutlineArrowNarrowRight  } from "react-icons/hi";
import imgOne from '../../assets/portfolio/react-js-1.jpg';
import imgTwo from '../../assets/portfolio/react-js-2.jpg';
import imgThree from '../../assets/portfolio/react-js-3.jpg';
import { LuExternalLink } from "react-icons/lu";
import Slider from "react-slick";
import shape1 from '../../assets/Polygon 5.png'
import shape2 from '../../assets/Polygon 11.png'
import shape3 from '../../assets/Polygon 12.png'
import shape4 from '../../assets/Polygon 13.png'
import { motion,cubicBezier  } from "framer-motion"

const CustomNextArrow = (props) => {
  const { onClick,currentSlide,slideCount  } = props;

  return (
  <span onClick={onClick} className={` ${currentSlide == slideCount-1 && 'opacity-40'} cursor-pointer w-10 h-10  md:w-14 md:h-14 lg:w-20 lg:h-20 border border-lightGreen inline-flex mr-10 absolute -top-10 md:-top-16 lg:-top-20 left-5 md:left-8 lg:left-0 justify-center items-center text-6xl text-lightGreen`} ><HiOutlineArrowNarrowLeft/></span>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick,currentSlide  } = props;

  return (
    <span onClick={onClick} className={`cursor-pointer w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 border border-lightGreen inline-flex mr-10 justify-center items-center text-6xl absolute -top-10 md:-top-16 lg:-top-20 left-20 md:left-28 text-lightGreen ${currentSlide <= 0 && 'opacity-40'}`} ><HiOutlineArrowNarrowRight/></span>
  );
};
export default function Portfolio() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        }
      }
    ]
  };
  const rightToLeft = {
    initial:{
      opacity:0,
      x:'20px',
    },
    animate:{
        opacity:1,
        x:'0px',
        transition:{
            duration:.8,
            ease:cubicBezier(.8,.8,.8,.8),
        }
    }
};

const btmToTop = {
    initial:{
        opacity:0,
        y:'120px',
    },
    animate:{
        opacity:1,
        y:'0px',
        transition:{
            duration:.8,
            ease:cubicBezier(.8,.8,.8,.8),
        }
    }
}

  return (
    <>
      <section className='bg-[#121212] relative'  id='portfolio'>
            {/* shape for animation start  */}
            <span className='inline-block absolute top-20 left-20 animate-moveLeft'>
                    <picture>
                        <img src={shape1} alt={shape1} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-32 left-40 animate-moveLeft'>
                    <picture>
                        <img src={shape2} alt={shape2} />
                    </picture>
                </span>
                <span className='inline-block absolute top-40 right-80 animate-moveLeft'>
                    <picture>
                        <img src={shape3} alt={shape3} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-32 right-80 animate-rotateMoveTop'>
                    <picture>
                        <img src={shape4} alt={shape4} />
                    </picture>
                </span>
            {/* shape for animation end */}
        <div className="container mx-auto py-10 md:py-32 relative">
        <Title heading='Portfolio' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

        {/* Header Start */}
        <motion.div initial={'initial'} whileInView={'animate'} variants={rightToLeft} viewport={{ once:true }} className="header pt-20 md:pt-32">
          <div className="flex justify-end items-center">
            <div className="w-full md:w-1/2 pr-10 md:pr-0 text-right">
              <select name="#" id="" className='w-1/2 bg-transparent  !border-lightGreen font-kodchasan text-lg md:text-2xl text-lightGreen border-b-2 focus:border-none p-4'>
                <option className='bg-dark border-none hover:!bg-[#151515] hover:!text-orangeRed' value="">Web Design</option>
                <option className='bg-dark border-none hover:!bg-[#151515] hover:!text-orangeRed' value="">Web Development</option>
                <option className='bg-dark border-none hover:!bg-[#151515] hover:!text-orangeRed' value="">Graphich Design</option>
                <option className='bg-dark border-none hover:!bg-[#151515] hover:!text-orangeRed' value="">WordPress</option>
                <option className='bg-dark border-none hover:!bg-[#151515] hover:!text-orangeRed' value="">Sopify</option>
              </select>
            </div>
          </div>
        </motion.div>
        {/* Header End */}
        {/* Portfolios Start */}
        <span className='w-72 h-72 rounded-full absolute bottom-20 shadow-2xl shadow-black left-44 bg-lightGreen block '></span>
          <motion.div initial={'initial'} whileInView={'animate'} variants={btmToTop} viewport={{ once:true }} className="animate">
          <Slider {...settings}  className="portfolios pt-20">
            <div className="slide">
              <div className="w-full p-10 md:p-0 port flex flex-col md:flex-row gap-4 lg:gap-20 justify-center mb-10 md:items-center ">
                <div className="img">
                  <picture>
                    <img className='md:min-w-56 md:max-w-[400px] lg:min-w-96 lg:max-w-[600px] block mr-auto' src={imgOne} alt={imgOne} />
                  </picture>
                </div>
                <div className="info ">
                  <h2 className='font-mulish font-bold text-2xl md:text-4xl text-white/90'>React JS Website</h2>
                  <h6 className='font-mulish font-bold text-sm bg-lightGreen/75 inline-block p-1 mt-2 md:mt-4 text-dark'>Web Design</h6>
                  <a href="#" className='hover:text-lightGreen group duration-300 pt-2 md:pt-4 hover:opacity-100 opacity-55 font-kodchasan text-base text-shadowLight flex items-center gap-2'>View <LuExternalLink className='inline-block text-shadowLight group-hover:text-lightGreen duration-300'/></a>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="w-full p-10 md:p-0 port flex flex-col md:flex-row gap-4 lg:gap-20 justify-center mb-10 md:items-center ">
                <div className="img">
                  <picture>
                    <img className='md:min-w-56 md:max-w-[400px] lg:min-w-96 lg:max-w-[600px] block mr-auto' src={imgOne} alt={imgOne} />
                  </picture>
                </div>
                <div className="info ">
                  <h2 className='font-mulish font-bold text-2xl md:text-4xl text-white/90'>React JS Website</h2>
                  <h6 className='font-mulish font-bold text-sm bg-lightGreen/75 inline-block p-1 mt-2 md:mt-4 text-dark'>Web Design</h6>
                  <a href="#" className='hover:text-lightGreen group duration-300 pt-2 md:pt-4 hover:opacity-100 opacity-55 font-kodchasan text-base text-shadowLight flex items-center gap-2'>View <LuExternalLink className='inline-block text-shadowLight group-hover:text-lightGreen duration-300'/></a>
                </div>
              </div>
            </div>
          </Slider>
          </motion.div>
        {/* Portfolios End */}
        </div>
      </section>
    </>
  )
}
