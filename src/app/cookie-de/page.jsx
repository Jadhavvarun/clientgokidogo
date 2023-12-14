import React from 'react'
import NavBar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import CookieBackdrop from '@/components/cookie-de/CookieBackdrop'
import Cookie from '@/components/cookie-de/Cookie'
export default function Page() {
  return (
    <>
    <div className="relative w-screen bg-center bg-cover"
         style={{
           backgroundImage: "url('https://www.gokidogo.de/img/gokido/hero_general_2.jpg')",
         }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
      <NavBar />
      <CookieBackdrop/>
    </div>
    <Cookie/>
    <Footer/>
  </>
  )
}
