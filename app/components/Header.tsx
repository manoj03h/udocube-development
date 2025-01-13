'use client'
import React, { useState } from 'react';
import Image from "next/image";
import styles from './Hero.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation list items
    const navListItems = [
        { link: "/", name: "Home" },
        { link: "/services", name: "OUR SERVICES" },
        { link: "/blog", name: "BLOG" },
        { link: "/portfolio", name: "PORTFOLIO" },
        { link: "/about", name: "ABOUT US" },
        { link: "/contact", name: "CONTACT US" }
    ];

    // Social icons
    const socialIcons = [
        { name: 'Facebook', link: 'https://www.facebook.com/ufocube', icon: <FaFacebook size={36} className='md:h-6 md:w-6'/> },
        { name: 'Instagram', link: 'https://www.instagram.com/ufocube03', icon: <FaInstagram size={36} className='md:h-6 md:w-6' /> },
        { name: 'YouTube', link: 'https://www.youtube.com/@ufocube3', icon: <FaYoutube size={36} className='md:h-6 md:w-6' /> },
        { name: 'Twitter', link: 'https://x.com/ufocube03', icon: <FaTwitter size={36} className='md:h-6 md:w-6' /> },
        { name: 'LinkedIn', link: 'https://x.com/ufocube03', icon: <FaLinkedin size={36} className='md:h-6 md:w-6' /> }
    ];

    // Handle menu toggle
    const handleMenuOpen = () => {
        setIsMenuOpen(prev => !prev); // Toggle the menu state
    };

    // Navbar contents component
    const NavbarContents = () => {
        const listItems = navListItems.map((item, index) => (
            <li key={index} className='flex flex-col justify-center items-center px-1 h-full w-full md:w-auto lg:px-2 xl:px-4 hover:bg-green-600'>
                <a className='w-full py-4 md:px-2 lg:py-4 text-center' href={item.link}>
                    {item.name}
                </a>
            </li>
        ));
        return (    
            <ul className='flex flex-col justify-center items-center gap-1 px-0 bg-white text-red-600 md:flex-row md:justify-center md:items-center md:h-full md:text-white md:bg-transparent md:gap-0'>
                {listItems}
            </ul>
        );
    };

    // Social media contents component
    const SocialContents: React.FC = () => {
        const socialLinkItems = socialIcons.map((item, index) => (
            <li key={index} className='hidden lg:flex items-center'>
                <Link href={item.link}>
                    {item.icon}
                </Link>
            </li>
        ));
        return (
            <ul className='hidden md:flex items-center md:gap-3 lg:gap-4'>
                {socialLinkItems}
            </ul>
        );
    };

    return (
        <main>
            <section className={`${styles.heroSection}`}>
                <div className='relative z-40 flex gap-8 h-[86px] w-full px-10 items-center justify-between '>
                    <Link href='/' className="relative z-40 object-contain">
                        <Image
                            className="object-contain max-w-[150px]"
                            src="/images/logo.png"
                            alt="UFOCube logo"
                            width={240}
                            height={38}
                            priority
                        />
                    </Link>
                    <div className=' absolute top-0 left-0 right-0 bottom-0 z-30'></div>
                    {/* Adjusted NavbarContents positioning and z-index */}
                    <div className={`absolute top-full left-0 z-10 w-full pb-10 transform transition-all duration-300 ease-in-out opacity-0 ${!isMenuOpen ? '-translate-y-full opacity-0 md:opacity-100 md:translate-y-0' : 'translate-y-0 opacity-100'} md:relative md:top-0 md:z-40 md:items-center md:h-full md:w-auto md:pb-0 md:text-xs md:px-1 xl:px-8 xl:text-[0.9rem]`}>
                        <NavbarContents />
                    </div>

                    {/* Social links */}

                    <div className='relative z-40 hidden lg:block'>
                        <SocialContents />
                    </div>

                    {/* Menu button */}
                    <div className='block relative z-40 cursor-pointer md:hidden' onClick={handleMenuOpen}>
                        <div className='w-12 h-12'>
                            <span className={`w-[28px] h-[3px] bg-white rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-10px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-[0px]" : ""}`}></span>
                            <span className={`w-[28px] h-[3px] bg-white rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0px] transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
                            <span className={`w-[28px] h-[3px] bg-white rounded-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[10px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 translate-y-[-0px]" : ""}`}></span>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col justify-start mt-20 px-14 pb-40">
                    <p className='text-2xl font-bold'>We</p>
                    <p className='text-5xl font-bold mb-2'>Grow your</p>
                    <p className='text-5xl font-black mb-4 text-yellow-400'>BUSINESS </p>
                    <p className='text-lg font-thin mb-10'>by bringing your Business<br />
                        Online </p>
                    <Link
                        className='px-8 py-2 rounded-[30px] w-48 bg-white text-black font-semibold text-lg text-center'
                        href="/"
                    >Know More</Link>
                </div>
            </section>
        </main>
    );
};

export default Header;
