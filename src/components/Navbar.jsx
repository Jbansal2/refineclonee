import React from 'react'
import '../index.css';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-[#14141F] text-white flex justify-around items-center h-[70px]">
        <div className="logo w-[100px]"><a href=""><img className='w-[500px]' src="/assets/logo.png" alt="logo" /></a></div>
        <div>
          <div className="p-4 bg-[#14141F] text-white flex justify-center gap-[30px] no-underline">
            <a href="/opensource" className="no-underline text-white">Open-source <i className="ri-arrow-down-s-line"></i></a>
            <a href="/enterprise" className="no-underline text-white">Enterprise<span className="ml-[5px] text-[#1fad66] text-[10px] px-[7px] py-[2px] rounded-full border-2 border-animate ">New</span></a>
            <a href="/community" className="no-underline text-white">Community<i className="ri-arrow-down-s-line"></i></a>
            <a href="/company" className="no-underline text-white">Company<i className="ri-arrow-down-s-line"></i></a>
          </div>
        </div>
        <div className="buttons flex justify-center items-center gap-[15px] ">

          <div className='flex justify-around items-center gap-[8px] border-2 border-[#6c7793] text-[#6c7793] rounded-full px-[10px] py-[10px] cursor-pointer' ><i className="ri-search-2-line text-[#6c7793]"></i>Search <span className='bg-[#474e6b]  rounded-full px-[5px] py-[4px] text-[10px]'>⌘K</span></div>


          <div className='border-2 border-[#6c7793] rounded-full px-[10px] py-[5px] text-[#6c7793] flex justify-around items-center gap-[7px] cursor-pointer'><i className="ri-github-fill text-[25px] text-[#6c7793]"></i>29.6k</div>


          <div><i className="ri-sun-line border-2 border-[#6c7793] text-[#6c7793] px-[10px] py-[10px] rounded-full cursor-pointer"></i></div>
        </div>

      </nav>
  )
}

export default Navbar
