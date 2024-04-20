import React,{useEffect} from 'react'
import './Card.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Card() {
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })

  return (
    <div className=''>

      <div class="container headings md:w-[1100px] mx-auto p-[20px]">
       <h1 class="font-weight-bold">Our Expert Team</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
   
      <div className='containerCards grid md:grid-cols-3 grid-cols-1 md:w-[1100px] mx-auto m-[100px] gap-5'>
        <div className='card' data-aos="zoom-in">
         <div className='imgBx'>
          <img src='images/p4.jpg'/>
         </div>
         <h2>cards</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem dolor quas doloremque saepe voluptate, aliquam officiis vitae earum quod.</p>
        </div>

        <div className='card' data-aos="zoom-in">
         <div className='imgBx'>
          <img src='images/p2.jpg'/>
         </div>
         <h2>cards</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem dolor quas doloremque saepe voluptate, aliquam officiis vitae earum quod.</p>
        </div>

        <div className='card' data-aos="zoom-in">
         <div className='imgBx'>
          <img src='images/p3.jpg'/>
         </div>
         <h2>cards</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem dolor quas doloremque saepe voluptate, aliquam officiis vitae earum quod.</p>
        </div>
    </div>
    </div>
  )
}
