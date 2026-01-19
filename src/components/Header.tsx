import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './Sidebar';
export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <header className="relative flex items-start h-24 px-2 sm:px-3 md:px-4 
                   border-t-2 border-[#162491] 
                   bg-school-primary text-white shadow-lg overflow-y-visible">
        {/* Left Logo */}
        <div className="flex h-full relative z-50">
          <Link to="/" className="block">
            <img
              src="/Scholar_logo.png"
              className=" w-20 sm:w-22 md:w-24 lg:w-25  h-auto object-contain self-start"
            />
          </Link>
        </div>

        {/* Center Title (Always Centered Horizontally) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center p-2 pointer-events-none">
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold font-abhaya whitespace-nowrap capitaliz tracking-[4px]">
            The Scholar Homes School
          </h1>
          <p className='text-sm lg:text-2xl text-white '>
          Address E-2 arera colony
          </p>
        </div>

        {/* Right Menu Button */}
        <div className="ml-auto self-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 cursor-pointer rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <GiHamburgerMenu size={28} />
          </button>
        </div>

      </header>

            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

      
    </>
  )
}
