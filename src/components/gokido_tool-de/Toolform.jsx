'use client'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Toolform = () => {
    const titleStyle = {
        background: 'linear-gradient(to right, #bee25a, #357135)',
        transition: 'background 0.7s',
    };

    const countries = [
        'Africa',
        'Germany',
        'France',
        'United States',
        // Add more countries to the list
    ];

    const [selectedCountry, setSelectedCountry] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setShowDropdown(false);
    };

    return (
        <div className="bg-white shadow-xl rounded-md p-5 md:p-10">
            <h1 className="text-black text-center font-semibold text-2xl py-8">Bitte füllen Sie das Formular aus</h1>
            <div className="h-auto flex items-center justify-center">
                <div className="bg-white p-8 w-[550px] shadow-xl rounded-md">
                    <div className="mb-4">
                        <h2 className="text-black font-semibold mb-4">Persönliche Informationen</h2>
                        <input type="text" placeholder="Vor- und Nachname" className="border border-gray-300 text-black rounded-md p-2 w-full mb-4 focus:outline-none" required />
                        <input type="email" placeholder="E-Mail Adresse" className="border border-gray-300 rounded-md p-2 w-full mb-8 text-black focus:outline-none" required />
                    </div>
                    <div className="mb-4">
                        <h2 className="text-black font-semibold mb-4">Restaurant Informationen</h2>
                        <input type="text" placeholder="Name des Restaurants" className="border border-gray-300 rounded-md p-2 w-full mb-4 text-black focus:outline-none" required />
                        <input type="text" placeholder="Adresse" className="border border-gray-300 rounded-md p-2 w-full mb-4 text-black focus:outline-none" required />
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <input type="text" placeholder="Stadt" className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none" required />
                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-8 relative">
                                <div className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                                    {selectedCountry || 'Africa'}
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <RiArrowDropDownLine className="h-6 w-10" />
                                    </span>
                                </div>
                                {showDropdown && (
                                    <div className="absolute top-full left-0 w-full mt-1 bg-white text-black border border-gray-300 shadow-lg rounded-b-md z-10">
                                        {countries.map((country, index) => (
                                            <div
                                                key={index}
                                                className="p-2 cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleCountryChange(country)}
                                            >
                                                {country}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-black font-semibold mb-4">Ich bin kein Roboter</h2>
                        <input type="text" placeholder="Human verify: 3 + 1 =?" className="border border-gray-300 rounded-md p-2 w-full text-black focus:outline-none" required />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full" style={titleStyle}>
                        Teilnehmen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toolform;