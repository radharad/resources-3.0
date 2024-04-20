import React,{useEffect} from 'react'
import './About.css'
import Nav from '../Navbar/Nav'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='overflow-hidden'>
      <Nav/>
    <div class="container headings md:w-[1100px] mx-auto p-[20px] md:mt-[50px]">
      <h1 class="font-weight-bold">About Us</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='card grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 md:w-[1100px] mx-auto items-center md:py-[100px] py-[30px] p-[30px]'>

    <div className=' hover:scale-110 duration-300'>
    <div className='text-center shadow' data-aos="zoom-in">
    <img src='images/card1.webp' alt=''/>
    <h1 className='p-3 text-[#002366] font-medium text-2xl'>Lorem Header.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum placeat dignissimos eos aliquam assumenda officiis voluptas dolores animi ullam.</p>
    </div>
    </div>

    <div className=' hover:scale-110 duration-300'>
    <div className='text-center shadow' data-aos="zoom-in">
    <img src='images/card2.jpg' alt=''/>
    <h1 className='p-3 text-[#002366] font-medium text-2xl'>Lorem Header.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum placeat dignissimos eos aliquam assumenda officiis voluptas dolores animi ullam.</p>
    </div>
   </div> 

    <div className=' hover:scale-110 duration-300'>
    <div className='text-center shadow' data-aos="zoom-in">
    <img src='images/card3.jpg' alt=''/>
    <h1 className='p-3 text-[#002366] font-medium text-2xl'>Lorem Header.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum placeat dignissimos eos aliquam assumenda officiis voluptas dolores animi ullam.</p>
    </div>
    </div>

   <div className=' hover:scale-110 duration-300'>
   <div className='text-center shadow' data-aos="zoom-in">
   <img src='images/card4.webp' alt=''/>
   <h1 className='p-3 text-[#002366] font-medium text-2xl'>Lorem Header.</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nostrum placeat dignissimos eos aliquam assumenda officiis voluptas dolores animi ullam.</p>
  </div>
  </div>
  
  </div>
  <div className='md:w-[1100px] mx-auto bgAbout'>
 <section class="text-[#010854] bg-[white] body-font relative min-h-[100vh]">
  <div class="container mx-auto grid md:grid-cols-[40%_60%] grid-cols-1 items-center ">
  <div class="lg:max-w-lg lg:w-full md:w-1/2 "data-aos="fade-right">
    <img class="object-cover object-center rounded" alt="hero" src="images/card1.jpg"/>
  </div>
  <div className='about md:p-[50px] p-[20px]' data-aos="fade-up">
    <h3>Lorem ipsum.</h3>
    <h2>We complete every project with extra care for you</h2>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu accumsan libero. Nullam vulputate arcu tellus, ut placerat libero convallis hendrerit.</p>
    <p>Praesent dui leo, rhoncus non interdum sit amet, lobortis eu elit. Vivamus eu libero vitae purus eleifend rhoncus. Nullam vel tempus nulla. Donec bibendum bibendum ipsum id maximus.</p>
    <button className='rounded-[23px] bg-button text-white font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
 </div>
  </div>
 </section>
   </div>

  <NewsLetter/>
  <Footer/>
  
    </div>
  )
}
