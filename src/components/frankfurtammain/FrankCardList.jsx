import React from 'react';
import Link from 'next/link';


const TakeoutIcon = () => (
  <img
      src="/takeaway.png"
      alt="Takeaway Bag"
      className="w-6 h-6"
  />
);

const DeliveryIcon = () => (
  <img
      src="/delivery.png"
      alt="Bike"
      className="w-8 h-8"
  />
);

const CardDesign = ({Name,Image,Address,Cuisine,EstablishmentType,isActive}) => {
  const isTakeout = EstablishmentType.includes('1');
  const isDelivery = EstablishmentType.includes('2');
  return (

    <div className="relative mx-auto w-full max-w-sm pt-6">
    <div className="rounded-lg">
      <div className="relative flex flex-col h-52 justify-end overflow-hidden rounded-lg">
        <div className=" w-full transform transition-transform duration-500 ease-in-out hover:scale-110 bg-black opacity-100">
          <img className="bg-black opacity-70 "
            src={Image}
            alt={Name}
            onError={(e) => {
              e.target.src = 'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=996&t=st=1699342388~exp=1699342988~hmac=82bb7d553c054293cd7e6bd751bdc838ca319384149dc10c5dc6086ca87ba399';
            }}
          />
        </div>
        <div className="absolute bottom-3 ml-3">
        {isActive ==1 ?(
            <button className="bg-green-3 px-1 py-auto text-sm">
              open
            </button>
          ):(
            <button className="bg-yellow-600 px-1 py-auto text-sm">
            coming soon
          </button>
          )}
          <p className="text-xl font-bold text-white">{Name}</p>
          <p className="text-sm font-medium text-white">{Address}</p>
        </div>
        <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-sm bg-white px-2 mr-3 py-1 text-sm font-medium text-black">
            {Cuisine}
          </span>
      </div>
    </div>
    <div className="flex justify-end gap-6">
       {isTakeout &&(
      <button className="flex items-center text-black gap-1 xl:flex-row xl:items-center">
        <TakeoutIcon className="mr-2" />
        <span className="text-medium">Takeaway</span>
      </button>
)}  {isDelivery && (
      <button className="flex items-center text-black gap-1 xl:flex-row xl:items-center">
        <DeliveryIcon className="mr-2" />
        <span className="text-medium">Delivery</span>
      </button>
)}
    </div>
  </div>
  );
};

const FrankCardList = ({ data }) => {
    console.log('Data received in CardList:', data);
  
    // Check the structure of the received data
    console.log('Data structure:', typeof data, data);
  
    // Check if data is an array, otherwise default to an empty array
    const restaurants = Array.isArray(data) ? data : [];
    console.log('Practice:', restaurants);
  
    return (
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.restroid} href={`/restaurants/${restaurant.restroid}`}>
            <div key={restaurant.restroid}>
              <CardDesign
                Name={restaurant.name}
                Image={restaurant.image}
                Address={restaurant.address}
                EstablishmentType={restaurant.establishmenttype}
                Cuisine={restaurant.cuisine}
                isActive={restaurant.Online}
              />
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  export default FrankCardList;