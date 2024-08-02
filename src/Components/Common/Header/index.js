import React from 'react'
import AnchorTemporaryDrawer from './Drawer'
import { Link } from 'react-router-dom'

function Header() {

  const menuList = [
    {
      id: 1,
      label: "Home",
      link: "/home"
    },
    {
      id: 2,
      label: "Compare",
      link: "/compare"
    },
    {
      id: 3,
      label: "Watchlist",
      link: "/watchlist"
    },
  ]
  return (
    <div className='flex justify-between items-center py-4 px-3 
     sticky top-0 left-0 z-50'>
      <div className='text-3xl'>
        <h1 className='text-gray-200'>
        CryptoTracker<span className='text-blue-700'>.</span>
        </h1>
      </div>

      <div className='flex justify-end items-center space-x-6'>
        {
          menuList.map((navItem) =>(
            <Link to={navItem.link}
            key={navItem.id}
            className='list-none text-gray-200 text-2xl hidden md:block'>
              {navItem.label}
            </Link>
          ))
        }
         <Link to="/dashboard">
         <button 
          className='text-gray-200 text-2xl hidden md:block
           bg-blue-600 px-3 py-1 rounded-3xl hover:dropShadow'>
          Dashboard
         </button>
         </Link>

         <div className='block md:hidden'>
           <AnchorTemporaryDrawer/>
         </div>
      </div>

      
    </div>
  )
}

export default Header