import React from 'react'
import Title from '../title'
import imgOne from '../../assets/service/bdev.png'
import ServiceItem from '../reusable/ServiceItem'
import shape1 from '../../assets/Polygon 3.png'
import { motion,cubicBezier } from "framer-motion"

export default function Service() {
    const container = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren:.35,
            },
        },
    };

    const children = {
        initial:{
            opacity:0,
            y:'100px',
        },
        animate:{
            opacity:1,
            y:'0px',
            transition:{
                duration:.81,
                ease:cubicBezier(.8,.8,.8,.8),
            }
        }
    }

  return (
    <>
    <section className='bg-[#070707] relative overflow-hidden'  id='services'>
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
            <motion.div initial={'initial'} whileInView={'animate'} variants={container} viewport={{ once:true }} className="services flex justify-center md:justify-center items-start pt-10 sm:pt-32 flex-wrap gap-5 lg:gap-10">
                <ServiceItem variant={children} service='Website Design' info="Hello there! I'm your go-to artisan for crafting exceptional websites. Specializing in personalized web design services, I bring your digital dreams to life. Imagine a website that not only looks stunning but also resonates with your audience. Ready to turn your ideas into a digital masterpiece? Let's chat and bring your online presence to the next level" />
                <ServiceItem variant={children} service='Website Development' info="With a passion for crafting unique online experiences, I specialize in building websites that not only look great but also function seamlessly. Let's collaborate to bring your vision to life and create a website that stands out in the online crowd. Ready to make your mark on the web? Let's chat and get started on your digital journey together!" />
                <ServiceItem variant={children} service='Landing Page Design' info="Hello there! I'm your go-to artisan for crafting exceptional websites. Specializing in personalized web design services, I bring your digital dreams to life. Imagine a website that not only looks stunning but also resonates with your audience. Ready to turn your ideas into a digital masterpiece? Let's chat and bring your online presence to the next level" />
                <ServiceItem variant={children} service='Ecommerce Website' info="Hello there! I'm your go-to artisan for crafting exceptional websites. Specializing in personalized web design services, I bring your digital dreams to life. Imagine a website that not only looks stunning but also resonates with your audience. Ready to turn your ideas into a digital masterpiece? Let's chat and bring your online presence to the next level" />
                <ServiceItem variant={children} service='Brand Design' info="With a passion for creativity and a keen eye for detail, I specialize in crafting bespoke brand designs that resonate with your audience. From logos to comprehensive brand systems, I'm here to bring your brand to life visually. Let's collaborate to create a distinctive and memorable identity that sets you apart in the competitive market." />
            </motion.div>
            {/* Services End */}
        </div>
    </section>
    </>
  )
}
