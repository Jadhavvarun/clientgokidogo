'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { push } = useRouter();


  const login = async (email, password, deviceId) => {
    try {
      // Replace with your actual API endpoint
      console.log('funtion called');
      const apiUrl = '/webapi/api.php/authcustomer';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usrid: email,
          passwd: password,
          deviceid: deviceId,
        }),
      });

      const data = await response.json();

      if (response.ok && data[0]?.LoginStatus[0]?.Status === 'Success') {
        sessionStorage.setItem('user', JSON.stringify(data[0]?.DataValue[0]));
        setUser(data[0]?.DataValue[0]);
        setError(null);
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  const getUserName = () => {
    // Retrieve user details from session storage and return the user's full name
    const storedUser = sessionStorage.getItem('user');
    const userData = storedUser ? JSON.parse(storedUser) : null;
  
    if (userData) {
      const { FirstName, LastName } = userData;
      // Concatenate first name and last name
      return `${LastName} ${FirstName|| ''}`;
    }
  
    return null;
  };

  const logout = () => {
    // Clear user details from session storage
    sessionStorage.removeItem('user');
  
    // Set the user state to null
    setUser(null);
    window.location.reload();

  
    // Redirect to the home page
    push('/');
  };

  const isAuthenticated = () => {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
      const storedUser = sessionStorage.getItem('user');
      return !!storedUser;
    }
    return false;
  };

  useEffect(() => {
      console.log('Is Authenticated on Mount:', isAuthenticated());

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated,getUserName, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
