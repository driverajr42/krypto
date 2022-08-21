import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import {AiOutlineClose } from 'react-icons/ai'


import logo from '../assets/logo.png'

// Allows us to call items as a component
const NavbarItems = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false)
  return (
    <nav className='w-full flex md:justify-center justify-between itmes-center p-4'>

      {/* Following div and classes are designed for the logo inside of navbar */}
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>

        {/* Actual Nav Items/Links */}
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {/* Setting each item in the navbar to pass to the component */}
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItems key={item + index}  title={item}/>

        ))}
        {/* A link or button seperated from the actual navigation */}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li>
      </ul>
      
      {/* If toggleMenu is open show the close button. Else show the menu button */}
      <div className='flex relative'>
        { toggleMenu
          ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu(false) } />
          : <HiMenuAlt4  fontSize={28} className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu(true) } />
        }

        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose  onClick={ () => setToggleMenu(false) }/>
            </li>

            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItems key={item + index}  title={item} classProps='my-2 text-lg'/>

        ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar