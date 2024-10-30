'use client'
import React, { useEffect, useState } from 'react'
import Drawer from './DiagonalDrawer'
import '../Header/DiagonalDrawer.css'

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  console.log(isScrolled)

  const openDrawer = () => {
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header className={`${isScrolled ? "headerShow" : ""} w-full fixed top-0 z-50 transition-all duration-300 bg-[#02020239] backdrop-blur-2xl`}

      >
        <div className='relative'>
          <div className='visible lg:invisible z-30 absolute cursor-pointer w-14 h-14 lg:w-20 lg:h-20 bg-transparent flex justify-center items-center rounded-br-3xl'
            onClick={openDrawer}
          >
            <div className='relative w-7 lg:w-10 lg:h-10 fex justify-center items-center'>
              <img src='/menu.png' alt='drawer item' className='w-12 h-12' />
            </div>
          </div>
        </div>
        <nav className='invisible xl:visible lg:visible 2xl:max-w-7xl'>
          <ul className='flex flex-row justify-center items-center h-14 lg:h-20'>
            <li className='group text-2xl relative font-bold mx-5'>
              <a className={`menu-item ${selectedIndex1 === 0 ? "text-[#76ABAE]" : "text-[#ffffff]"}  group-hover:text-[#76ABAE]`}
                href='/#home'
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>
            <li className='group text-2xl relative font-bold mx-5'>
              <a className={`menu-item ${selectedIndex1 === 1 ? "text-[#76ABAE]" : "text-[#ffffff]"}  group-hover:text-[#76ABAE]`}
                href='/#portfolio'
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </a>
            </li>
            <li className='group text-2xl relative font-bold mx-5'>
              <a className={`menu-item ${selectedIndex1 === 2 ? "text-[#76ABAE]" : "text-[#ffffff]"}  group-hover:text-[#76ABAE]`}
                href='/#about-me'
                onClick={() => setSelectedIndex1(2)}
              >
                Sobre mi
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )
}
