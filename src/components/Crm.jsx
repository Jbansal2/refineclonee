import React from 'react'
import { useState } from 'react';

function Crm() {
    const [activeTab, setActiveTab] = useState('CRM Application');

    const tabs = [
        {
            name: 'CRM Application',
            image: '/public/assets/base-render.png'
        },
        { name: 'E-Commerce Application', 
          image: '/public/assets/base_render-2.png' 
        },
        { name: 'HR Application', 
          image: '/public/assets/base_render (1).png' 
        },
        { name: 'DevOps Dashboard', 
          image: '/public/assets/base_render.png' 
        }
    ];

    const TabClick = (tab) => {
        setActiveTab(tab.name);
    };

    return (
        <div className="flex flex-col justify-center  mt-18 items-center h-screen space-y-4">
            <div className=' w-[85%] h-[800px] flex flex-col items-center p-4  bg-[#303450] rounded-[20px]'>
                <div className="  p-2 rounded-full cursor-pointer w-[100%] bg-[#1D1E30] flex justify-around ">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`tab px-20 py-2 rounded-full ${activeTab === tab.name ? 'bg-[#474E6B] text-white' : 'text-white'}`}
                            onClick={() => TabClick(tab)}
                        >
                            {tab.name}
                        </div>
                    ))}
                </div>
                <div className="mt-4 w-[100%] h-[700px] " id="image-container ">
                    <img className='w-[100%] h-[700px] rounded-[20px]'
                        src={tabs.find(tab => tab.name === activeTab).image}
                        alt={`Image for ${activeTab}`}
                        width="600"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
}

export default Crm;
