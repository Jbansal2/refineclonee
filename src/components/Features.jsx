import React from 'react'


const Features = () => {

    const logo = [
        {
            name: 'Airtable',
            image: '/public/assets/images-removebg-preview.png',

        },
        {
            name: 'Firebase',
            image: '/public/assets/list-ui-dark.png',

        },
        {
            name: 'Next.js',
            image: '/public/assets/charts-ui-dark.png',

        },
        {
            name: 'Rest',
            image: '/public/assets/forms-ui-dark.png',

        },
        {
            name: 'Hook Form',
            image: '/public/assets/wizards-ui-dark.png',

        },
        {
            name: 'Graphql',
            image: '/public/assets/authentication-ui.png',

        },
        {
            name: 'Rest',
            image: '/public/assets/forms-ui-dark.png',

        },
    ];


    return (
        <div className='  h-auto w-full   mt-60 flex justify-center items-center    flex-col'>
            <div className = ' w-[80%] mb-15 '>
            <h1 className='text-white text-left text-[33px]'>Start <span className='text-[#1FAD66]'>faster</span>, maintain <span className='text-[#0FBDBD]'>easier</span>, manage <span className='text-[#FF4C4D]'>complexity</span> .</h1>
            </div>
            <div className='content text-white flex justify-cente flex-col items-center text-center  w-[85%] bg-[#1D1E30] rounded-[20px]'>
                <div className="logo-animation flex justify-center items-center gap-5 mt-10 ">
                    {logo.map((logos) => (
                        <div
                            key={logos.name}
                            className={` px-4 py-3 rounded-full w-35 text-center flex  justify-center items-center text-white bg-[#14141F] }`}

                        >
                            {logos.name}
                        </div>
                    ))}
                </div>
                <div className="logo-animation flex justify-center items-center gap-5 mt-10">
                    {logo.map((logos) => (
                        <div
                            key={logos.name}
                            className={` px-4 py-3 rounded-full w-35 text-center flex  justify-center items-center text-white bg-[#14141F] }`}

                        >
                            {logos.name}
                        </div>
                    ))}
                </div>
                <div className="bottom-text flex justify-between mt-10 gap-70 items-center">
                    <div className="left text-left ">
                        <h1 className='text-[25px]'>Seamless connectivity</h1>
                        <p className='mt-5 text-[#303450]'>Out-of-the box integrations for 15+ services including custom REST and GraphQL API’s.</p>
                    </div>
                    <div className=" flex justify-center  item-center right bg-[#9bc7c7] px-10 py-3 rounded-[25px]">
                        <button className=' text-[#0FBDBD]'>All integrations<i className="ri-arrow-left-circle-fill ml-2"></i></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;
