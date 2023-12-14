//restaurantdetails.jsx

'use client'
import React, { useEffect, useState } from 'react'
import { BsFilterCircleFill } from "react-icons/bs";
import CardList from './Cardlist';
import { useRestaurantData } from '@/authcontext/RestaurantDataContext.js';


export default function Restaurantdetails() {
  const { restaurantData } = useRestaurantData();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('All'); // Initial state

  useEffect(() => {
    // No need for API call here since you already have restaurantData
    setIsLoading(false);
  }, [restaurantData]);

  const DeliveryIcon = () => (
    <img
      src="/delivery.png"
      alt="Bike"
      className="w-14 h-14 ml-8"
    />
  );

  return (
    <>
      <div className='bg-white px-4 '>
        <ul className='w-auto  flex border-gray-600 bg-white justify-center items-center h-20 flex-wrap '>
          <li className="flex items-center mr-4 w-auto ml-5">
            <input id="red-radio" type="radio" value="All" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={selectedOption === 'All'}
              onChange={() => setSelectedOption('All')} />
            <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-black-900 dark:text-black">All</label>
          </li>
          <li className="flex items-center mr-4">
            <input id="green-radio" type="radio" value="Delivery" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={selectedOption === 'Delivery'}
              onChange={() => setSelectedOption('Delivery')} />
            <label htmlFor="green-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">Delivery</label>
          </li>
          <li className="flex items-center mr-4">
            <input id="purple-radio" type="radio" value="Pickup" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={selectedOption === 'Pickup'}
              onChange={() => setSelectedOption('Pickup')} />
            <label htmlFor="purple-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">Pickup</label>
          </li>
          <li className="flex items-end justify-end">
            <BsFilterCircleFill size="30px" className="text-green-3" />
          </li>
        </ul>
      </div>
      <div className="px-14">
        <div className="bg-green-3 h-auto py-2  rounded-sm flex items-center justify-center text-center text-2xl">
          <span className="flex justify-center items-center">
          Wähle aus über 1.000 gesunden Speisen und lass sie dir in unseren Zero-Waste-Boxen liefern.
          </span>
          <DeliveryIcon />
        </div>
      </div>
      <div className='h-auto  bg-white flex grid-flow-col flex-col '>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 py-4 h-auto bg-white md:grid-cols-1 lg:grid-cols-1 gap-4 px-12">
            {console.log('restaurantData in CardList passdown:', restaurantData)}
            <CardList data={restaurantData} />
          </div>
        )}
      </div>
    </>



  )
}