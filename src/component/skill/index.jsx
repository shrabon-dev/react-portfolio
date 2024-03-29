import React from 'react'
import Title from '../title'
import shape1 from '../../assets/Polygon 3.png'
import shape2 from '../../assets/Rectangle 110.png'
import shape3 from '../../assets/Rectangle 109.png'
import shape4 from '../../assets/Rectangle 105.png'
import SkillItem from '../reusable/SkillItem'
import { motion,cubicBezier} from "framer-motion"
import html from '../../assets/skill/Html5.png'
import css from '../../assets/skill/css.png'
import sass from '../../assets/skill/sass.png'
import bootstrap from '../../assets/skill/bootstrap.png'
import jquery from '../../assets/skill/jquery.png'
import tailwind from '../../assets/skill/tailwind.svg'
import js from '../../assets/skill/js.svg'
import react from '../../assets/skill/react.svg'
import laravel from '../../assets/skill/laravel.svg'
import php from '../../assets/skill/php.svg'
import mysql from '../../assets/skill/mysql.svg'
import firebase from '../../assets/skill/firebase.svg'
import redux from '../../assets/skill/firebase.svg'

export default function Skill() {
    const container = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren:0,
            },
        },
    };

    const children = {
        initial:{
            opacity:0,
            scale:0,
        },
        animate:{
            opacity:1,
            scale:1,
            transition:{
                duration:.8,
                ease:cubicBezier(.1,.1,.1,.1),
            }
        }
    }

  return (
    <>
    <section className='bg-[#000000] lg:h-svh relative'>
            {/* shape for animation start  */}
                <span className='inline-block z-0 absolute top-20 left-20 animate-moveLeft'>
                    <picture>
                        <img className='w-32 lg:w-full block' src={shape1} alt={shape1} />
                    </picture>
                </span>
                <span className='inline-block z-0 absolute bottom-32 left-20 animate-moveLeft'>
                    <picture>
                        <img className='w-20 lg:w-full block' src={shape2} alt={shape2} />
                    </picture>
                </span>
                <span className='inline-block z-0 absolute top-20 right-20 animate-moveLeft'>
                    <picture>
                        <img className='w-20 lg:w-full block' src={shape3} alt={shape3} />
                    </picture>
                </span>
                <span className='inline-block z-0 absolute bottom-32 right-6 animate-rotateMoveTop'>
                    <picture>
                        <img className='w-20 lg:w-full block' src={shape4} alt={shape4} />
                    </picture>
                </span>
            {/* shape for animation end */}
        <div className="container mx-auto py-10  md:py-32 relative z-10">
            <Title heading='Skill' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

            <motion.div initial={'initial'} whileInView={'animate'} variants={container} viewport={{ once:true }} className="skills flex justify-around pt-14 md:pt-32 flex-wrap gap-4 md:gap-8">
                <SkillItem img={html} variant={children} name='html'/>
                <SkillItem img={css} variant={children} name='css'/>
                <SkillItem img={sass} variant={children} name='Sass'/>
                <SkillItem img={tailwind} variant={children} name='Tailwind'/>
                <SkillItem img={bootstrap} variant={children} name='Bootstrap'/>
                <SkillItem img={jquery} variant={children} name='Jquery'/>
                <SkillItem img={react} variant={children} name='React JS'/>
                <SkillItem img={redux} variant={children} name='Redux Tolkit'/>
                <SkillItem img={js} variant={children} name='Javascript'/>
                <SkillItem img={laravel} variant={children} name='Laravel'/>
                <SkillItem img={php} variant={children} name='PHP'/>
                <SkillItem img={mysql} variant={children} name='MySQL'/>
                <SkillItem img={firebase} variant={children} name='Firebase'/>
            </motion.div>
            
        </div>
    </section>
    </>
  )
}
