'use client'

import React from 'react';
import Wave from 'react-wavify';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineLanguage } from 'react-icons/md'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => 
  <div className="bg-white">
  <footer>
    <Wave fill='#D3E6C8'
      paused={false}
      style={{ display: 'flex' }}
      options={{
        height: 10,
        amplitude: 10,
        speed: 0.20,
        points: 3
      }}
    />
    <div className="h-96 bg-green-1 px-8">
      <div className="flex justify-around py-2 text-black">
        <div>
          <h3 className="text-md font-semibold py-2">LEFT</h3>
          <ul className='flex-col flex'>
            <Link href='/about-us' className="mt-1 text-md transition-transform transform hover:translate-x-2">About Us</Link>
            <Link href='/how-it-works-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">That&rsquo;s how it works</Link>
            <Link href='/contact' className="mt-1 text-md transition-transform transform hover:translate-x-2">Contact</Link>
            <Link href='' className="mt-1 text-md transition-transform transform hover:translate-x-2">Imprint</Link>
            <Link href='' className="mt-1 text-md transition-transform transform hover:translate-x-2">Conditions</Link>
            <Link href='' className="mt-1 text-md transition-transform transform hover:translate-x-2">Privacy</Link>
            <Link href='/cookie-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">Cookie</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold py-2">GERMANY</h3>
          <ul className='flex-col flex'>
            <Link href='/bad-vilbel' className="mt-1 text-md transition-transform transform hover:translate-x-2">BAD VILBEL </Link>
            <Link href='/hanau' className="mt-1 text-md transition-transform transform hover:translate-x-2">HANAU </Link>
            <Link href='/mainz' className="mt-1 text-md transition-transform transform hover:translate-x-2">MAINZ </Link>
            <Link href='/bad-nauheim' className="mt-1 text-md transition-transform transform hover:translate-x-2">BAD NAUHEIM </Link>
            <Link href='/frankfurt-am-main' className="mt-1 text-md transition-transform transform hover:translate-x-2">FRANKFURT AM MAIN</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold py-2">INDIA</h3>
          <ul>
            <li className="text-md">Delhi</li>
            <li className="text-md mt-1">Mumbai</li>
            <li className="text-md mt-1">Nagpur</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="">
            <h3 className="text-md font-semibold">SECURE PAYMENT METHODS</h3>
            <Image src="/cards.svg" alt="cards" width={250} height={80} className="mt-2" />
          </div>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-start">SOCIAL MEDIA</h3>
            <div className="flex space-x-4 mt-4">
              <FaTwitter size={30} color="#1DA1F2" className="cursor-pointer" />
              <FaFacebook size={30} color="#1877f2" className="cursor-pointer" />
              <FaInstagram size={30} color="#E4405F" className="cursor-pointer" />
              <FaYoutube size={30} color="#FF0000" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mr-24 ml-24 mt-6 mb-6" />
      <div className="flex justify-between px-20 py-4 text-black">
    <div className='flex items-center'>
      <select className="border border-gray-400 text-sm px-6 py-2 flex items-center rounded-sm cursor-pointer">
        <option className="mr-2">English(EN)</option>
        <option className="mr-2">German(DE)</option>
      </select>
      <MdOutlineLanguage />
    </div>
    <div>
      <p>
        <a href="/terms" className="mr-4 text-sm">Terms and conditions</a>
        <span className="mx-2">|</span>
        <a href="/privacy" className="mx-4 text-sm">Privacy</a>
        <span className="mx-2">|</span>
        <span className="ml-4 text-sm">© Go Kidogo 2022</span>
      </p>
    </div>
  </div>
    </div>
  </footer>
  </div>
;

export default Footer;