'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/home/Navbar';
import Ebackdrop from '../../../components/restaurants/singlerestaurantdetails/Erestbackdrop'
import Details from '../../../components/restaurants/singlerestaurantdetails/Details';
import Footer from '@/components/home/Footer';

export default function Page({params : { restroid }}) {

  const [restaurantData, setRestaurantData] = useState(null);
  const [menuData, setMenuData] = useState(null);

//fetching Image from API && also send the api data in Ebackdrop componenent
  useEffect(() => {
    if (!restroid) {
      console.error('Missing restroid parameter in the URL.');
      return;
    }
  
    // Define the request body for both restaurant details and menu data
    const requestBody = {
      deviceId: '',
      ipadd: '',
      latitude: '',
      longitude: '',
      restid: restroid,
      restname: '',
      user: '',
    };
  
    // Make an HTTP POST request to fetch both restaurant details and menu data
    fetch('/webapi/api.php/restaurentdetail', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          // Access the first item in the array
          const firstItem = data[0];
      
          // Access restaurant details
          const restaurantDetails = firstItem.Restaurant_Detail[0];
          
          // Access menu data
          const menuData = firstItem.MenuItem;
          console.log('Restaurant Details:', restaurantDetails);
          console.log('Menu Data:', menuData);
      
          setRestaurantData(restaurantDetails);
          setMenuData(menuData); // Set the entire menu data
        } else {
          console.error('Invalid data structure in the response.');
        }
        console.log('API Response Data:', data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [restroid]);
  

  function isValidImageUrl(url) {
    const img = new Image();
    img.src = url;
    return img.complete && img.naturalWidth !== 0;
  }



  return (
    <>
    <div className="relative w-screen bg-center bg-cover" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
        restaurantData && restaurantData.image && isValidImageUrl(restaurantData.image)
          ? `"${restaurantData.image}"` // Surround the URL with double quotes
          : 'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=996&t=st=1699342388~exp=1699342988~hmac=82bb7d553c054293cd7e6bd751bdc838ca319384149dc10c5dc6086ca87ba399' // Replace with your own default image URL
      })`
    }}>
      <NavBar/>
      <Ebackdrop restaurantData={restaurantData} />
    </div>
    <div className='w-screen'>
      <Details />
    </div>
    <Footer/>
  </>
  
  )
}
