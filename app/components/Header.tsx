'use client'
import React, { useState, useEffect,  useRef } from 'react';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsNavVisible(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdownIndex(null);
    };

    const toggleDropdown = (idx: any) => {
        setActiveDropdownIndex((prev) => (prev === idx ? null : idx));
    };

    const navItems = [
        { name: "Home", path: "/" },
        {
            name: "OUR SERVICES",
            subItems: [
                { name: "Digital Marketing", path: "/ourServices/digitalMarketing" },
                { name: "Web Designing", path: "/ourServices/webDesigning" },
                { name: "Web Development", path: "/ourServices/webDevelopment" },
                { name: "App Development", path: "/ourServices/appDevelopment" },
                { name: "Graphics Designing", path: "/ourServices/graphicsDesigning" },
                { name: "Video Editing", path: "/ourServices/videoEditing" }
            ]
        },
        { name: "BLOG", path: "/blog" },
        { name: "PORTFOLIO", path: "/portfolio" },
        { name: "ABOUT US", path: "/about" },
        { name: "CONTACT US", path: "/contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full h-16 lg:h-[85px] z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-4 md:px-8 lg:h-20 text-[13px]">
                <div className="flex items-center md:pt-2">
                    <img src="./images/logo.png" alt="UFOcube Logo" className="w-[150px] md:w-[200px]" />
                </div>

                {/* Desktop Nav */}
                <nav
                    className={`${isNavVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        } hidden lg:flex gap-6 text-white font-semibold h-16 mr-4 relative transform transition-all duration-700 ease-out`}
                >
                    {navItems.map((item, idx) => (
                        <div key={idx} className="relative flex items-center px-4 h-full cursor-pointer group">
                            {item.subItems ? (
                                <span className="z-10 lg:text-[12px]">{item.name}</span>
                            ) : (
                                <Link
                                    href={item.path}
                                    // className={ `z-10 lg:text-[12px] px-2 py-1 ${pathname === item.path ? 'bg-green-800 text-white rounded-md' : ''}`}
                                    className={`z-10 lg:text-[12px] px-2 py-1 ${pathname === item.path ? 'bg-green-800 text-white rounded-md' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                            <div className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                            {/* Dropdown */}
                            {item.subItems && (
                                <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg z-50 w-[300px] transform transition-all duration-300 ease-in-out origin-top scale-y-0 opacity-0 max-h-0 overflow-hidden group-hover:scale-y-100 group-hover:opacity-100 group-hover:max-h-screen">
                                    {item.subItems.map((subItem, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            href={subItem.path}
                                            className={
                                                `block px-4 py-2 text-slate-800 hover:bg-slate-800 hover:text-white ${pathname === item.path ? 'bg-green-700 text-white' : ''}`
                                            }
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Social Icons */}
                <div className="hidden lg:flex gap-4 text-[27px] text-black">
                    <a href="https://www.facebook.com/ufocube" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.instagram.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.youtube.com/@ufocube3" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="bg-slate-300 hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                </div>


                {/* Mobile Toggle */}
                <div className={`lg:hidden p-2 rounded-md transition-all duration-300 ${isMobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
                    <div
                        className={`text-white text-3xl cursor-pointer transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Menu */}
            <div
                className={`lg:hidden bg-black text-white px-6 py-6 space-y-4 transition-all duration-300 ease-in-out origin-top
                ${isMobileMenuOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-95 max-h-0 overflow-hidden'}
                `}
            >
                {navItems.map((item, idx) => (
                    <div key={idx} className="relative">
                        <div
                            className="hover:bg-green-800 cursor-pointer border-b border-gray-700 pb-2 rounded-md p-1 flex justify-between items-center"
                            onClick={() => {
                                if (item.subItems) {
                                    toggleDropdown(idx);
                                } else {
                                    closeMenu();
                                }
                            }}
                        >
                            {item.subItems ? (
                                <span>{item.name}</span>
                            ) : (
                                <Link
                                    href={item.path || "#"}
                                    onClick={() => {
                                        if (item.subItems) {
                                            toggleDropdown(idx);
                                        } else {
                                            closeMenu();
                                        }
                                    }}
                                    className={
                                        `flex justify-between items-center w-full ${pathname === item.path ? 'bg-green-700 text-white px-2 py-1 rounded-md' : ''}`
                                    }
                                >
                                    {item.name}
                                    {item.subItems && (
                                        <span className="ml-auto">{activeDropdownIndex === idx ? "▲" : "▼"}</span>
                                    )}
                                </Link>

                            )}
                            {item.subItems && (
                                <span className="ml-auto">{activeDropdownIndex === idx ? "▲" : "▼"}</span>
                            )}
                        </div>

                        {/* Mobile Dropdown */}
                        {item.subItems && (
                            <div className={`w-full bg-white text-black rounded-md mt-1 overflow-hidden shadow-md transform transition-all duration-300 ease-in-out origin-top
                                ${activeDropdownIndex === idx ? "scale-y-100 opacity-100 max-h-[500px]" : "scale-y-95 opacity-0 max-h-0"}
                            `}>
                                {item.subItems.map((subItem, subIdx) => (
                                    <Link
                                        key={subIdx}
                                        href={subItem.path}
                                        onClick={closeMenu}
                                        className={
                                            `block px-4 py-3 text-slate-800 hover:bg-slate-800 hover:text-white border-b border-gray-200 cursor-pointer ${pathname === item.path ? 'bg-green-700 text-white' : ''}`
                                        }
                                    >
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex justify-center gap-4 pt-4 text-[22px]">
                    <a href="https://www.facebook.com/ufocube" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.instagram.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://www.youtube.com/@ufocube3" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                    <a href="https://x.com/ufocube03" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="bg-slate-300 text-black hover:cursor-pointer hover:bg-green-600 p-1 rounded-full transition-all" />
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Header;
