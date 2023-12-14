'use client'

// pages/my-profile.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/authcontext/authContext';
import NavBar from '@/components/home/Navbar';

const Page = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is not authenticated, then redirect to the login page
    if (!isAuthenticated()) {
      router.push('/');
    }
    console.log('isAuthenticated:', isAuthenticated());
  }, [isAuthenticated, router]);

  return (
    <div>
      {isAuthenticated() ? (
        <div>
            <NavBar/>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
