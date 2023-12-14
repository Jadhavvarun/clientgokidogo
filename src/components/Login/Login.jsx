'use client'
import React, { useState } from 'react';
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { IoIosCloseCircle } from "react-icons/io";
import ForgotPassword from "./ForgotPassword";
import { useAuth } from '@/authcontext/authContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = ({ showLogin, onClose }) => {
  const { login, user, error } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const router = useRouter();

  const handleForgotPasswordClick = () => {
    onClose(); // Close the Login modal using the onClose callback from Navbar
    setShowForgotPassword(true);
    document.body.style.overflow = 'hidden';
  };


  const handleLogin = async (event) => {
    try {
      event.preventDefault();
  
      // Call the login function from useAuth
      await login(email, password, 'testdevice');
  
      // Log the user details on successful login
      console.log('Authentication Details:', user);
  
  
      // Redirect to /my-profile or any other route
      router.push('/my-profile');
    } catch (error) {
      // Log the error on login failure
      console.error('Login failed:', error);
    }
  };
  

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
    <>
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-[450px] rounded-sm shadow-xl p-10 bg-green-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-black text-2xl font-semibold">Log in</h1>
              <IoIosCloseCircle className="text-green-3 cursor-pointer w-10 h-10" onClick={onClose} />
            </div>
            <form className="flex flex-col gap-4">
              <h2 className="text-lg text-black font-semibold" >Email</h2>
              <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white">
                <span className="mr-2 bg-white rounded-md p-3">
                  <TfiEmail className="text-gray-400" />
                </span>
                <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full outline-none bg-white text-black"
    />              </div>
              <h2 className="text-lg text-black font-semibold">Password</h2>
              <div className="flex items-center border border-gray-300 rounded-md p-1 bg-white">
                <span className="mr-2 bg-white rounded-md p-3">
                  <TfiLock className="text-gray-400" />
                </span>
                <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full outline-none bg-white text-black"
    />              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="remember" className="text-gray-400">
                  <input type="checkbox" id="remember" className="mr-2 bg-white h-4 w-4" />
                  Remember me
                </label>
                <button type="button" className="text-gray-400" onClick={handleForgotPasswordClick}>
                  Forgot password?
                </button>
              </div>
              <button className="bg-green-3 text-white font-semibold py-2 rounded-sm" onClick={handleLogin} >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-black">
              Don&rsquo;t have an account? <Link href='/register' className="text-green-3 hover:text-black">Sign up</Link>
            </p>
          </div>
        </div>
      )}

      {showForgotPassword && (
        <ForgotPassword onClose={() => setShowForgotPassword(false)}   />
      )}
    </>
  );
};

export default Login;
