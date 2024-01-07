import { useState } from 'react'

import './App.css'
import Banner from './component/banner'
import Navbar from './component/navbar'
import About from './component/about'
import Service from './component/service'
import Education from './component/education'
import Skill from './component/skill'
import Show from './component/show'
import Portfolio from './component/portfolio'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Feedback from './component/feedback'
import Faqs from './component/faqs'
import ContactForm from './component/contact'
import Newsletter from './component/newsletter'
import Footer from './component/footer'
import ActiveSection from './component/activeMenu'


function App() {


  return (
    <>
        <Navbar/>
        <ActiveSection/>
        <Banner/>
        <About/>
        <Service/>
        <Education/>
        <Skill/>
        <Show/>
        <Portfolio/>
        <Feedback/>
        <Faqs/>
        <ContactForm/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default App
