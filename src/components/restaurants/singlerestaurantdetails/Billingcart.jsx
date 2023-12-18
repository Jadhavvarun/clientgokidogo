'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";


const BillingCart = ({ cart, onIncrement, onDecrement }) => {
  console.log("cart",cart);
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
  const totalQuantity = (cart || []).reduce((total, item) => total + item.quantity, 0);
  // const totalPrice = parseFloat((cart || []).reduce((total, item) => total + (item.quantity * item.price), 0)).toFixed(2);
  const totalPrice = parseFloat((cart || []).reduce((total, item) => {
    const itemPriceWithAddons = item.totalPrice || (item.quantity * item.price);
    return total + itemPriceWithAddons;
  }, 0)).toFixed(2);
  
  console.log("TotalPriceInbillinCart",totalPrice);
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
    <div className="w-[550px] h-86 bg-green-1 flex flex-col justify-between">
    <div>
      <h1 className="text-white h-16 bg-green-700 text-center p-4 text-3xl font-semibold">Bestellübersicht</h1>
      <div className="flex justify-between p-6">
        <div>
          <ul className="text-black">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between my-2 text-xl">
                {/* Quantity Section */}
                <div className="items-center">
                  <div className="flex items-center">
                    <button onClick={() => onIncrement(item)}>
                      <AiOutlinePlusCircle size={30} />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => onDecrement(item)}>
                      <AiOutlineMinusCircle size={30} />
                    </button>
                  </div>
                </div>

                {/* Name Section */}
                <div className="flex-grow ml-4">
                  <span className="mr-4">{item.name}</span>
                </div>
                
                {/* Price Section */}
                <div className="flex justify-end" style={{ minWidth: '150px' }}>
                  <span>€{parseFloat(item.totalPrice).toFixed(2)}</span>
                </div>
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
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="option1"
            name="package"
            value="standard"
            className="mr-2 w-6 h-6"
          />
          <label htmlFor="option1" className="text-gray-800 text-md mr-4">
            Lieferung
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option2"
            name="package"
            value="selfPickup"
            className="mr-2 w-6 h-6"
          />
          <label htmlFor="option2" className="text-gray-800 text-md">
            Selbstabholung
          </label>
        </div>
      </div>
      <hr className="my-4 border-white" />
    </div>
    <div className="px-4 py-4">
      <button
        className="p-2 w-full text-white font-semibold text-lg rounded-sm"
        style={style}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        Vorbestellung
      </button>
    </div>
  </div>
);
}

export default BillingCart;
