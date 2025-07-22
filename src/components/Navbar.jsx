import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import bars_logo from '../assets/bars_icon_black.png'

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    function handleDropdown() {
        setDropDown(!dropDown);
    }
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='fixed z-50 bg-white w-full'>
            <div className='h-[10vh] md:h-[11vh] w-[95vw] p-5 shadow-xl shadow-black/10 rounded-xl mx-auto'>
                <div className="content h-full flex items-center justify-between flex-row">
                    <div className="name flex items-center"><p className='bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent font-bold text-[1rem] md:text-[1.5rem]'>Codemetric</p></div>
                    <div>
                        {isMobile ?
                        <div>
                            <img src={bars_logo} alt="" className='h-10 opacity-50' onClick={handleDropdown}/>
                        </div> : 
                        <ul className='flex flex-wrap justify-center items-center md:gap-18 font-semibold text-sky-700 text-[0.9rem] md:text-[1.1rem] h-full'>
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
                            <li className='hover:cursor-pointer h-full'>
                                <NavLink
                                    to="/ai"
                                    className={({ isActive }) =>
                                        `transition-all duration-200 ease-in-out ${isActive
                                            ? 'bg-sky-100 p-3 rounded-xl text-blue-500 shadow-md'
                                            : 'hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl'
                                        }`
                                    }
                                >
                                    Ask CodeBot
                                </NavLink>
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
                        </ul>}
                    </div>
                </div>
            </div>
            {isMobile && (
        <div
          className={`relative z-50 bg-transparent overflow-hidden transition-all duration-500 ease-in-out w-[95vw] mx-auto rounded-2xl mt-3 border border-cyan-400
      ${dropDown ? "opacity-100 scale-100 py-3 max-h-96" : "opacity-0 scale-95 py-0 h-0 pointer-events-none"}`}
        >
          <ul className='flex flex-col justify-center items-center gap-5 font-semibold text-sky-700 text-[0.9rem] md:text-[1.1rem] h-full'>
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
                            <li className='hover:cursor-pointer h-full'>
                                <NavLink
                                    to="/ai"
                                    className={({ isActive }) =>
                                        `transition-all duration-200 ease-in-out ${isActive
                                            ? 'bg-sky-100 p-3 rounded-xl text-blue-500 shadow-md'
                                            : 'hover:bg-sky-50 hover:text-blue-400 p-3 rounded-xl'
                                        }`
                                    }
                                >
                                    Ask CodeBot
                                </NavLink>
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
      )}
        </div>
    )
}

export default Navbar
