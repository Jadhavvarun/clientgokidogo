'use client'
import React from 'react';
import { useRestaurantData } from '@/authcontext/RestaurantDataContext.js';


export default function Backdrop() {
  // Use records in your Backdrop component
  const { restaurantData } = useRestaurantData();
  console.log('Backdrop received Records:', restaurantData);
  const records = restaurantData && restaurantData.length > 0 ? restaurantData[0]?.Records : "Loading...";

  return (
    <div className="h-[400px] w-auto relative">
      <div className="bg-opacity-0 fixed top-0 left-0 right-0 bg-center bg-cover "></div>
      <div className="flex-col absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-center">
        <h2 className="text-5xl font-bold relative">
        {records} Partner
        </h2>
        <div className='py-12 px-2 items-center mt-4'>
        </div>
      </div>
      <br></br>
    </div>
  );
}
