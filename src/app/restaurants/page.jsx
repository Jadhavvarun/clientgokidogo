'use client' 

import React, { useState, useEffect } from 'react';
import NavBar from '@/components/home/Navbar';
import Backdrop from '../../components/restaurants/allrestaurantdetails/Backdrop';
import Restaurantdetails from '../../components/restaurants/allrestaurantdetails/Restaurantdetails';
import Footer from '@/components/home/Footer';
export default function Page() {
 

  return (
    <div className="flex flex-col h-auto bg-white">
      <div className="relative flex-1 bg-center bg-cover h-auto"
        style={{
          backgroundImage: "url('https://www.gokidogo.de/img/gokido/headerrestaurant.jpg')",
        }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <NavBar />
        <Backdrop  />
      </div>
      <div className='bg-white flex-1 '>
        <Restaurantdetails />
      </div>
      <Footer />
    </div>
  );
}
