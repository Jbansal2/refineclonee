import React from 'react'

const Hero = () => {
    return (
        <div className=" w-full h-screen text-white flex justify-between items-center  g-[20px]  p-[20px] ">
            <div className="text-content w-[55%]  z-[20] ml-[80px] relative  ">
                <div className="top-content border-2 border-white rounded-full  flex justify-center  p-[5px]  w-45 ">
                    <a className="no-underline text-[12px]" href=""><i className="ri-star-fill text-[#FF4C4D] mr-[5px]"></i>29.6K GitHub stars so far</a>
                </div>
                <div className="middle-content">
                    <h1 className="text-[75px] font-bold">Open-source Retool for Enterprise</h1>
                    <p className='para w-120'>Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.</p>
                </div>
                <div className="bottom-content mt-20 flex justify-start gap-5 tems-center">
                    <button className='border-2 bg-[#0FBDBD] border-none px-5 py-3 rounded-full cursor-pointer text-black'><i className="ri-send-plane-2-fill mr-3"></i>See Docs</button>
                    <button className='border-2 bg-[#1D1E30] border-none px-5 py-3 rounded-full cursor-pointer text-[#0FBDBD]' >npm create refine-app@latest</button>
                </div>
            </div>
            <div className="svg-content w-[45%] h-[470px]  flex justify-center mr-[70px]  bg-[#1D1E30] rounded-[20px] items-center absolute right-0">
                <div className="right-content border-2 border-white w-[80%] h-[80%] flex justify-center flex-col relative items-center p-[20px] rounded-[20px]
 ">
                    <img className='w-35' src="/public/assets/center-logo-dark.png" alt="" />

                    <img className="w-[80%] h-[80%] absolute mt-110 " src="/public/assets/landing-hero-connection-ray.png " alt="" />

                </div>
            </div>

        </div>




    )
}

export default Hero;




