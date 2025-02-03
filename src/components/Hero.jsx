import React from 'react'

const Hero = () => {
    return (
        <div className=" w-full h-screen text-white flex justify-between items-center  g-[20px]  p-[20px] ">
            <div className="text-content w-[55%]  z-[20] ml-[80px] relative  ">
                <div className="top-content border-2 border-white rounded-full  flex justify-center  p-[5px]  w-45 ">
                    <a className="no-underline text-[12px]" href=""><i className="ri-star-fill text-[#FF4C4D] mr-[5px]"></i>29.6K GitHub stars so far</a>
                </div>
                <div className="middle-content">
                    <h1 className="text-[80px] font-semi-bold">Open-source Retool for Enterprise</h1>
                    <p className='para w-120'>Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.</p>
                </div>
                <div className="bottom-content">
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="svg-content w-[45%] h-[470px]  flex justify-center mr-[70px]  bg-[#1D1E30] rounded-[20px] items-center absolute right-0">
                <div className="right-content border-2 border-white w-[80%] h-[80%] flex justify-between items-center p-[20px] rounded-[20px]
 ">
                    <div>1</div>
                    <div>2</div>
                    
                </div>
            </div>

        </div>

       

        
    )
}

export default Hero;





