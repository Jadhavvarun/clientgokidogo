'use client'

import { useRouter, useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Addtocart from './Billingcart';
import BillingCart from './Billingcart';
import ConfigurationModal from './ConfigurationModal';



export default function Details() {
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [activeCategory, setActiveCategory] = useState();
  const { restroid } = useParams();
  const [cart, setCart] = useState([]);
  // At the beginning of your Details component
  const [isConfigurationModalOpen, setConfigurationModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const openConfigurationModal = (product) => {
  console.log('Opening Configuration Modal with product:', product);

  // Check if the product has selectopt details, otherwise provide a default value
  const selectoptDetails = product.selectopt && product.selectopt.length > 0 ? product.selectopt[0] : null;

  if (selectoptDetails) {
    console.log('Selectopt details:', selectoptDetails);

    // Implement the logic to handle the selectopt details here

    setSelectedProduct(product);
    setConfigurationModalOpen(true);
  } else {
    console.warn('Product does not have selectopt details, using default:', product);
    
    // You can choose to handle the absence of selectopt details differently here

    setSelectedProduct(product);
    setConfigurationModalOpen(true);
  }
};



const closeConfigurationModal = () => {
  setConfigurationModalOpen(false);
  setSelectedProduct(null);
};


  const handleIncrement = (product) => {
    // Implement increment logic here
    handleAddToCart(product, 'increment');
  };

  const handleDecrement = (product) => {
    // Implement decrement logic here
    handleAddToCart(product, 'decrement');
  };

  const handleAddToCart = (product, action) => {
    const existingCartItem = cart.find((item) => item.mnuid === product.mnuid);

    if (action === 'increment') {
      // Increment the quantity and totalPrice of the item
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
        setCart([...cart]);
      }
    } else if (action === 'decrement') {
      // Decrement the quantity and totalPrice of the item
      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
        existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
        setCart([...cart]);
      } else {
        // If quantity is 1 or less, remove the item from the cart
        const updatedCart = cart.filter((item) => item.mnuid !== product.mnuid);
        setCart(updatedCart);
      }
    } else {
      // If the action is neither increment nor decrement, add a new item
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
        setCart([...cart]);
      } else {
        const newItem = { ...product, quantity: 1, totalPrice: product.price };
        setCart([...cart, newItem]);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
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
            const response = await fetch('/webapi/api.php/restaurentdetail', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data && data.length > 0) {
                setRestaurantData(data[0].Restaurant_Detail[0]);
                setMenuData(data[0]); // Set the entire menu data
            } else {
                console.error('Invalid data structure in the response.');
            }

            console.log('API Response Data:', data);

            if (data && data.length > 0) {
                setActiveCategory(data[0].MenuItem.MenuHead[0].category); // Set the initial active category
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [restroid, setMenuData]);




  const getCategoryProducts = () => {
    const category =
      menuData &&
      menuData.MenuItem &&
      menuData.MenuItem.MenuHead.find((head) => head.category === activeCategory);
    if (category) {
      return category.category_products.map((product) => ({
        mnuid: product.mnuid,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        allergyInfo: product.allergy_info,
        hasConfiguration: product.selectopt && product.selectopt.length > 0,
        selectopt:product.selectopt,
      }));
    }
    return [];
  };

  const products = getCategoryProducts();



  const titleStyle = {
    background: 'linear-gradient(to right, #bee25a, #357135)',
    transition: 'background 0.7s',
  };

  return (
    <div className="bg-white  flex">
      <div className="sticky top-0 right-0 h-25 z-20  w-full bg-white">
        <div className="bg-white h-20 sticky top-0 right-0 h-25 z-20 border bg-border-gray-600bg-white mx-auto px-20 py-3 overflow-x-auto overflow-hidden  flex justify-center sm:justify-start w-full" >
          <div className="flex space-x-4">
            {menuData &&
              menuData.MenuItem &&
              menuData.MenuItem.MenuHead.map((category) => (
                <div key={category.category_id}>
                  <button
                    onClick={() => {
                      console.log(activeCategory); // Add this line for debugging
                      setActiveCategory(category.category);
                      // Reset the title background when selecting a new tab
                    }}
                    className={`px-5 py-2 sm:px-5 sm:py-2 rounded-full cursor-pointer  whitespace-nowrap  text-black  overflow-ellipsis ${category.category === activeCategory ? 'bg-green-1' : 'bg-gray-200'} hover:text-green-700`} style={{ display: 'inline-block' }}
                  >
                    {category.category}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <h1
          className="text-4xl text-white mt-14 rounded-lg py-4 px-4 w-auto"
          style={titleStyle}
        >
          {activeCategory}
        </h1>
        <div className='flex flex-col-2 w-auto'>
          <div className="  h-auto bg-white ">
            <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 ml-2 p-8 h-auto bg-white max-w-screen-xl mx-auto">
              {products.map((product) => (
                <div key={product.mnuid} className="h-60 w-72 p-2  bg-green-1 mt-4 rounded-lg relative  transition duration-300 transform hover:scale-105">
                  <h3 className="text-black text-xl font-semibold px-6 py-4">{product.name}</h3>
                  <p className="text-gray-800 overflow-hidden line-clamp-2 px-6 text-sm">{product.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4">
                    <p className="text-lg font-semibold text-gray-700">€ ${product.price}</p>
                    <div className="flex space-x-2">
                      <button className="text-gray-600 hover:text-gray-800" aria-label="Info button">
                        <Image src="/info.png" alt="Info Icon" width={36} height={36} />
                      </button>
                      {product.hasConfiguration ? (
                        <button
                          className="text-green-800 hover:text-green-600 text-xl"
                          aria-label="Configure button"
                          onClick={() => openConfigurationModal(product)}
                        >
                          Konfiguriere
                        </button>
                        
                      ) : (
                        <button
                          className="text-green-600 hover:text-green-800"
                          aria-label="Add to cart button"
                          onClick={() => handleAddToCart(product)}
                        >
                          <Image src="/plus.png" alt="Plus Icon" width={36} height={36} />
                        
                        </button>)}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>


          <div className='sticky top-0 right-0 md:mt-24 md:ml-10 md:w-96 md:h-86 '>
            <BillingCart cart={cart} onIncrement={handleIncrement} onDecrement={handleDecrement} />
          </div>
        </div>
        {isConfigurationModalOpen && selectedProduct && (
            <ConfigurationModal product={selectedProduct} onClose={closeConfigurationModal} />
                        )}
      </div>

    </div>

  );
}



