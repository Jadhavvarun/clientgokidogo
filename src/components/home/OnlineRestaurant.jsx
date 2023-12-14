'use client'

// onlineRestaurant.js
import React, { useEffect } from 'react';
import { useRestaurantData } from '@/authcontext/RestaurantDataContext.js';
import Card from './Onlinecard'; // Update the path
import { parse, isWithinInterval,parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz'; // Import the required functions
import { addMinutes } from 'date-fns';




const OnlineRestaurant = () => {
  const { restaurantData, isLoading, fetchRestaurantData } = useRestaurantData();

  useEffect(() => {
    // Fetch data on the client side if not already fetched
    if (restaurantData.length === 0 && !isLoading) {
      fetchRestaurantData();
    }
  }, [fetchRestaurantData, isLoading, restaurantData]);

// Function to check if the current time is within the opening and closing hours of a restaurant
const isRestaurantOpen = (restaurant, timezone) => {
  try {
    const currentTime = new Date();
    const zonedCurrentTime = utcToZonedTime(currentTime, timezone);

    const firstOrderTime = parse(restaurant.FirstOrder, 'HH:mm:ss', new Date());
    const lastOrderTime = parse(restaurant.LastOrder, 'HH:mm:ss', new Date());

    const zonedFirstOrderTime = utcToZonedTime(firstOrderTime, timezone);
    const zonedLastOrderTime = utcToZonedTime(lastOrderTime, timezone);

    // Add a buffer of a few minutes to account for any delay
    const bufferedZonedLastOrderTime = addMinutes(zonedLastOrderTime, 5);

    const interval = { start: zonedFirstOrderTime, end: bufferedZonedLastOrderTime };
    const isOpen = isWithinInterval(zonedCurrentTime, interval);

    if (!isOpen) {
      console.log('Restaurant not shown:', restaurant);
    }

    return isOpen;
  } catch (error) {
    // Handle or log the error as needed
    console.error('Error in isRestaurantOpen:', error);
    return false; // Assume the restaurant is not open in case of an error
  }
};

// Filter online restaurants based on opening and closing hours
const onlineRestaurants = restaurantData.length > 0
  ? restaurantData[0].Restaurants.filter((restaurant) => isRestaurantOpen(restaurant, 'Europe/Berlin'))
  : [];

console.log('Online Restaurants:', onlineRestaurants);



  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white grid grid-cols-2">
          {onlineRestaurants.map((restaurant) => (
            <Card
              key={restaurant.restroid}
              name={restaurant.name}
              address={restaurant.address}
              cuisine={restaurant.cuisine}
              image={restaurant.image}
              restroid={restaurant.restroid}
              isActive={restaurant.Online}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OnlineRestaurant;
