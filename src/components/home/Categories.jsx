'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export default function Categories() {

  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-20 mr-1 transform -translate-y-1/2">
      <button
        className="bg-white rounded-full p-2 shadow-md"
        onClick={onClick}
        aria-label="Next"
      >
        <BsArrowRight className="text-gray-400 duration-200 hover:text-green-3 text-2xl" />
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-20 ml-1 transform -translate-y-1/2 z-10">
      <button
        className="bg-white rounded-full p-2 shadow-md"
        onClick={onClick}
        aria-label="Previous"
      >
        <BsArrowLeft className="text-gray-400 duration-200 hover:text-green-3 text-2xl" />
      </button>
    </div>
  );

  const settingsWithCustomArrows = {
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
  };

  const containerStyle = {
    minHeight: '30rem',
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3100,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    
    <div className="p-4 md:px-2 overflow-hidden text-center bg-white" style={containerStyle}>
      
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 mt-2 md:mt-8 text-black">
        Beliebte Kategorien
      </h2>
      <Slider {...sliderSettings} {...settingsWithCustomArrows} className="mx-auto px-20">
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_pizza.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
            <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Pizza</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_sushi.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Sushi</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/curry.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Curry</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_hamburgher.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <div className="z-10 relative text-white">
          <h3 className="text-2xl mt-40 font-semibold">Burger</h3>
          <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_vegetarian.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Vegetarisch</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_chinesse.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Chinesisch</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/home_cat_mexican.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Mexikanisch</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/noodle.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Nudeln</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/vegan.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Vegan</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-sm h-[320px] md:h-60 md:w-48 flex flex-col justify-between relative transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: "url('https://www.gokidogo.de/img/halal.jpg')", backgroundSize: "cover", backgroundPosition: "center center", }}>
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
            <div className="z-10 relative text-white">
              <h3 className="text-2xl mt-40 font-semibold">Halal</h3>
              <p className="text-sm">alles Ansehen</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};