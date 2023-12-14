"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const RestaurantDataContext = createContext();

export const RestaurantDataProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRestaurantData = async () => {
    try {
      const apiUrl = '/webapi/api.php/userhome';
      const requestBody = {
        deviceId: "",
        location: " ",
        zipcode: "",
        user: "",
        email: "",
        latitude: "",
        longitude: "",
        country: ""
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        setRestaurantData(data);
        setIsLoading(false);
      } else {
        console.error('Error fetching restaurant data:', data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching restaurant data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch restaurant data on component mount
    fetchRestaurantData();
  }, []);

  return (
    <RestaurantDataContext.Provider value={{ restaurantData, isLoading }}>
      {children}
    </RestaurantDataContext.Provider>
  );
};

export const useRestaurantData = () => {
  return useContext(RestaurantDataContext);
};
