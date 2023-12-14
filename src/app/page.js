import NavBar from "@/components/home/Navbar";
import Home from "../components/home/Home";
import Categories from "../components/home/Categories";
import Homebanner from "@/components/home/Homebanner";
import Footer from "@/components/home/Footer";
import Steps from "@/components/home/Steps";
import Wave from 'react-wavify';


import React from 'react'

export default function Page() {
  return (
    <>
    <div className="relative bg-center bg-cover  bg-[url('https://www.gokidogo.de/img/hero_5.png')]  bg-green-2 opacity-90 ">
      <NavBar/>
      <Home/>
      </div>
      <Categories/>  {/*Online Restaurant Code*/}
      <Homebanner/> 
      <Steps/>
      <Footer/>
    </>

   


  )
}
