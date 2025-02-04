import React from 'react'

const Animated = () => {

    const content = [
        {
            name: 'First',
            head: 'Wheel? Already invented.',
            para: 'Start with a well-structured boilerplate, built around the industry’s best practices.',
            image: '/public/assets/first.png',
            text: 'Learn more',
        }

    ];
    const content1 = [
        {
            name: 'Second',
            head: 'New Innovations Await.',
            para: 'Leverage modern frameworks and best practices to build scalable applications.',
            image1: '/public/assets/code.png',
            text: 'Refine on GitHub',

        }
    ];

    return (
        <div className='h-[600px] w-full flex justify-center item center  gap-10  mt-10'>
            <div className="one w-[38%] bg-[#1D1E30] rounded-[20px] p-5 flex flex-col justify-around ">
                <div className="image bg-black  h-[300px] ">
                    <img
                        className="w-[100%] h-[300px] "
                        src={content.find(item => item.name).image}
                        width="auto"
                        height="300"
                    />
                </div>
                <div className="text">
                    <h1 className='text-[30px] mt-5 ml-3 text-white'>{content.find(item => item.name).head}</h1>
                    <p className='mt-5 ml-3 text-[#474E6B]'>{content.find(item => item.name).para}</p>
                </div>
                <div className="button ml-3 mt-5  rounded-[20px]">
                    <button className='px-5 py-2 border-2 border-[#47EBEB] rounded-[20px] text-[#0FBDBD]' >{content.find(item => item.name).text}<i className="ri-arrow-left-circle-line ml-3"></i></button>
                </div>
            </div>
            <div className=" w-[44%] bg-[#1D1E30] rounded-[20px] flex flex-col justify-around  p-5">
                <div className="image bg-black  h-[300px]">
                    <img
                        className="w-[100%] h-[300px] "
                        src={content1.find(item => item.name).image1}
                        width="auto"
                        height="300"
                    />
                </div>
                <div className="text">
                    <h1 className='text-[30px] mt-5 ml-3 text-white'>{content1.find(item => item.name).head}</h1>
                    <p className='mt-5 ml-3 text-[#474E6B]'>{content1.find(item => item.name).para}</p>
                </div>
                <div className="button ml-3 mt-5  rounded-[20px]">
                    <button className='px-5 py-2 border-2 border-[#47EBEB] rounded-[20px] text-[#0FBDBD]' >{content1.find(item => item.name).text}<i className="ri-arrow-left-circle-line ml-3"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Animated;
