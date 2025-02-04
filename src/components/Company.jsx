import React from 'react'

const Company = () => {
    const companies = [
        {
            name: "Autodesk",
            logo: "/public/assets/autpdesk.png",
        },
        {
            name: "Amazon",
            logo: "/public/assets/amazon.png",
        },
        {
            name: "IBM",
            logo: "/public/assets/ibm-logo-design-history-and-evolution-kreafolk_f6963bf2-5011-41cd-a198-3b9b4dcff48d-removebg-preview.png",
        },
        {
            name: "Cisco",
            logo: "/public/assets/cisco.png",
        },
        {
            name: "Deloitte",
            logo: "/public/assets/deolite.png",
        },
        {
            name: "Meta",
            logo: "/public/assets/meta.png",
        },
    ];
    return (
        <div className="bg-transparent  rounded-lg p-8 flex justify-center items-center space-y-6 mt-15">
            <div className='flex flex-col bg-[#1D1E30] justify-center  item-center  w-[90%] h-[180px] space-y-6 rounded-[20px]'>
                <p className="text-gray-400 text-2xl text-left ml-[50px]">Trusted by developers from</p>
                <div className="flex justify-around items-center space-x-4">
                    {companies.map((company, index) => (
                        <img
                        className="h-8"
                        key={index}
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width="150"
                            height="100"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Company;
