import { useState } from "react";
import logo from "../assets/Logo.png";
import hamMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div className="w-full h-[80px] bg-slate-900 text-white ">
            <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
                <div className="hidden md:flex items-center ">
                    <ul className="flex gap-4">
                        <img src={logo} className="h-[25px]" alt="" />
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Resources</li>
                    </ul>
                </div>

                <div className="hidden md:flex object-position:left">
                    <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
                        Sign in
                    </button>
                    <button className="px-8 py-3 rounded-md bg-slate-900 text-white font-bold">
                        Request Demo
                    </button>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    <img src={toggle ? close : hamMenu} alt="" />
                </div>
            </div>

            <div
                className={
                    toggle
                        ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
                        : "hidden"
                }
            >
                <ul>
                    <li className="p-4 hover:bg-gray-100">Pricing</li>
                    <li className="p-4 hover:bg-gray-100">About</li>
                    <li className="p-4 hover:bg-gray-100">Blog</li>
                    <li className="p-4 hover:bg-gray-100">Gallery</li>
                    <li className="p-4 hover:bg-gray-100">Resources</li>
                    <div className="flex flex-col my-4 gap-4">
                        <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
                            Sign in
                        </button>
                        <button className="px-8 py-5 rounded-md bg-slate-900 text-white font-bold">
                            Request Demo
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
