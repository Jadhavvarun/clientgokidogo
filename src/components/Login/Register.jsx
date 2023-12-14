'use client'
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
    const titleStyle = {
        background: 'linear-gradient(to right, #bee25a, #357135)',
        transition: 'background 0.7s',
    };
    const salutation = [
        'Frau',
        'Herr',
    ];

    const [selectedSalutation, setSelectedSalutation] = useState('Frau');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSalutationChange = (selectedTitle) => {
        setSelectedSalutation(selectedTitle);

        // Update the formData state
        setFormData({ ...formData, title: selectedTitle });

        setShowDropdown(false);
    };


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Update the formData state
        setFormData({ ...formData, passwd: newPassword });

        setPasswordMatchError(false); // Reset error when password changes
    };


    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatchError(false); // Reset error when confirm password changes
    };

    const router = useRouter();


 


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return; // Stop form submission
        }
    
        // Update the formData state with the correct title
        setFormData({ ...formData, title: selectedSalutation });
    
        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
    
        try {
            // Get email from localStorage
            const storedFormData = JSON.parse(localStorage.getItem('formData'));
            const email = storedFormData ? storedFormData.email : '';
    
            // Send a request to the API using fetch
            const response = await fetch('/webapi/api.php/sendotpemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    deviceId: ' ',
                    email: email,
                }),
            });
    
            // Handle successful response, e.g., check response status or data
            if (!response.ok) {
                // Handle non-successful response (status not in the range 200-299)
                throw new Error(`Failed to send OTP email. Status: ${response.status}`);
            }
    
            // Redirect to /otp page
            router.push('/otp');
        } catch (error) {
            // Handle error, e.g., log it or display an error message
            console.error('Error sending OTP email:', error);
        }
    };
    

    const [formData, setFormData] = useState({
        title: '',
        firstname: '',
        lastname: '',
        gender: null,
        mobile: '',
        email: '',
        terms: 0,
        newsl: 0,
        passwd: '',
        ipadd: null,
        smssub: null,
        emailOTPVerified: null,
    });


    return (
        <div>
            <div className="h-screen bg-white flex">
                <div className="md:w-1/3 w-full overflow-auto">
                    <Image src="/g_logo.svg" alt="logo" width={250} height={100} priority className="py-8 items-center flex justify-center mx-auto" />
                    <div className="px-10">
                        <hr />
                    </div>
                    <form className="flex flex-col px-10 py-10" onSubmit={handleSubmit}>
                        <h2 className="text-base text-black-1 font-medium">Anrede</h2>
                        <div className="mb-4 mt-1 relative">
                            <div className="border border-gray-300 rounded-md p-2 w-full text-black-1 focus:outline-none cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                                {selectedSalutation || 'Frau'}
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <RiArrowDropDownLine className="h-6 w-10" />
                                </span>
                            </div>
                            {showDropdown && (
                                <div className="absolute top-full left-0 w-full mt-1 bg-white text-black-1 border border-gray-300 shadow-lg rounded-b-md z-10">
                                    {salutation.map((salutation, index) => (
                                        <div
                                            key={index}
                                            className="p-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSalutationChange(salutation)}
                                        >
                                            {salutation}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <h2 className="text-base text-black-1 font-medium">Vorname</h2>
                        <input type="text" placeholder="Vorname" className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1" value={formData.firstname}
                            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} required />
                        <h2 className="text-base text-black-1 font-medium">Nachname</h2>
                        <input type="text" placeholder="Familien Name" className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1" value={formData.lastname}
                            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                            required />
                        <h2 className="text-base text-black-1 font-medium">eMail</h2>
                        <input type="email" placeholder="eMail z.B.:muster@domain.de" className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        <h2 className="text-base text-black-1 font-medium">Mobile</h2>
                        <input type="tel" placeholder="Mobile Nummer" className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1" value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
                        <h2 className="text-base text-black-1 font-medium">Passwort</h2>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Passwort"
                                value={password}
                                onChange={handlePasswordChange}
                                className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1 w-full"
                                required
                            />
                            <span
                                className="absolute top-6 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <MdOutlineVisibility className="text-green-3" size={25} /> : <MdOutlineVisibilityOff className="text-green-3" size={25} />}
                            </span>
                        </div>
                        <h2 className="text-base text-black-1 font-medium">Passwort bestätigen</h2>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Passwort bestätigen"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="border border-gray-300 rounded-md p-2 text-black focus:outline-none mb-4 mt-1 w-full"
                                required
                            />
                            {passwordMatchError && (
                                <p className="text-red-500 text-sm mb-2">Die Passwörter stimmen nicht überein.</p>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                        </div>
                        <div className="text-center">
                            <label htmlFor="terms&condition" className="text-black-1 font-semibold block mb-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="terms&condition"
                                    className="mr-2 bg-white h-4 w-4"
                                    onChange={() => setFormData({ ...formData, terms: formData.terms === 1 ? 0 : 1 })}
                                    required
                                />
                                <Link href="/termsandconditions" className="text-green-3 hover:text-black-1">Geschäftsbedingung</Link> akzeptieren
                            </label>

                            <label htmlFor="subscribetonewsletter" className="text-black-1 font-semibold cursor-pointer block mb-6">
                                <input
                                    type="checkbox"
                                    id="subscribetonewsletter"
                                    className="mr-2 bg-white h-4 w-4"
                                    onChange={() => setFormData({ ...formData, newsl: formData.newsl === 1 ? 0 : 1 })}
                                />
                                Newsletter abonnieren
                            </label>

                        </div>

                        <button className="text-white font-semibold py-2 px-4 rounded-sm" style={titleStyle}>
                            Account erstellen
                        </button>
                        <p className="text-black-1 text-center py-2">
                            Already have an account?{" "}
                            <Link href="/signin" className="hover:text-green-3 font-semibold">
                                Sign In
                            </Link>
                        </p>
                        <p className="text-gray-500 text-center">© Go Kidogo 2023</p>
                    </form>
                </div>
                <div className="md:w-2/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/register_bg.jpg)' }}>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;