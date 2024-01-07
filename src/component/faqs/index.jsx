import React, { useState } from 'react'
import Title from '../title'
import shape1 from '../../assets/jquery.png'
import shape2 from '../../assets/r.png'
import shape3 from '../../assets/php.png'
import shape4 from '../../assets/html.png'
import shape5 from '../../assets/tailwind.png'
import shape6 from '../../assets/tailwind.png'

export default function Faqs() {

    let [exposed,setExposed] = useState(null)


  return (
    <>
        <section className='bg-dark relative'>
            {/* shape for animation start  */}
            <span className='inline-block absolute top-1/2 left-96 animate-rotateMoveTop'>
                    <picture>
                        <img className='w-20 block' src={shape1} alt={shape1} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-32 left-1/2 animate-pulse'>
                    <picture>
                        <img className='w-20 block' src={shape2} alt={shape2} />
                    </picture>
                </span>
                <span className='inline-block absolute top-1/2 right-96 animate-moveLeft'>
                    <picture>
                        <img className='w-20 block' src={shape3} alt={shape3} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-32 right-6 animate-rotateMoveTop'>
                    <picture>
                        <img className='w-20 block' src={shape4} alt={shape4} />
                    </picture>
                </span>
                <span className='inline-block absolute bottom-32 right-96 z-0 animate-rotateMoveTop'>
                    <picture>
                        <img className='w-20 block' src={shape5} alt={shape5} />
                    </picture>
                </span>
            {/* shape for animation end */}
            <div className="container mx-auto py-20 relative z-10">
            <Title heading='Faqs' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' />

                <div className="faqs p-4 sm:w-4/5 mx-auto pt-10 md:pt-32">
                    {faqs.map((element,index) => (
                    <div onClick={()=>setExposed(index)} className=" cursor-pointer faq p-6 bg-[#21212150] backdrop-blur-sm rounded-md mb-10">
                        <h6 className={` ${exposed == index && ' border-b border-[#212121]'}  font-kodchasan font-normal text-xl md:text-3xl text-white pb-2`}><span>{index+1}. </span> {element.ask}</h6>
                        {/* {exposed == index &&
                        } */}
                        <div className={` ${exposed == index ? 'faq-ans exposed':'faq-ans'}`}>
                            <p className={`font-kodchasan duration-300 ease-linear font-normal text-sm md:text-lg text-shadowLight  pt-2`}><span className='text-lightGreen/25'>Ans: </span> {element.ans} </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}


const faqs = [
    {
        ask:`How can I contact with you?`,
        ans:`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
        ask:`How can I contact with you?`,
        ans:`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
    {
        ask:`How can I contact with you?`,
        ans:`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    },
]