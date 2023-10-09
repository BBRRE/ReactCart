import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className=' w-100% h-14 bg-blue-950 flex'>
        <Link className='ml-auto pt-4 text-gray-200 font-semibold' to='/' > Shop </Link>
        <Link to='/cart' className='p-4 text-cyan-200 font-extrabold' > CART </Link>
    </div>
  )
}
