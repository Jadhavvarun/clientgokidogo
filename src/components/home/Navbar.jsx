'use client'
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Login from '../Login/Login';
import { useAuth } from '@/authcontext/authContext';
import { FiUser } from 'react-icons/fi';

function NavBar() {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropdownVisibleMyprofile, setDropdownVisibleMyprofile] = useState(false);
    const dropdownRefProfile = useRef(null);
    const dropdownRefOther = useRef(null);
    const [iscityDropdownVisible, setcityDropdownVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English (EN)');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { isAuthenticated, getUserName, logout } = useAuth();

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const toggleProfileDropdown = () => {
        setDropdownVisibleMyprofile(!isDropdownVisibleMyprofile);
    }

    const citytoggleDropdown = () => {
        setcityDropdownVisible(!iscityDropdownVisible);

    }

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setDropdownVisible(false);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const closeCityDropdown = () => {
        setcityDropdownVisible(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    const openLoginModal = () => {
        setShowLoginModal(true);
        // Disable scrolling when the modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
        // Enable scrolling when the modal is closed
        document.body.style.overflow = 'auto';
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click occurred outside of the profile dropdown
            if (dropdownRefProfile.current && !dropdownRefProfile.current.contains(event.target)) {
                setDropdownVisibleMyprofile(false);
            }

            // Check if the click occurred outside of the other dropdown
            if (dropdownRefOther.current && !dropdownRefOther.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        // Add the click event listener to the document
        document.addEventListener('click', handleOutsideClick);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isDropdownVisible, isDropdownVisibleMyprofile]);


    return (
        <>

            <nav className={`z-10 border-white-200 justify-between sticky top-0 ${scrolling ? "bg-white" : "bg-transperent"}`}>
                <div className="w-auto flex flex-wrap items-center ml-18 px-32 py-2">
                    
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                       <li>
                     <Link href="/">  <img src="https://www.gokidogo.de/img/gokido/logo-sticky.svg" className="h-20 w-auto mr-4" alt="gokidogo Logo" /> </Link>
                       </li>
                       <div className='ml-10   flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                        <li
                            onMouseEnter={citytoggleDropdown}
                            onMouseLeave={closeCityDropdown}
                            className="relative group"
                        >
                            <a className="mt-6 block py-2 pl-3 pr-4 text-base text-white-500 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">
                                Stadt
                            </a>
                            {iscityDropdownVisible && (
                                <div className="absolute z-10 w-52 bg-white border rounded-md shadow-lg">
                                    <Link href="/bad-vilbel"
                                        className="block px-6 py-4 r text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                    >
                                        Bad Vilbe
                                    </Link>
                                    <Link href="/hanau"
                                        className="block px-6 py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                    >
                                        Hanau
                                    </Link>
                                    <Link href="/mainz"
                                        className="block px-6 py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                    >
                                        Mainz
                                    </Link>
                                    <Link href="/bad-nauheim"
                                        className="block px-6 py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                    >
                                        Bad Nauheim

                                    </Link>
                                    <Link href="/frankfurt-am-main"
                                        className="block px-6 py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                    >
                                        Frankfurt am Main
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link href='/restaurants' className="mt-6  block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700" >Unsere Partner</Link>
                        </li>
                        <li>
                            <Link href='/about-us' className="mt-6 block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">Über uns</Link>
                        </li>
                        <li>
                            <Link href='/gokido_tool-de' className="mt-6 block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">Partner*in werden</Link>
                        </li>
                        <li>
                            <Link href='/contact' className="mt-6 block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">Kontakt</Link>
                        </li>

                        <li className="hover:border-gray-900 justify-end mt-6">
                            <div className="block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="inline-flex items-center font-medium justify-center px-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700"
                                >
                                    {selectedLanguage}
                                </button>
                                {isDropdownVisible && (
                                    <div className="absolute z-10 w-52   bg-white border rounded-md shadow-lg" ref={dropdownRefOther}>
                                        <button
                                            className="block px-6 py-2 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                            onClick={() => selectLanguage('German (DE)')}
                                        >
                                            Select
                                        </button>
                                        <button
                                            className="block px-6 py-2 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                            onClick={() => selectLanguage('English (EN)')}
                                        >
                                            English (EN)
                                        </button>
                                        <button
                                            className="block px-6 py-2 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                            onClick={() => selectLanguage('German (DE)')}
                                        >
                                            German (DE)
                                        </button>
                                    </div>
                                )}
                            </div>
                        </li>
                        {isAuthenticated() ? (
                            <li className="hover:border-gray-900 justify-end mt-6">
                                <div
                                    onClick={toggleProfileDropdown}
                                    className="flex items-center cursor-pointer"
                                >
                                    <span className="mr-2 text-base  md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">
                                        {getUserName()}
                                    </span>
                                    <button
                                        type="button"
                                        className="mr-10 inline-flex items-center font-medium justify-center px-4 text-xl text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700"
                                    >
                                        <FiUser className="mr-2 text-xl text-white-500" />
                                    </button>
                                </div>
                                {isDropdownVisibleMyprofile && (
                                    <div className="absolute  z-10 w-52  bg-white border rounded-md shadow-lg"
                                        ref={dropdownRefProfile} >
                                        <Link href='/my-profile'
                                            className="block px-6  py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap">
                                            My Profile
                                        </Link>
                                        <button
                                            onClick={logout}
                                            className="block px-6 py-4 text-sm text-gray-800 hover:text-green-800 hover:bg-gray-100 whitespace-nowrap"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </li>
                        ) : (
                            // Render your login component or login button here
                            <li>
                                <a onClick={openLoginModal} className="mt-6 block py-2 pl-3 pr-4 text-base text-white-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:bg-transparent md:text-green-500 md:p-0 dark:text-green-700 md:dark:text-green-700">LOG IN</a>
                            </li>
                        )}
                    </div>
                    </ul>


                </div>
            </nav>
            <Login showLogin={showLoginModal} onClose={closeLoginModal} />
        </>
    );
}

export default NavBar;