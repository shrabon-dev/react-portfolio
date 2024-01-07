import React from 'react'
import Title from '../title'
import EducationItem from '../reusable/EducationItem'
import Slider from "react-slick";

import { HiOutlineArrowNarrowUp,HiOutlineArrowNarrowDown } from "react-icons/hi";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="!-right-4 sm:text-shadowLight md:!-right-[14%] !text-4xl  bg-lightGreen/25 backdrop-blur-sm md:backdrop-blur-none rounded-full text-black next md:!text-[102px] md:bg-transparent lg:!right-[-10%]" onClick={onClick}>
      <HiOutlineArrowNarrowUp />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className=" sm:text-shadowLight md:!-left-[14%] !text-4xl !-left-4 bg-lightGreen/25 backdrop-blur-sm md:backdrop-blur-none rounded-full text-black prev md:!text-[102px] md:bg-transparent lg:!left-[-10%]" onClick={onClick}>
      <HiOutlineArrowNarrowDown />
    </div>
  );
};
export default function Education() {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <section className='bg-dark relative'>
            {/* shape for animation start  */}
                <span className='w-40 h-40  rounded-full bg-gradient-to-r from-[#191E1C] to-[#101010] inline-block absolute top-40 left-0 animate-pulse'></span>
                <span className='w-10 h-10  rounded-full bg-gradient-to-r from-[#191E1C] to-[#0c0c0c] inline-block absolute top-72 right-40 animate-pulse'></span>
                <span className='w-60 h-60 shadow-inner  rounded-full bg-gradient-to-r from-[#101010] to-[#191E1C] inline-block absolute top-1/2 -right-10 animate-rotateMoveBtm'></span>
                <span className='w-60 h-60 shadow-inner  rounded-full bg-gradient-to-r from-[#101010] to-[#191E1C] inline-block absolute top-1/2 -left-10 animate-rotateMoveTop'></span>
            {/* shape for animation end */}
        <div className="container mx-auto py-10 pb-20 md:pb-0 md:py-32 md:px-10">
            <Title heading='Education' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

            {/* Education Content Start */}
            <div className="education mt-14 p-4 md:p-0 md:mt-32 h-[590px] md:h-[800px] relative after:absolute after:w-full after:h-[114%] md:after:h-full after:bg-gradient-to-b after:from-[#121212] after:via-transparent after:to-[#121212] after:content after:top-0">
            <Slider {...settings}>

                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
                <div>
                <EducationItem
                  service='Website Design'
                  info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?'
                />
                </div>
           

              {/* Add other EducationItem components as needed */}
            </Slider>
            </div>

            {/* Education Content End */}
        </div>
    </section>
    </>
  )
}
