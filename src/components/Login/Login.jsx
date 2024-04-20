import React from 'react'
import './Login.css'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className='overflow-hidden'>
      <div className='bgLogin'>
       <div className='login-16 md:w-[900px] bg-[#010854] mx-auto my-[50px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>

        <div className='logopage text-center '>
          {/* <div className='card py-[50px]'>
          <p><img src='images/logo.png' className='h-[86.27px] w-[100px]   sm:pb-0 pb-5 ml-[120px]' alt='img'/></p>
          <h1 className='text-3xl font-bold'>Welcome To <p>Company Name</p></h1>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </div> */}
           <img src='images/login.webp' alt='login'/>
          </div>

          <div className='pr-[50px] pt-[50px] pb-[50px]'>
          <form className='text-white'>
            <h1 className='font-bold text-2xl text-center mb-[20px]'>USER LOGIN</h1>
            <div className='space-y-7'>
            <div className='border border-1 '><input className='bg-transparent md:w-[347px] w-[300px]' placeholder='UserId' type='text'/></div>
            <div className='border border-1 '><input className='bg-transparent  md:w-[347px] w-[300px]' placeholder='Password'  type='password'/></div>
            </div>
            <NavLink to={"/forget"} className='float-right relative bottom-2 p-2'>Forgot Password?</NavLink>
            <div className='mt-[30px]'><input type='checkbox'/></div><span className='relative left-[20px] bottom-6 '>keep me logged in</span>
            <button className='bg-button w-[100%] p-2 font-bold rounded'>LOGIN</button>
            <p className='text-center text-gray-400 p-3'>or login with</p>
            <div className='text-center flex flex-wrap items-center gap-5'>
            <button className='flex flex-wrap py-2 px-[50px] border-2 border-[#010854] rounded-md items-center'><FcGoogle/> &nbsp;&nbsp;Google</button>
            <button className='flex flex-wrap py-2 px-[50px] border-2 border-[#010854] rounded-md items-center'><FaFacebookF className='text-blue-600'/> &nbsp;&nbsp;Facebook</button>
            </div>
            <p>Don't have an account? <NavLink to={'/register'} className='relative'>Register Here</NavLink></p>
          </form>
          </div>

       

         </div>
         </div>
        </div>
    </div>
  )
}
