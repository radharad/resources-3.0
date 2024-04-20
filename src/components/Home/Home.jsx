import React,{useEffect, useRef, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {SiGoogleanalytics} from 'react-icons/si'
import {MdHeadsetMic} from 'react-icons/md'
import {CiGlobe} from 'react-icons/ci'
import {BsShieldCheck} from 'react-icons/bs'
import './Home.css'
import Nav from '../Navbar/Nav'
import Chart from '../Chart/Chart'
import Card from '../Card/Card'
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMiniutes, setTimerMiniutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
   const startTimer = () => {
      const countdownDate = new Date ('January 1, 2025 00:00:00').getTime();
      interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countdownDate - now;
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60 )));
          const miniutes = Math.floor((distance % (1000 * 60 * 60)/(1000 * 60)));
          const seconds = Math.floor((distance % (1000 * 60)/(1000)));

          if (distance < 0){
              //stop our timer
              clearInterval(interval.current)
          }else{
              //update timer
              setTimerDays(days)
              setTimerHours(hours)
              setTimerMiniutes(miniutes)
              setTimerSeconds(seconds)
          }
      },1000)
  }
  //component Did Mount
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
      startTimer();
      return () => {
          clearInterval(interval.current)
      }
  })
  return (
    <div className='overflow-hidden'>
        <Nav/>

   {/* Home Section Start */}     
        <section className='mainBg text-white'> 
        <div className='grid md:grid-cols-2 grid-cols-1 items-center  md:w-[1100px] mx-auto'>

          <div data-aos="fade-right">
            <h1 className='md:text-3xl md:leading-[50px] text-2xl'>The <span className='font-bold'>World's Most </span>Sophisticated<br/>Green Energy Network</h1>
          <div className='btn-group md:mt-[30px]'>

            <button>
            <NavLink  to={"/contact"} className='pdf'>
            <div className='flex flex-wrap items-center relative font-medium px-5 py-3 mx-auto text-white bg-button rounded-[30px]'> 
            <div className='text-xl'><BsFillTelephoneFill/> </div>
            <div>
            <span> &nbsp;Contact <span className='display'>Us</span></span>
            </div>
            </div>
            </NavLink>
            </button>

            <button>
            <a className='pdf' href="https://www.youtube.com/watch?v=5mnLf34TBnk">
            <div className='flex flex-wrap items-center relative font-medium mx-auto px-5 py-3'> 
            <div className='mt-2 text-xl'><AiOutlinePlayCircle/></div>
            <div>
            &nbsp;&nbsp;<span className='video'>watch a demo</span>
            </div>
            </div>
            </a>
            </button>

            </div>
          </div>

          <div data-aos="fade-up">
           <div className='graph md:w-[380px] md:h-[380px] bg-white mx-auto md:mt-[70px] mt-[80px]'>
           <div className='graph-bg text-center pt-5 ]'>
            <h2 className='font-bold'>BONUS 10% END IN :</h2>
           <div className='second'>
         <div className='timer grid md:grid-cols-4 grid-cols-1'>
            <div className='timing'>
            <div className='time'>
                <p className='bg-[#010854]'>{timerDays}</p>
                <h6>Days</h6>
            </div>    
            </div>

            <div className='timing'>
                <div className='time'>
                <p className='bg-[#010854]'>{timerHours}</p>
                <h6>Hours</h6>
                </div>
            </div>

            <div className='timing'>
            <div className='time'>
                <p className='bg-[#010854]'>{timerMiniutes}</p>
                <h6>Mins</h6>
            </div>    
            </div>

            <div className='timing'>
            <div className='time'>
                <p className='bg-[#010854]'>{timerSeconds}</p>
                <h6>Secs</h6>
            </div>    
            </div>

            </div>
        </div>

           <div class="custom-shape-divider-bottom-1698990145">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
           <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
           <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
           </svg>
           </div>
           </div>
           
           {/* <h3 className='text-black font-bold text-center'>FUND RAISED :<span className='text-blue-900'>#L,750,000</span></h3> */}
           <a className='pdf animate-pulse' href="/register">
            <div className='group flex flex-wrap items-center relative w-[200px] font-bold p-2 mx-auto text-white bg-button rounded-[30px]'> 
            <div className='group-hover:bg-[#010854] group-hover:text-[white]  bg-white text-[#010854] p-2 rounded-[50%]'><BsChevronRight className=''/> </div>
            <div>
            <span className="hover1 group-hover:hidden">&nbsp; Participate Now</span>
            <span className="group-hover:block hover2 relative left-[30px] font-bold">Click here</span>
            </div>
           
            </div>
            </a>
           
           </div>
          </div>

        </div>
        </section>
 {/* Home Section Start */}     

{/* whatsapp icon */}
<div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[40px] bottom-[90px] z-[99]'>
      <a href="https://wa.me/917875006677" target="_blank" rel='noreferrer'><img src='images/whatsapp.png' width={40} alt=''/></a>
</div>

    {/* <!------------About--------> */}
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
  <div class="lg:max-w-lg lg:w-full md:w-1/2"  data-aos="fade-right">
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
      
        <Chart/>

    {/*------------Service----------*/}
    <div className='bg text-white overflow-hidden'>
    <div className='grid md:grid-cols-[60%_auto] grid-cols-1'>

      <div  data-aos="fade-up">
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
    
     <div  data-aos="fade-left">
      <img className="object-cover object-center rounded py-[40px]" alt="hero" src="images/p1.webp" />
     </div>
     </div>
     </div>

        <Card/>

    {/*-----------Contact----------*/}    
    <div data-aos="fade-up">

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
    </div>
  )
}
