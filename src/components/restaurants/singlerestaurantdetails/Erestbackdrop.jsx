'use client'
import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';

export default function Erestbackdrop({ restaurantData }) {


  return (
    <div className="h-[400px] w-auto relative">
      <div className="bg-opacity-0  fixed  top-0 left-0 right-0   "></div>
      <div className="  flex-col absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-center">
        <h2 className="text-5xl  font-bold relative">
        {restaurantData ? restaurantData.name : "Loading..."}         </h2>
        <h1 clasName="text-2xl p-6 bg-black font-bold relative">
        {restaurantData ? restaurantData.address: "Loading..."} 
        </h1>
        <h1 className="flex"> <FaLock className="mr-1"/> Min. {restaurantData ? restaurantData.minimumdeliveryamount: "Loading..."}€</h1>
        <h1 className="flex">{restaurantData ? restaurantData.cuisine: "Loading..."}</h1>
      </div>
      <br>
      </br>
     
      
    </div>
  );
}
