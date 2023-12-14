'use client'

import { TfiEmail } from "react-icons/tfi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const ForgotPassword = ({ onClose }) => {
    const [showForgotPassword, setShowForgotPassword] = useState(true);

    const onClickClose = () => {
        setShowForgotPassword(false);
        onClose(); // Call the onClose callback from the parent component
        document.body.style.overflow = 'auto';
    };

    const handleResetPassword = () => {
        // Logic for handling the reset password action
        // You can add the necessary logic here
        // For example, sending a reset password email
    };
    return (
        <div>
            
            {showForgotPassword && (
                <div className="fixed inset-0 z-50  flex items-center justify-center ">
            <div className="bg-green-4 h-auto w-[700px] px-10 py-6 rounded-sm shadow-xl">
                <div className="flex items-center justify-between mb-4">
                <h1 className="text-black text-xl mb-4">Please confirm login email below</h1>
                <IoIosCloseCircle className="text-green-3 cursor-pointer w-10 h-10" onClick={onClickClose} />
                </div>
                <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white">
                    <span className="mr-2 bg-white rounded-md p-3">
                        <TfiEmail className="text-gray-400" />
                    </span>
                    <input type="email" placeholder="Email" className="w-full outline-none bg-white text-black" />
                </div>
                <p className="text-black text-xl py-6">You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                <button className="bg-green-3 font-semibold px-6 py-2 " onClick={handleResetPassword}>Reset Password</button>
            </div>
            </div>
            )}
        </div>
    );
};
export default ForgotPassword;