'use client'

import { useEffect } from "react";
import React, { useState } from 'react';
import Billingcart from "./Billingcart";

const ConfigurationModal = ({ product, onClose }) => {
  console.log('product', product)
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState({});
  const [maxSelectionLimits, setMaxSelectionLimits] = useState({});
  const [minSelectionLimits, setMinSelectionLimits] = useState({});
  const [loading, setLoading] = useState(true);






  const handleSizeSelection = (size) => {
    // Update the selectedSize state with the chosen size
    setSelectedSize(size);

    // If you want to include size-specific addons in the configuration details,
    // you may want to update selectedAddons based on the chosen size as well.
    // For example, you could filter addons based on the selected size.
    const sizeSpecificAddons = product.selectopt
      .filter((option) => option.Name !== 'Size')
      .map((option) => {
        const addonsForSize = option.Modifier.filter((modifier) => modifier.Size === size);
        return addonsForSize.map((addon) => ({ name: addon.AddonName, price: parseFloat(addon.Price) }));
      })
      .flat();

    setSelectedAddons((prevSelectedAddons) => ({
      ...prevSelectedAddons,
      [size]: sizeSpecificAddons.reduce((addonObj, addon) => {
        addonObj[addon.name] = true;
        return addonObj;
      }, {}),
    }));
  };

  const handleCheckboxClick = (addonName, selectoptName, isRadio) => {
    setSelectedAddons((prevSelectedAddons) => {
      if (isRadio) {
        // Handle radio button logic (only one option selected within the group)
        return {
          ...prevSelectedAddons,
          [selectoptName]: {
            [addonName]: true,
          },
        };
      } else {
        // Handle checkbox logic
        return {
          ...prevSelectedAddons,
          [selectoptName]: {
            ...(prevSelectedAddons[selectoptName] || {}),
            [addonName]: !prevSelectedAddons[selectoptName]?.[addonName],
          },
        };
      }
    });
  };



  const handleConfirm = () => {
    // Check if loading is still in progress
    if (loading) {
      console.log('Loading... Please wait.');
      return;
    }

    // Consolidated error messages for all categories
    let errorMessage = '';

    // Proceed with gathering configuration details
    const selectedAddonDetails = [];
    let totalPrice = 0;

    // Include selected size and its addons
    const sizeOption = product.selectopt.find((option) => option.Name === 'Size');
    if (sizeOption && selectedSize) {
      const sizeMappings = {
        'S': 'S',
        'M': 'M',
        'R': 'R'
        // Add more mappings as needed
      };

      const sizeAddon = sizeOption.Modifier.find((modifier) => sizeMappings[modifier.Size] === selectedSize);
      if (sizeAddon) {
        const sizeAddonDetails = {
          name: sizeAddon.AddonName,
          price: parseFloat(sizeAddon.Price),
          // Add other details as needed
        };
        selectedAddonDetails.push(sizeAddonDetails);

        // Accumulate the size addon price to calculate the total price
        totalPrice += parseFloat(sizeAddon.Price);
        console.log(`Price of Aditya ${sizeAddon.AddonName}: ${parseFloat(sizeAddon.Price)}`);

      }
    }


    // Iterate over each category
    product.selectopt.forEach((selectopt) => {
      const selectoptName = selectopt.Name;

      // Skip validation for the "Size" category
      if (selectoptName === 'Size') {
        return;
      }

      // Log selected size
      console.log(`Selected Size: ${selectedSize}`);

      // Validation for maxSelection and Included addons
      const selectedAddonsCount = Object.keys(selectedAddons[selectoptName] || {}).filter(
        (addonName) => selectedAddons[selectoptName][addonName]
      ).length;

      const maxSelectionLimit = maxSelectionLimits[selectoptName];

      if (maxSelectionLimit && selectedAddonsCount > maxSelectionLimit) {
        errorMessage += `\nYou can select a maximum of ${maxSelectionLimit} add-ons for ${selectoptName}.`;
      }

      const includedCount = selectedAddons[selectoptName]
        ? Object.values(selectedAddons[selectoptName]).filter(Boolean).length
        : 0;

      console.log(`Selected ${includedCount} addon(s) for ${selectoptName}. Minimum required: ${selectopt.Included}`);

      if (selectopt.Included > 0 && includedCount < parseInt(selectopt.Included, 10)) {
        errorMessage += `\nYou must select at least ${selectopt.Included} addon(s) for the category ${selectoptName} with Included value '1'.`;
      }

      // Log selected size
      console.log(`Selected Size: ${selectedSize}`);



      // Assuming you have a counter variable somewhere in your code.
      let includedAddonCounter = 0;

      // Include selected addons with their names and prices
      for (const addonName in selectedAddons[selectoptName]) {
        const addonData = selectopt.Modifier
          .filter((modifier) => modifier.AddonName === addonName)
          .find((modifier) => modifier.Size === selectedSize);

        if (selectedAddons[selectoptName][addonName] && addonData) {
          // Log addon size and selected size for debugging
          console.log(`Addon: ${addonName}, Size: ${addonData.Size}, Selected Size: ${selectedSize}`);

          // Check if the addon size matches the selected size
          if (addonData.Size.toUpperCase() === selectedSize.toUpperCase()) {
            console.log('Size match found.');

            const isBaseAddon = selectopt.Name === 'Base';
            const isFreeAddon = !isBaseAddon && includedAddonCounter < parseInt(selectopt.Included, 10);


            const addonDetails = {
              name: addonName,
              price: parseFloat(addonData.Price),
              // Add other details as needed
            };

            selectedAddonDetails.push(addonDetails);

            // Accumulate null in totalPrice for free addons
            if (!isFreeAddon) {
              totalPrice += parseFloat(addonData.Price);
            }

            // Increment the counter for free addons
            if (isFreeAddon) {
              includedAddonCounter++;
            }
          } else {
            console.log('Size match not found.');
          }
        }
      }



    });

    // Include selected product details
    const productDetails = {
      name: product.name,
      price: parseFloat(product.price),
      // Add other details as needed
    };

    selectedAddonDetails.push(productDetails);

    // Accumulate the product price to calculate the total price
    totalPrice += parseFloat(product.price);



    // Log the total price for debugging
    console.log('Total Price:', totalPrice);

    // Check if there are any error messages and display them in a single alert
    if (errorMessage) {
      window.alert(`Configuration Error:${errorMessage}`);
      return; // Abort confirmation
    }

    // Log the selected addon details and total price for further debugging
    console.log('Selected Addon Details:', selectedAddonDetails);
    console.log('Total Price:', totalPrice);

    // // Call the onConfigurationConfirm prop to pass the details to the parent component
    // if (onConfigurationConfirm) {
    //   onConfigurationConfirm({ addons: selectedAddonDetails, totalPrice });
    // }

    // Close the modal
    // setSelectedaddonDetails({addons: selectedAddonDetails, totalPrice })
    onClose();
  };






  useEffect(() => {
    // Initialize max and min selection limits based on the selectopt names
    const maxLimits = {};
    const minLimits = {};

    product.selectopt.forEach((option) => {
      if (option.Name !== 'Size') {
        maxLimits[option.Name] = option.MaxSelection ? parseInt(option.MaxSelection, 10) : undefined;

        // Log Included value for debugging
        console.log(`Included value for ${option.Name}: ${option.Included}`);

        // Check 'Included' value at the category level
        minLimits[option.Name] = parseInt(option.Included, 10);

        // Additional check for consistency
        if (maxLimits[option.Name] !== undefined && minLimits[option.Name] > maxLimits[option.Name]) {
          console.warn(`Warning: The minimum limit for ${option.Name} is greater than the maximum limit.`);
        }
      }
    });

    // Log min and max limits for debugging
    console.log('Max Selection Limits:', maxLimits);
    console.log('Min Selection Limits:', minLimits);

    // Set the limits in state
    setMaxSelectionLimits(maxLimits);
    setMinSelectionLimits(minLimits);

    // Set loading to false once limits are updated
    setLoading(false);
  }, [product.selectopt]);




  return (
    <div className="z-30 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96 h-96 overflow-y-auto">
        <div className="bg-green-200 p-6 w-96 overflow-y-auto shadow-md">
          <h2 className="text-gray-600 text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-800 mb-4">{product.price}</p>

          {product.selectopt &&
            product.selectopt.map((option) => (
              <div key={option.MenuHead} className="mb-2">
                {option.Name === 'Size' && (
                  <>
                    <h3 className="text-gray-700 text-lg font-bold">{option.ModifierGroup}</h3>
                    {option.Modifier
                      .filter((modifier) => ['S', 'M', 'R'].includes(modifier.Size))
                      .map((modifier) => (
                        <div key={modifier.AddonName} className="flex items-center">
                          <input
                            type={option.selection === 'Single' ? 'radio' : 'checkbox'}
                            id={modifier.AddonName}
                            name={option.ModifierGroup}
                            checked={selectedSize === modifier.Size}
                            onChange={() => handleSizeSelection(modifier.Size)}
                            className="mr-2"
                            disabled={option.MaxSelection === '1' && modifier.Seleted === 'true'}
                          />
                          <label htmlFor={modifier.AddonName} className="text-gray-600">
                            {modifier.AddonName} - {modifier.Price}
                          </label>
                        </div>
                      ))}
                  </>
                )}

                {selectedSize && option.Name !== 'Size' && (
                  <>
                    <h3 className="text-gray-700 text-lg font-bold">{option.Name}</h3>
                    {option.Modifier
                      .filter((modifier) => modifier.Size === selectedSize)
                      .map((modifier) => (
                        <div key={modifier.AddonName} className="flex items-center">
                          <input
                            type={option.selection === 'Single' ? 'radio' : 'checkbox'}
                            id={modifier.AddonName}
                            name={option.Name}
                            checked={selectedAddons[option.Name]?.[modifier.AddonName]}
                            onChange={() => handleCheckboxClick(modifier.AddonName, option.Name, option.selection === 'Single')}
                            className="mr-2"
                            disabled={option.MaxSelection === '1' && modifier.Seleted === 'true'}
                          />
                          <label htmlFor={modifier.AddonName} className="text-gray-600">
                            {modifier.AddonName} - {modifier.Price}
                          </label>
                        </div>
                      ))}
                  </>
                )}
              </div>
            ))}
        </div>
        <div className='flex flex-col'>
          <button
            onClick={() => {
              console.log('Closing Configuration Modal');
              onClose();
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          >
            CLOSE
          </button>
          <div className="mx-4"></div> {/* Add some margin between the buttons */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            onClick={handleConfirm}
          >
            CONFIRM
          </button>
        </div>
      </div>

    </div>
  );
};

export default ConfigurationModal;
