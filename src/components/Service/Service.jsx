import React,{useEffect} from 'react'
import './Service.css'
import {SiGoogleanalytics} from 'react-icons/si'
import {MdHeadsetMic} from 'react-icons/md'
import {CiGlobe} from 'react-icons/ci'
import {BsShieldCheck} from 'react-icons/bs'
import Card from '../Card/Card'
import Nav from '../Navbar/Nav'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
    <Nav/>
     <div className='bg text-white overflow-hidden'>
    <div className='grid md:grid-cols-[60%_auto] grid-cols-1'>
      <div data-aos="fade-up">
     <h3>Service Provided</h3>
     <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
     <p>Suspendisse finibus mattis nunc non aliquet. Curabitur eleifend quam quis sapien lacinia, non maximus elit molestie. Sed sed diam at enim lacinia varius in in libero. Donec nec felis porta, posuere dui tincidunt, porttitor felis. Fusce pharetra laoreet<br/> eros, quis dictum nisi elementum vel.</p>
     <div className='grid md:grid-cols-2 grid-cols-1 gridIcon'>

      <div className='column' >
        <div className='icon'><SiGoogleanalytics/></div>
        <div className='content'>
        <p>Data Protection</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='md:pt-0 pt-10 column'>
       <div className='icon'><MdHeadsetMic/></div>
       <div className='content'>
       <p>24/7 Support</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='pt-10 column'>
        <div className='icon'><CiGlobe/></div>
        <div className='content'>
        <p>Live Exchange Rate</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='pt-10 column'>
        <div className='icon'><BsShieldCheck/></div>
        <div className='content'>
        <p>Security Protection</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>
      </div>
      </div>
    
     <div data-aos="fade-left">
      <img className="object-cover object-center  rounded py-[40px] pr-[0px] " alt="hero" src="images/p1.webp" />
     </div>
     </div>
     </div>
     
   <Card/>
   <NewsLetter/>
   <Footer/>
    </>
  )
}
