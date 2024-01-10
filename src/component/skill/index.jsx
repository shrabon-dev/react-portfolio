import React from 'react'
import Title from '../title'
import shape1 from '../../assets/Polygon 3.png'
import shape2 from '../../assets/Rectangle 110.png'
import shape3 from '../../assets/Rectangle 109.png'
import shape4 from '../../assets/Rectangle 105.png'
import SkillItem from '../reusable/SkillItem'
import { motion,cubicBezier} from "framer-motion"

export default function Skill() {
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
                <SkillItem variant={children} name='html'/>
                <SkillItem variant={children} name='css'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='css'/>
                <SkillItem variant={children} name='Bootstrap'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Bootstrap'/>
                <SkillItem variant={children} name='html'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
                <SkillItem variant={children} name='Sass'/>
            </motion.div>
            
        </div>
    </section>
    </>
  )
}
