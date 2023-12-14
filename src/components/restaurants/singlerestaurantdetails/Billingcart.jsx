'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMinusCircle } from 'react-icons/fa';


const BillingCart = ({ cart, onIncrement, onDecrement }) => {
  const [hovered, setHovered] = useState(false);
  const [style, setStyle] = useState({
    background: 'linear-gradient(to right, #bee25a, #357135)',
    transition: 'background 0.7s',
  });

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = parseFloat(cart.reduce((total, item) => total + (item.quantity * item.price), 0)).toFixed(2);

  useEffect(() => {
    if (hovered) {
      setStyle({
        background: 'linear-gradient(to right, #357135, #bee25a)',
        transition: 'background 0.7s',
      });
    } else {
      setStyle({
        background: 'linear-gradient(to right, #bee25a, #357135)',
        transition: 'background 0.7s',
      });
    }
  }, [hovered]);

  return (
    <div className="sticky top-24 right-0 w-[600px] h-86 bg-green-1 flex flex-col justify-between">
      <div>
        <h1 className="text-white h-24 bg-green-700 text-center p-6 text-4xl font-semibold">Order Overview</h1>
        <div className="flex justify-between p-6">
          <div>
            <ul className="text-black">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center my-2">
                  <span className="flex-grow">{item.name}</span>
                  <div className="flex items-center">
                    <button onClick={() => onIncrement(item)}>
                      <Image src="/plus.png" alt="Plus Icon" width={24} height={24} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onDecrement(item)}>
                      <FaMinusCircle size={24} />
                    </button>
                  </div>
                  <span>- Total: €{parseFloat(item.totalPrice).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-gray-800 text-2xl font-semibold p-4">TOTAL</h2>
          </div>
          <div>
            <h2 className="text-2xl text-gray-800 font-semibold p-4">€ {totalPrice}</h2>
          </div>
        </div>
        <hr className="my-4 border-white" />
        <div className="flex items-center px-4">
          <input
            type="radio"
            id="option1"
            name="package"
            value="standard"
            className="mr-2 w-6 h-6"
          />
          <label htmlFor="option1" className="text-gray-800 text-md mr-4">
            Standard Delivery
          </label>
          <input
            type="radio"
            id="option2"
            name="package"
            value="selfPickup"
            className="mr-2 w-6 h-6"
          />
          <label htmlFor="option2" className="text-gray-800 text-md">
            Self Pickup
          </label>
        </div>
        <hr className="my-4 border-white" />
      </div>
      <div className="px-4 py-4">
        <button
          className="p-3 w-full text-white font-semibold text-xl rounded-md"
          style={style}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          Pre-Order
        </button>
      </div>
    </div>
  );
}

export default BillingCart;
