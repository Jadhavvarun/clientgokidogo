// Page.jsx
import NavBar from '@/components/home/Navbar'
import Footer from "@/components/home/Footer";
import Howitworks from "@/components/how-it-works/Howitworks";
import HowitworksBackdrop from "@/components/how-it-works/HowitworksBackdrop";
import React from 'react';

export default function Page() {
  const heading = 'So funktioniert‘s';
  const content = 'Deine Fragen, unsere Antworten';

  return (
    <>
      <div className="relative bg-center bg-cover bg-[url('/hero_general_2.jpg')] bg-green-2">
      <div className="absolute inset-0 bg-black opacity-60"></div>
        <NavBar />
        <HowitworksBackdrop />
      </div>
      <Howitworks />
      <Footer />
    </>
  );
}
