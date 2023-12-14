import React from 'react'
import NavBar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import ContactBackdrop from '@/components/contact/ContactBackdrop'
import Contact from '@/components/contact/Contact'
export default function Page() {
  return (
    <>
    <div className="relative w-screen bg-center bg-cover"
         style={{
           backgroundImage: "url('https://www.gokidogo.de/img/gokido/headercontactus.jpg')",
         }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
      <NavBar />
      <ContactBackdrop/>
    </div>
    <Contact/>
    <Footer/>
  </>
  )
}
