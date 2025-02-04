import React from "react";

const StatsSection = () => {
    const stats = [
        { value: "29.6K+", text: "Stars on GitHub" },
        { value: "8K+", text: "Projects on production, including large enterprises" },
        { value: "32K+", text: "Active developers in our open-source community" },
        { value: "200K+", text: "End users are using apps built with Refine" },
    ];

    return (
        <div className="bg-gray-900 text-white py-16 px-4 text-left">
            <h2 className="text-3xl ml-10 font-semibold mb-8 ">
                Feel the power of a{" "}
                <span className="text-cyan-300">great community</span>.
            </h2>
            <div className="hover: cursor-pointer font-bold grid gap-6 ml-10 w-6-4 grid-cols-2 rounded-xl">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6  shadow-md text-center"
                    >
                        <p className="text-4xl font-bold -mr-50">{stat.value}</p>
                        <p className="text-gray-400 mt-2 justify-start">{stat.text}</p>
                    </div>
                ))}
            </div>

            <div className="grid mt-10 m-20 align-middle grid-cols-1 w-6-4 rounded-xl">
                <img src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/investors-2-dark.png"></img>
                <p className="text-3x1  mt-5 ml-10 font-sans mb-8 text-gray-400">Backed by <span className="text-white">Y Combinator</span>(YC S23),<span className="text-white">500 Emerging Europe </span> and <span className="text-white">Senovo</span></p>
            </div>
        </div>
    );
};

export default StatsSection;
