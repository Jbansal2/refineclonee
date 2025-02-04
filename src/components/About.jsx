import React from 'react'
import { useState } from 'react';

const About = () => {

    const [activeTab, setActiveTab] = useState('Tables');

    const tabs = [
        {
            name: 'Tables',
            image: '/public/assets/datatables-ui-dark.png',
            images: '/public/assets/datatables-code-dark table.png'
        },
        {
            name: 'List',
            image: '/public/assets/list-ui-dark.png',
            images: '/public/assets/list-code-dark table.png'
        },
        {
            name: 'Charts',
            image: '/public/assets/charts-ui-dark.png',
            images: '/public/assets/charts-code-dark charts.png'
        },
        {
            name: 'Forms',
            image: '/public/assets/forms-ui-dark.png',
            images: '/public/assets/forms-code-dark forms.png'
        },
        {
            name: 'Wizards',
            image: '/public/assets/wizards-ui-dark.png',
            images: '/public/assets/wizards-code-dark wizards.png'
        },
        {
            name: 'Authentication',
            image: '/public/assets/authentication-ui.png',
            images: '/public/assets/authentication-code-dark auth.png'
        },
    ];
    const TabClick = (tab) => {
        setActiveTab(tab.name);
    };

    return (
        <div className=' h-screen mt-20   '>
            <div className="content text-white flex  flex-col text-left ml-[130px]">
                <h1 className='text-[35px]'>The <span className='text-[#47EBEB]'>sweet spot</span> between low-code and full-code.</h1>
                <p className='mt-5'>Drag-and-drop tools shine initially but collapse under the <br /> weight of complexity. Refine offers comparable speed at <br /> the start and infinite scaling in the long run.</p>
            </div>
            <div className='flex justify-center items-center h-[600px]  mt-[70px]'>
                <div className="flex  justify-center  mt-18 items-center space-y-4  ">
                    <div className=' tables-content flex justify-around items-center bg-[#1D1E30] rounded-[20px] w-[100%] h-[700px]'>

                        <div>
                            <div className='ml-[40px] text-[18px] text-white'>
                                <h1>
                                Business applications not only share <br/> fundamental UI elements, but also the <br/> underlying logic.</h1>
                                <p className='mt-5 mb-15 text-[#CFD7E2]'>Stop writing repetitive code for CRUD, security and <br/> state management. Let Refine automatically transform  <br/> your UI elements to enterprise-grade:</p>
                            </div>
                            <div className=" ml-8 p-2 rounded-full cursor-pointer w-[40%] bg-[#1D1E30] grid grid-cols-2 gap-x-40 gap-y-5  ">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.name}
                                        className={` px-3 py-2 rounded-full w-35 text-white bg-[#14141F] }`}
                                        onClick={() => TabClick(tab)}
                                    >
                                       {tab.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mt-4 w-[100%] relative  " id="image-container  ">
                                <img className='w-[100%] h-[500px] rounded-[20px] '
                                    src={tabs.find(tab => tab.name === activeTab).image}
                                    alt={`Image for ${activeTab }`}
                                    width="600"
                                    height="400"
                                />
                            </div>
                            <div className=" w-[40%] h-[150px]  absolute mt-[-60px] ml-[-80px] bg-[#14141F] rounded-[20px]  " id="image-container ">
                                <img className='w-[100%] h-[150px] rounded-[20px] '
                                    src={tabs.find(tab => tab.name === activeTab).images}
                                    alt={`Images for ${activeTab}`}
                                    width="600"
                                    height="400"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
