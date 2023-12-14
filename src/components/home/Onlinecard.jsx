import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
import Link from 'next/link';

const Cards = ({ name, address, cuisine, image, restroid, isActive }) => {
  const defaultImageUrl = '/food.jpg';
  // Handle the error event for the image
  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };

  return (
    <Link className="z-10" href={`/restaurants/${restroid}`}>
      <div className="h-36 w-[560px] bg-white shadow-xl m-4 cursor-pointer mx-auto rounded-sm">
        <div className="flex">
          <div className="w-40 h-36 relative p-2 transition-transform duration-300 transform hover:scale-105">
            {image ? (
              <img
                src={image}
                alt={name}
                style={{ width: '160px', height: '130px' }}
                className="object-cover rounded-sm"
                onError={handleImageError}
              />
            ) : (
              <img
                src={defaultImageUrl}
                alt="Default Image"
                style={{ width: '160px', height: '130px' }}
                className="object-cover rounded-sm"
              />
            )}
          </div>
          <div className="flex justify-between flex-col flex-grow">
            <div className="flex justify-between items-start">
              <h1 className="text-black-1 font-semibold ml-2 mt-4 text-xl hover:text-green-700">
                {name}
              </h1>
              <div className="flex items-center ml-auto px-2">
                <MdOutlineStar className="text-green-500 h-4 w-4 mt-5 ml-2" />
                <p className="text-black-1 text-sm mt-5 ml-1">8.6</p>
              </div>
            </div>
            <div className="px-2 mb-3">
              <p className="text-black-1 text-sm">{cuisine}</p>
              <p className="text-black-1 text-sm">{address}</p>
              {isActive === '1' ? (
                <button className="bg-green-3 px-1 py-auto text-sm">
                  open
                </button>
              ) : (
                <button className="bg-yellow-500 px-1 py-auto text-sm text-white">
                  comming soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Cards;