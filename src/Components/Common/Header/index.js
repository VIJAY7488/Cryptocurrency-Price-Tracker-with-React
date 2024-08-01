import React from 'react'
import AnchorTemporaryDrawer from './Drawer'

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
      link: "watchlist"
    },
  ]
  return (
    <div className='flex justify-between items-center py-4 px-3'>
      <div className='text-3xl'>
        <h1 className='text-gray-200'>
        CryptoTracker<span className='text-blue-700'>.</span>
        </h1>
      </div>

      <div className='flex justify-end items-center space-x-6'>
        {
          menuList.map((navItem) =>(
            <li 
            key={navItem.id}
            className='list-none text-gray-200 text-2xl hidden md:block'>
              {navItem.label}
            </li>
          ))
        }
         <button 
          className='text-gray-200 text-2xl hidden md:block
           bg-blue-600 px-2 py-1 rounded-md hover:dropShadow'>
          Dashboard
         </button>

         <div className='block md:hidden'>
           <AnchorTemporaryDrawer/>
         </div>
      </div>

      
    </div>
  )
}

export default Header