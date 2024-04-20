import React from 'react'
import './ForgetPassword.css'
import { NavLink } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <div className='overflow-hidden'>
   <div className='bgForget'>
       <div className='Forget md:w-[900px] bg-[#010854 ] mx-auto my-[125px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>
         
         <div className=' border border-[#5a5959] md:ml-[50px] md:py-[62px]'>
          <div className='p-[50px]'>
          <form className='text-white'>
            <h1 className='font-bold text-2xl text-center mb-[20px]'>USER LOGIN</h1>
            <div className='space-y-7'>
            <div className='border border-1 '><input className='bg-transparent md:w-[347px] w-[300px]' placeholder='UserId' type='text'/></div>
            <button className='bg-button w-[100%] p-2 font-bold rounded'>Recover</button>
            <NavLink to={'/login'} className='relative'>Back to Login</NavLink>
            </div>
          </form>
          </div>
          </div>

          <div className='logopage text-center text-white py-[70px]'>
          <div className='py-[50px] mx-[50px]'>
          <p><img src='images/logo.png' className='h-[100px] w-[100px]   sm:pb-0 pb-5 ml-[120px]' alt='img'/></p>
          <h1 className='text-3xl font-bold'>Welcome To <p>Company Name</p></h1>
          </div>

          </div>
          </div>
          </div>
          </div>
         
    </div>
  )
}
