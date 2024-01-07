import React from 'react'
import Title from '../title'
import imgOne from '../../assets/service/bdev.png'
import ServiceItem from '../reusable/ServiceItem'
import shape1 from '../../assets/Polygon 3.png'


export default function Service() {

  return (
    <>
    <section className='bg-[#070707] relative overflow-hidden'>
          {/* shape for animation start */}
                <span className='inline-block absolute top-20 right-72 transform translate-x-0 animate-moveLeft '>
                    <picture>
                        <img className='w-32 block md:w-auto' src={shape1} alt={shape1} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-20 left-14 transform translate-x-0 animate-moveLeft '>
                    <picture>
                        <img className='w-10 block md:w-auto' src={shape1} alt={shape1} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-0 -right-36 w-96 h-80 border-[50px] border-lightGreen animate-rotateMoveTop delay-75 '></span>
                <span className='inline-block absolute bottom-40 -right-32  w-96 h-96 border-[50px] animate-rotateMoveBtm border-lightGreen'></span>
            {/* shape for animation end */}
        <div className="container mx-auto py-10  md:py-32">
            <Title heading='Services' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

            {/* Services Start */}
            <div className="services flex justify-center md:justify-center items-start pt-10 sm:pt-32 flex-wrap gap-5 lg:gap-10">
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
                <ServiceItem service='Website Design' info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil expedita accusamus rerum laudantium quaerat pariatur numquam fugit, laboriosam ratione ipsum?' />
            </div>
            {/* Services End */}
        </div>
    </section>
    </>
  )
}