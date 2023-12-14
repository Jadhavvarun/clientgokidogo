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

const Card = ({Name,Image,Address,Cuisine,EstablishmentType,isActive}) => {
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
        <div className="absolute bottom-0 ml-2">
        {isActive === '1' ? (
                  <button className="bg-green-3 px-1 py-auto text-sm">
                    Open
                  </button>
                ) : (
                  <button className="bg-yellow-500 px-1 py-auto text-sm text-white">
                    comming soon
                  </button>
           )}
          <p className="text-xl font-bold text-white">{Name}</p>
          <p className="text-sm font-medium text-white">{Address}</p>
        </div>
        <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-sm bg-white px-2 py-1 text-sm font-medium text-black">
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

const CardList = ({ data }) => {
  console.log('Data received in CardList:', data);
  // Use an empty array as the default value if data is null
  const restaurants = data?.[0]?.Restaurants || [];
  console.log('Practice777',restaurants);

// const isRestaurantOpen = (restaurant, timezone) => {
//   try {
//     const currentTime = new Date();
//     const zonedCurrentTime = utcToZonedTime(currentTime, timezone);

//     const firstOrderTime = parse(restaurant.FirstOrder, 'HH:mm:ss', new Date());
//     const lastOrderTime = parse(restaurant.LastOrder, 'HH:mm:ss', new Date());

//     const zonedFirstOrderTime = utcToZonedTime(firstOrderTime, timezone);
//     const zonedLastOrderTime = utcToZonedTime(lastOrderTime, timezone);

//     // Add a buffer of a few minutes to account for any delay
//     const bufferedZonedLastOrderTime = addMinutes(zonedLastOrderTime, 5);

//     const interval = { start: zonedFirstOrderTime, end: bufferedZonedLastOrderTime };
//     const isOpen = isWithinInterval(zonedCurrentTime, interval);

//     if (!isOpen) {
//       console.log('Restaurant not shown:', restaurant);
//     }

//     return isOpen;
//   } catch (error) {
//     // Handle or log the error as needed
//     console.error('Error in Single isRestaurantOpen :', error);
//     return false; // Assume the restaurant is not open in case of an error
//   }
// };

// const timezone = 'Europe/Berlin';

// // Filter online restaurants based on opening and closing hours
// const onlineRestaurants = restaurants.filter((restaurant) => isRestaurantOpen(restaurant, timezone));


// console.log(' Single Restaurants:', onlineRestaurants);

//all restaurant shown, just based on Online Value Open & coming soons statement

  return (
    <div className="bg-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.restroid} href={`/restaurants/${restaurant.restroid}`}>
          <div key={restaurant.restroid}>
            <Card
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

export default CardList;

