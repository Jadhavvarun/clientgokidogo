import React from 'react'
import ToolBackdrop from '@/components/gokido_tool-de/ToolBackdrop'
import NavBar from '@/components/home/Navbar'
import Toolform from '@/components/gokido_tool-de/Toolform'
import Footer from '@/components/home/Footer'
import Tools from '@/components/gokido_tool-de/Tools'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
    <div className="relative flex-1 w-screen bg-center bg-cover bg-lightgreen">
      <div className="absolute inset-0"></div>
      <NavBar />
      <ToolBackdrop />
    </div>
    <div className='w-screen'>
    <Tools/>
    <Toolform/>
    <Footer />
    </div>
  </div>
  )
}
