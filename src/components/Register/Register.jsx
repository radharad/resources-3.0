import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='overflow-hidden'>
      <div className='bgRegister'>
       <div className='RegisterElement md:w-[900px] bg-[#010854] mx-auto my-[50px] px-[50px]'>
        <div className='inner md:w-[900px] border border-[#5a5959]'>
        <p><img src='images/logo.png' className='h-[86.27px] w-[100px]' alt=''/></p>
            <div>
             <section className="text-white body-font relative">
             <div className="container px-5 py-[20px] mx-auto">
             <div className="flex flex-col text-center w-full mb-12">
             <h1 className='font-bold text-3xl text-center mb-[20px]'>SIGN UP</h1>
             </div>
          <p className=' font-bold'>UserID: <span className='text-[rgb(128, 136, 231)]'>RHI218277</span></p>
            
            <div className="">
           <div className="flex flex-wrap -m-2">
          <div className="p-2 md:w-1/2 ">
            <div className="relative">
             <label htmlFor="userid" class="leading-7  text-white">Sponsor Id</label>
             <input type="text" id="userid" name="userid" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="position" class="leading-7  text-white">Position</label>
            <select  id="position" name="position"  className='w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='  --Select Position--  '>
                <option value="-1" className=''>  --Select Position--  </option>
                <option value="left"  className=''>LEFT</option>
                <option value="right" className=''>RIGHT</option>
            </select>
          </div>
       </div>
     </div>
   </div>

   <div className="">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7  text-white">Full Name</label>
            <input type="text" id="name" name="name" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Full Name'/>
          </div>
        </div>
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="gender" className="leading-7  text-white">Gender</label>
            <select  id="gender" name="gender"  className='w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='  --Select Gender--  '>
                <option value="-1" className=''>  --Select Gender--  </option>
                <option value="left"  className=''>Male</option>
                <option value="right" className=''>Female</option>
                <option value="right" className=''>Other</option>
            </select>
          </div>
       </div> 
     </div>
   </div>

   <div className="">
      <div className="flex flex-wrap -m-2">
      <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="country" className="leading-7  text-white">Country</label>
            <select  id="country" name="country"  className='w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter Country Name'>
                <option value="-1" className=''>Enter Country Name</option>
                <option value="left"  className=''>India</option>
            </select>
          </div>
       </div> 
       <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="state" className="leading-7  text-white">State</label>
            <select  id="state" name="state"  className='w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter State Name'>
                <option value="-1" className=''>Enter State Name</option>
                <option value="left"  className=''>Maharashtra</option>
            </select>
          </div>
       </div> 
     </div>
   </div>

   <div className="">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7  text-white">Email Id</label>
            <input type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Email'/>
          </div>
        </div>
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="mobile" className="leading-7  text-white">Mobile No.</label>
            <input type="text" id="mobile" name="mobile" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Mobile Number'/>
          </div>
       </div>
     </div>
   </div>

   <div className="">
      <div className="flex flex-wrap -m-2">
      <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="districit" class="leading-7  text-white">District</label>
            <select  id="districit" name="districit"  className='w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Select District'>
                <option value="-1" className=''>Select District</option>
                <option value="left"  className=''>Nagpur</option>
                <option value="left"  className=''>Amravati</option>
                <option value="left"  className=''>Pune</option>
            </select>
          </div>
       </div> 
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="pincode" className="leading-7  text-white">Pincode</label>
            <input type="number" id="pincode" name="pincode" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Pincode'/>
          </div>
       </div>
     </div>
   </div>

   <div className="">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 md:w-1/2">
          <div className="relative">
            <label htmlFor="password" className="leading-7  text-white">Password</label>
            <input type="password rounded-[]" id="password" name="password" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Password'/>
          </div>
        </div>
         
     </div>
   </div>

  <div className='mt-[30px]'><input type='checkbox' checked/></div><span className='relative left-[20px] bottom-6'>I agree to the<span className='text-[#010854]'> Terms Conditions</span></span>
  <div className='py-[5px] text-center'>
  <button className='bg-button p-2 text-center w-[200px]  font-bold '>Register</button>
  </div>
  <p className='float-right'>Already Have an account? <a href='/login' className='text-[#010854]'>Log in</a></p>
  </div>
  </section>  
             
 </div>
 </div>
 </div>
 </div>
 </div>
            
  )
}
