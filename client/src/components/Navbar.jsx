import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

function Navbar() {

   const [visible, setVisible] = useState(false);

   const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium p-10'>
        {/* <img className='w-36' src="" alt="" /> */}
        <div className=''>
        <Link to='/'>
        <h3>SneakHub</h3>
        </Link>
        </div>
        

        <ul className='hidden sm:flex gap-5 text-sm text-black'>

            <NavLink to='/'  className='flex flex-col Nue-text font-bold items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/collections'  className='flex flex-col Nue-text font-bold items-center gap-1'>
                <p>COLLECTIONS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to='/about'  className='flex flex-col Nue-text font-bold items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-400 hidden' />
            </NavLink>

            <NavLink to='/contact'  className='flex flex-col Nue-text font-bold items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
           <img onClick={()=> setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />

           <div className='group relative'>
            <Link to={'/login'}><img className='w-5 cursor-pointer' src={assets.user_icon} alt="" /> </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='Nue-text font-bold cursor-pointer hover:text-black'>MY PROFILE</p>
                    <p className='Nue-text font-bold cursor-pointer hover:text-black'>ORDERS</p>
                    <p className='Nue-text font-bold cursor-pointer hover:text-black'>LOGOUT</p>

                </div>

            </div>

           </div>
           <Link to='/cart' className='relative'>
           <img className='w-6 cursor-pointer' src={assets.cart_icon} alt="" />
           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'
           > { getCartCount() } </p>
           </Link>
           <img onClick={()=> setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
        </div>
          {/* sidebar menu for small screen  */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0' }`}>
              <div className='flex flex-col text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.downarrow_icon} className='h-4 rotate-180' alt="" />
                    <p>BACK</p>

                </div>

                <NavLink onClick={()=> setVisible(false)} className='Nue-text font-bold py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='Nue-text font-bold py-2 pl-6 border' to='/collections'>COLLECTIONS</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='Nue-text font-bold py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='Nue-text font-bold py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

              </div>
          </div>
    </div>
  )
}

export default Navbar