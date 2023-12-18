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
            <h3 className="text-md font-semibold py-2 cursor-pointer">LINKS</h3>
            <ul className='flex-col flex'>
              <Link href='/about-us' className="mt-1 text-md transition-transform transform hover:translate-x-2">Über uns</Link>
              <Link href='/how-it-works-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">So funktioniert´s</Link>
              <Link href='/contact' className="mt-1 text-md transition-transform transform hover:translate-x-2">Kontakt</Link>
              <Link href='/imprint-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">Impressum</Link>
              <Link href='/conditions-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">Koditionen</Link>
              <Link href='' className="mt-1 text-md transition-transform transform hover:translate-x-2">Privatsphäre</Link>
              <Link href='/cookie-de' className="mt-1 text-md transition-transform transform hover:translate-x-2">Cookie</Link>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold py-2 cursor-pointer">GERMANY</h3>
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
          <div className='relative'>
            <select className="bg-green-1 border border-gray-400 text-sm px-4 py-1 pr-10 rounded-sm cursor-pointer appearance-none outline-none">
              <option className="mr-2">English(EN)</option>
              <option className="mr-2">German(DE)</option>
            </select>
            <MdOutlineLanguage className="absolute right-3 top-2 text-gray-500 pointer-events-none" />
          </div>
          <div>
            <p>
              <Link href='/conditions-de' className="mr-4 z-10 text-sm">AGB&apos;s</Link>
              <span className="mx-2">|</span>
              <Link href='/privacy-de' className="mx-4 z-10 text-sm">Privatsphäre</Link>
              <span className="mx-2">|</span>
              <span className="ml-4 text-sm">© Go Kidogo 2022</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  

export default Footer;