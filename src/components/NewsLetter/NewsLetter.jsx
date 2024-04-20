import React,{useEffect} from 'react'
import './NewsLetter.css'
import {GrSend} from 'react-icons/gr'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function NewsLetter() {
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='overflow-hidden' data-aos="fade-up">
    <div className='md:w-[970px] mx-auto  p-[50px] z-[1] bg-[#002366] relative m-[50px]' >
      <div className='letter'>
        <h2>Subscribe to Our Newsletter</h2>
         <div className="form-group newsletter-field">
            <form action="#" method="post">
             <input className="form-control" type="email" name="EMAIL" placeholder="Your email"/>
                <button type="submit" className="sendbtn" >
                 <GrSend className='text-[30px] ml-[10px]'/>
                </button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
