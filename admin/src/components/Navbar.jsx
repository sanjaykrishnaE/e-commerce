import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({setToken}) {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between Nue-text'>
        <div className='w-[max(10%,80px)] font-bold'>
        <Link to='/'>
        <h3>SneakHub</h3>
        </Link>
        </div>
        <button onClick={()=> setToken('')} className='bg-gray-950 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm  font-bold'>Logout</button>
    </div>
  )
}

export default Navbar