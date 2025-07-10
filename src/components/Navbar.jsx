import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='relative z-0 bg-white'>
            <div className='h-[20vh] md:h-[11vh] w-[95vw] p-5 shadow-xl shadow-black/10 m-5 rounded-xl mx-auto'>
                <div className="content h-full flex items-center justify-between flex-col md:flex-row">
                    <div className="name flex items-center"><p className='bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-bold text-[1.5rem]'>Codemetric</p></div>
                    <div>
                        <ul className='flex gap-6 md:gap-18 font-semibold text-sky-700 text-[0.9rem] md:text-[1.1rem] h-full'>
                            <li className='hover:cursor-pointer h-full'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `transition-all duration-200 ease-in-out ${isActive
                                            ? 'bg-sky-100 p-3 rounded-xl text-blue-500 shadow-md'
                                            : 'hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl'
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='hover:cursor-pointer h-full'>
                                <NavLink
                                    to="/stats"
                                    className={({ isActive }) =>
                                        `transition-all duration-200 ease-in-out ${isActive
                                            ? 'bg-sky-100 p-3 rounded-xl text-blue-500 shadow-md'
                                            : 'hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl'
                                        }`
                                    }
                                >
                                    <span className="md:hidden">Stats</span>
                                    <span className="hidden md:inline">Check stats</span>
                                </NavLink>
                            </li>

                            <li className="hover:cursor-pointer h-full">
                                <a
                                    href="https://www.linkedin.com/in/shivayan-chakravarty-806702294/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-200 ease-in-out hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl"
                                >
                                    About
                                </a>
                            </li>
                            <li className='hover:cursor-pointer h-full'>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `transition-all duration-200 ease-in-out ${isActive
                                            ? 'bg-sky-100 p-3 rounded-xl text-blue-500 shadow-md'
                                            : 'hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl'
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
