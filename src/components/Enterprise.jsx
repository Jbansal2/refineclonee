import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Enterprise = () => {
    return (
        <div className='bg-gray-900 text-white py-16 px-4 text-left'>
            <h6 className="text-3xl ml-10 font-semibold mb-8">
                Enterprise developers ❤️ <span className="text-cyan-300">Refine</span>.
            </h6>
            <p className="text-gray-400 text-sm ml-10">
            Refine is designed to target the specific pain points of larger organizations by giving top priority to {" "}<span className='text-white'>security</span>.
            </p>


            <div className="max-w-5xl mt-10 ml-10">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mr-20'>

                    {/** Card 1 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/4520/4520736.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Self-host" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Self-host for compliance</p>
                            <p className='text-gray-400 text-sm'>
                                Deploy to your own infrastructure without worrying about regulations, performance, and stability.
                                Maintain your current security best practices with no compromises.
                            </p>
                        </div>
                    </div>

                    {/** Card 2 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/5431/5431361.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Identity Provider" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Leverage the power of your existing Identity Provider</p>
                            <p className='text-gray-400 text-sm'>
                                Native support for Okta, Azure AD, Amazon Cognito & Google Cloud Identity.
                            </p>
                        </div>
                    </div>

                    {/** Card 3 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/12795/12795904.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Access Control" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Achieve fine-grained access control</p>
                            <p className='text-gray-400 text-sm'>
                                Out-of-the-box support for widely accepted authorization models including ACL, RBAC & ABAC.
                            </p>
                        </div>
                    </div>

                    {/** Card 4 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/10903/10903012.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Black Box" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Unlock the black box</p>
                            <p className='text-gray-400 text-sm'>
                                Implement an open-source solution with an open architecture.
                                Save yourself from the hassle of adding another proprietary component to your stack.
                            </p>
                        </div>
                    </div>

                    {/** Card 5 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/13710/13710214.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Monitoring" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Effortlessly monitor your application</p>
                            <p className='text-gray-400 text-sm'>
                                Ready-made providers and components for audit logging and usage analytics.
                            </p>
                        </div>
                    </div>

                    {/** Card 6 */}
                    <div className='bg-gray-800 p-6 rounded-lg flex items-start'>
                        <img src="https://cdn-icons-png.freepik.com/256/4796/4796635.png?ga=GA1.1.136609107.1738606781&semt=ais_hybrid" alt="Support" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-bold text-white">Get supported by the experts</p>
                            <p className='text-gray-400 text-sm'>
                                Enroll in plans that provide priority support, training, and consulting.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-7 align-baseline">
                        <button
                            className="bg-teal-900 hover:bg-cyan-800 text-cyan-100 font-semibold py-2 px-5 ml-20 align-middle rounded-full"
                        >Check out Enterprise Edition <FontAwesomeIcon icon={faCircleArrowRight} />
</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enterprise;
