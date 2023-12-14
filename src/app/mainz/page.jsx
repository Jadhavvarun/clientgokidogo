'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '@/components/home/Navbar';
import MainzBackdrop from '@/components/mainz/MainzBackdrop';
import MainzRestaurant from '@/components/mainz/MainzRestaurant';
import Footer from '@/components/home/Footer';

export default function Page() {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('/webapi/api.php/userhome', {
      method: 'POST',
      body: JSON.stringify({
        deviceId: '',
        location: '',
        zipcode: '',
        user: '',
        email: '',
        latitude: '',
        longitude: '',
        country: ''
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'same-origin',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received data:', data);
  
        // Check if 'Restaurants' is defined in the API response
        const restaurants = data?.[0]?.Restaurants || [];
  
        // Specify the ZIP code to filter
        const targetZipcode ='55116';
  
        // Filter restaurants based on the specified ZIP code
        const filteredRestaurants = restaurants.filter(
          (restaurant) => restaurant.zipcode.trim().toLowerCase() === targetZipcode
        );
  
        console.log('Filtered data:', filteredRestaurants);
  
        // Set the filtered data directly to the restaurantData state
        setRestaurantData(filteredRestaurants);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
     


  return (
    <div className="flex flex-col bg-white">
      <div
        className="relative flex-1 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://www.gokidogo.de/img/gokido/headerrestaurant.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <NavBar />
        <MainzBackdrop filteredData={restaurantData} />
      </div>
      <div className='bg-white flex-1 '>
        <MainzRestaurant filteredData={restaurantData} />
      </div>
      <Footer />
    </div>
  );
}