import React,{useEffect} from 'react'
import './Contact.css'
import Nav from '../Navbar/Nav'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })
  return (
    <>
    <Nav/>
    
    <div className='overflow-hidden ' data-aos="fade-up">
      <div class="container headings w-[1100px] mx-auto p-[20px] mb-[50px]">
        <h1 class="font-weight-bold">Contact Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

  <section class="text-gray-600 body-font  md:w-[1100px] h-[500px] mx-auto relative">
     <div class="absolute inset-0 bg-gray-300">
     <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4140072672926!2d79.07551177437313!3d21.096054385465546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf12e771c019%3A0xe5884397b38b822e!2sPROBUZ%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1699061520320!5m2!1sen!2sin" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
    </div>
   <div class="container px-5 py-24 mx-auto flex h-[500px]">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative md:mb-4 mb-2">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className='bg-button w-[80%] font-medium px-5 py-3 mx-auto text-white bg-button rounded-[30px]'>Submit</button>
    </div>
  </div>
  </section>
    </div>

    <NewsLetter/>
    <Footer/>
    
    </>
  )
}
