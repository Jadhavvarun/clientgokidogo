// Page.jsx
import NavBar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import React from 'react';

export default function Page() {
  const heading = 'So funktioniert‘s';
  const content = 'Deine Fragen, unsere Antworten';

  return (
    <>
      <div className="relative bg-center bg-cover bg-[url('/hero_general_2.jpg')] bg-green-2 opacity-70">
        <NavBar />
      </div>
      <Footer />
    </>
  );
}
