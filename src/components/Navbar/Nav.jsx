import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
import './Navbar.css'

export default function Nav() {
  const [toggle,setToggle] = useState(false)
  const handleToggle = () => {
   setToggle(!toggle)
  }

  return ( 
     <div className='color text-black mx-auto overflow-hidden'>
      <div>
         <div className='flex justify-around items-center text-white max-w-[1100px] mx-auto py-5'>
        <div className='w-full text-3xl font-bold decoration-none'>
        <NavLink to={"/"}>
        <p className='logo'>COMPANY</p>
          </NavLink>
        </div>
        <ul className='hidden md:flex gap-[3rem] pt-3 text-white items-center  font-bold '>
     
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>BUSINESS</NavLink>
        </li>
        <li>
          <NavLink to={"/legal"}>LEGAL</NavLink>
        </li>
        <li>
        <NavLink to={"/contact"}>CONTACT</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>LOGIN</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>REGISTRATION</NavLink>
        </li>
        </ul>
       
        <div onClick={handleToggle} className='block z-10 md:hidden button py-[10px] px-[20px]'>
        {
          toggle ?
          <AiOutlineClose size={30} className=''/>
          :
          <AiOutlineMenu size={30}/>
        }
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'z-[1] fixed left-0 top-0 w-[100%] pt-[50px] h-[450px] hover:pointer text-center border-r-gray-900 bg-[#010854] text-white ease-in-out duration-100  z-2' : 'bg-[#430000] fixed ease-in-out duration-100 left-[-100%] z-2'}>
        <li className='p-2'>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/service"}>Business</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/legal"}>Legal</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/register"}>Registration</NavLink>
        </li>
        </ul>
      </div> 
      </div>
     </div>
  )
}
