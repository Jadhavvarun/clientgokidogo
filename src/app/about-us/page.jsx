//about-us
import React from 'react'
import NavBar from '@/components/home/Navbar'
import AboutusBackdrop from '../../components/about-us/AboutusBackdrop'
import Footer from '@/components/home/Footer'
import Uberuns from '../../components/about-us/Uberuns'

export default function Page() {
  return (
    <>
    <div className="relative w-screen bg-center bg-cover"
         style={{
           backgroundImage: "url('https://www.gokidogo.de/img/gokido/headeraboutus.jpg')",
         }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
      <NavBar />
      <AboutusBackdrop />
    </div>
    <Uberuns/>
    <Footer/>
  </>
  )
}
