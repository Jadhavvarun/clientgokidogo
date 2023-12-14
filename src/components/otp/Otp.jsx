'use client'

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Otp() {

 const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const router = useRouter();

    const handleVerifyCode = async () => {
        try {
          const storedFormData = JSON.parse(localStorage.getItem('formData'));
          const email = storedFormData ? storedFormData.email : '';
          // Make API call to verify OTP
          const response = await fetch('https://app.gokidogo.com/webapi/api.php/verifyotpemail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              deviceId: '', // Provide the deviceId as needed
              email:email, // Replace with the actual email from localStorage
              otp: otp,
            }),
          });
      
          // Check if the OTP verification was successful
          if (response.ok) {
            const result = await response.json();
            // Check the status in the response
            if (result.status === 'Success') {
              // OTP verification successful
              setVerificationStatus('success');
      
              // Update emailOTPVerified in localStorage only when OTP verification is successful
              const formData = JSON.parse(localStorage.getItem('formData'));
              formData.emailOTPVerified = 1;
              localStorage.setItem('formData', JSON.stringify(formData));
      
              // Retrieve "terms" and "newsl" from localStorage
      
              // Trigger the customersignup API with data from localStorage
              const signupResponse = await fetch('https://app.gokidogo.com/webapi/api.php/customersignup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  title: formData.title,
                  firstname: formData.firstname,
                  lastname: formData.lastname,
                  gender: formData.gender,
                  mobile: formData.mobile,
                  email: formData.email,
                  terms: formData.terms, // Include "terms" from localStorage
                  newsl: formData.newsl, // Include "newsl" from localStorage
                  passwd: formData.passwd,
                  ipadd: formData.ipadd,
                  smssub: formData.smssub,
                  emailOTPVerified: formData.emailOTPVerified,
                }),
              });
      
              if (signupResponse.ok) {
                console.log('Customer signup successful');
                localStorage.removeItem('formData');
                router.push('/');
                windows.alert('User succesfully registered');

              } else {
                console.error('Failed to sign up customer');
              }
            } else {
              // OTP verification failed
              setVerificationStatus('error');
            }
          } else {
            // Handle API errors
            console.error('Failed to verify OTP');
          }
        } catch (error) {
          // Handle network errors
          console.error('Network error:', error.message);
        }
      };
      
  return (
      <div className="flex flex-col items-center justify-center   ">
        <div className='mb-2'>
       <img src="https://www.gokidogo.de/img/gokido/logo-sticky.svg" className="h-32 w-auto mr-4" alt="gokidogo Logo" />
        </div>
        <h1 className="text-3xl text-black font-bold mb-4">Enter Verification Code</h1>
        <input className="w-64 h-10 border text-black border-gray-600 px-4 rounded " type='text' placeholder='Enter Otp'          onChange={(e) => setOtp(e.target.value)}
 />
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleVerifyCode}
>
          Verify Code
        </button>
    </div>
  )
}
