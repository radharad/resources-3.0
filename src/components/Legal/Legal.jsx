import React,{useEffect} from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Apps from './Apps'
import NewsLetter from '../NewsLetter/NewsLetter'


export default function Legal() {
 
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='overflow-hidden'>
      <Nav/> 
         <div className='bgheading' >
         <h1 className='font-bold md:text-5xl text-3xl text-center text-white' data-aos="fade-up" data-aos-delay="200">LEGAL</h1>
        </div>
      <div className='md:w-[1100px] my-[100px] mx-auto'>
      <Apps/>
      </div> 
      <NewsLetter/>
 <Footer/>
        
   </div>
  )
}
