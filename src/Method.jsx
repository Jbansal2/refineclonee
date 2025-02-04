import React from 'react';

const GetStarted = () => {
    return (
        <div className="bg-gray-900 text-white p-10">
            <h1 className="text-3xl font-semibold mb-4 ml-20">Get started now!</h1>
            <p className="mb-10 ml-20 text-gray-300">Choose your way to scaffold your project and start developing in seconds.</p>
            <div className="flex justify-between">
                <div className="bg-gradient-to-br ml-20 from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg flex-1 mr-4">
                    <h2 className="font-semibold">Use our online GUI to create, customize, and download.</h2>
                    <button className="mt-4 bg-blue-200 hover:bg-blue-300 text-gray-900 px-4 py-2 rounded-full">Try it in your browser</button>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg flex-1 ml-4 text-center">
                    <h2 className="font-semibold">Run the npm command in Terminal and follow the wizard instructions.</h2>
                    <button className="block bg-gray-800 hover:bg-cyan-700 text-cyan-300 p-2 rounded-lg mt-4">npm create refine-app@latest</button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;