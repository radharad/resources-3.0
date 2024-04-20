import React,{useEffect} from 'react'
import './Footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  const [counter, setCounter] = React.useState(2023)
  React.useEffect(()=>{
      setInterval(()=>{
        setCounter(counter + 1);
      }, 31536000);
      
    
  },[counter])
  useEffect(() => { 
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  })
  return (
    <div className='overflow-hidden'>
      <div className='bgLast'>
       <div className='grid md:grid-cols-[30%_auto_auto_auto] grid-cols-1 md:w-[1200px] mx-auto text-white '>
        <div className='one' data-aos="fade-up" data-aos-delay="200">
          <h1 className=' py-[20px] '>Green Energy Network</h1>
          <p>Fusce venenatis massa nec nibh euismod, nec lobortis enim aliquam. Aenean are pellentesque efficitur nisi a blandit.</p>
          <div className='footer-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
            <div><BsWhatsapp/></div>
          </div>
        </div>

        <div className='two md:ml-[50px]' data-aos="fade-up" data-aos-delay="400">
         <h1>Company</h1>
         <ul>
          <li>About us</li>
          <li>Team Members</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
         </ul>
        </div>

        <div className='two' data-aos="fade-up" data-aos-delay="600">
         <h1>Useful Links</h1>
         <ul>
          <li><a href='/about'>About Us</a></li>
          <li><a href='/contact'>Contact Us</a></li>
          <li><a href='/service'>Service</a></li>
          <li><a href='/contact'>Help Center</a></li>
         </ul>
        </div>

        <div className='four' data-aos="fade-up" data-aos-delay="800">
          <h1>Contact us</h1>
          <div className='grid grid-cols-1 gap-5 py-[50px]'>
        <div>
            <h5><BsTelephone/></h5>
            <h6> (+1) 123 456 7890 </h6>
        </div>
        <div>
            <h5><BiEnvelope/></h5>
            <h6>company@info.com</h6>
        </div>
        <div>
            <h5><MdOutlineLocationOn/></h5>
            <h6>Area, City , State, Pincode</h6>
        </div>
       </div> 
       </div>
       </div>
        <div className="dotted grid md:grid-cols-2 grid-cols-1  text-white p-[20px] md:w-[1200px] mx-auto ">
       <div>© Copyright {counter} <a className='text-blue-200'>Company Name</a> All Rights Reserved.</div>
       <div className='last '>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
       </div>
        </div>
      </div>   
    </div>
  )
}
