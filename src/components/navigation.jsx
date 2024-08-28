import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../authentication/Authcontext";
import { useWindowSize } from 'react-use'
import Hamburger from './hamburger'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navigation() {
    const [open,setOpen] = useState(false);
    const { isAuthenticated, logout, login } = useContext(AuthContext); // Get authentication state and logout function
    const item = localStorage.getItem("token");
    const { width } = useWindowSize();
    const isLargeScreen = width > 768;
    const navItems = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Course", to: "/courses" }
    ];

    const handleOpen = () => {
        setOpen(prev => !prev);
        console.log("Menu toggled, new state:", !open);
     };
    useEffect(() => {
        console.log(open);
        login();
    }, [open]);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div>
            {isLargeScreen && <div className="flex h-[7vh] justify-evenly w-screen fixed z-10 bg-white ">
                <div className="w-1/5 h-full text-center">
                    <h2 className="text-4xl font-bold text-blue-800 h-full shadow-inner flex justify-center items-center">COURsiyA</h2>
                </div>
                <div className="w-3/6 flex justify-evenly items-center  ">
                    <ul className="flex justify-evenly items-center w-1/2 h-full">
                        {navItems.map((item) => (
                            <li className="text-lg font-semibold" key={item.name}>
                                <Link to={item.to}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-evenly w-1/5 items-center">
                    {item ? (
                        <div className="flex items-center">
                            <Link to='/profile'> <FaUserCircle className="text-5xl text-blue-500 cursor-pointer" /></Link>
                            {/* <button 
                            onClick={handleLogout} 
                            className="ml-4 cursor-pointer border-4 border-red-500 text-red-500 w-24 h-12 font-semibold text-lg flex justify-center items-center">
                            Logout
                        </button> */}
                        </div>
                    ) : (
                        <>
                            <Link to='/login'>
                                <div className="cursor-pointer border-4 border-blue-500 text-blue-500 w-16 h-10 flex justify-center items-center">
                                    Signin
                                </div>
                            </Link>
                            <Link to='/signup'>
                                <div className="cursor-pointer bg-blue-500 w-24 h-12 font-semibold text-white text-lg flex justify-center items-center">
                                    Signup
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>}
            {
                !isLargeScreen &&
                <div className="h-auto">
                    <div className=" h-[7vh] text-center flex justify-between items-center px-3 ">
                        <h2 className="text-2xl font-bold text-blue-500 shadow-inner">COURsiyA</h2>
                        <h2 onClick={handleOpen}>
                            <Hamburger />
                        </h2>
                    </div>
                    {open && <div className="flex justify-end flex-col " data-aos="fade-down" data-aos-duration="900">
                        <div className=" flex justify-end items-end  pr-3 " data-aos="fade-down" data-aos-duration="800">
                            <ul className="flex flex-col justify-evenly items-end w-1/2 h-full">
                                {navItems.map((item) => (
                                    <li className="text-sm font-semibold" key={item.name}>
                                        <Link to={item.to}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex  flex-col justify-end pr-3 items-end">
                            {item ? (
                                <div className="flex items-center  md:m-0">
                                    <Link to='/profile'> <button className=" px-1 bg-blue-600 rounded-sm mb-1 text-white font-semibold">Profile</button> </Link>
                                    {/* <button 
                            onClick={handleLogout} 
                            className="ml-4 cursor-pointer border-4 border-red-500 text-red-500 w-24 h-12 font-semibold text-lg flex justify-center items-center">
                            Logout
                        </button> */}
                                </div>
                            ) : (
                                <>
                                    <Link to='/login'>
                                        <div className="cursor-pointer border-4 border-blue-500 my-1 text-blue-500 w-16 h-7 flex justify-center items-center">
                                            Signin
                                        </div>
                                    </Link>
                                    <Link to='/signup'>
                                        <div className="cursor-pointer bg-blue-500 w-20 h-10 font-semibold my-1 text-white text-lg flex justify-center items-center">
                                            Signup
                                        </div>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>}
                </div>
            }
        </div>
    );
}
