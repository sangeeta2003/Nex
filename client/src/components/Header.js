import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black '>
        <img className='w-56' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'alt='logo'/>
        <div className='flex items-center'>
        <IoIosArrowDropdown size='24px' color='white' />
            <h1 className='text-lg font-medium text-white'>Sangeeta Mishra</h1>
            <div className='ml-4'>
            <button className='bg-red-800 text-white px-4 py-2'>LogOut</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
            
        </div>
    </div>
  )
}

export default Header