import { FaDiscord, FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-500 text-gray-300 py-10 px-6">
            <div className="max-w-7xl ml-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-white font-bold text-lg">Resources</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Getting Started</li>
                        <li>Tutorials</li>
                        <li>Blog</li>
                        <li>React Admin Panel</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-bold text-lg">Product</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Enterprise <span className="text-green-300 text-xs rounded-lg bg-green-800">NEW</span></li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white font-bold text-lg">Company</h2>
                    <ul className="mt-2 space-y-2">
                        <li>About</li>
                        <li>Store</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto ml-20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">
                    <p className="font-bold text-lg">Refine Development Inc.</p>
                    <p>256 Chapman Road STE 105-4 Newark, DE 19702</p>
                    <p>info@refine.dev</p>
                </div>

                <div className="flex flex-col mt-10 md:mt-0 items-center text-white">
                    <span>Join us on</span>
                    <div className="flex space-x-4 mt-2">
                        <FaGithub size={24} />
                        <FaDiscord size={24} />
                        <FaReddit size={24} />
                        <RxCross2 size={24} />
                        <FaLinkedin size={24} />
                    </div>
                </div>

            </div>

            <div className="container mx-auto ml-15 flex flex-col border-t mt-5 border-gray-500 md:flex-row justify-between  px-4">
                {/* Links */}
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-gray-500 mt-8 ml-20">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-500 mt-8">License</a>
                </div>
                <div className="text-center text-sm text-gray-500 mt-6">
                    <p>&copy; 2025, Refine from San Francisco to wherever you're with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
