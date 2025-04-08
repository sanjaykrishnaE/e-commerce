import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);


  return (
    <div className='px-[100px]'>
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80px] border-t'>
      {/* leftside */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] Nue-text'>

        <div className='text-xl font-semibold sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Larst name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Street name'/>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>

      </div>

      {/* right */}

      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
            <CartTotal />
        </div>

        <div className='mt-12 font-semibold'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setMethod('stripe')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img className='h-8 mx-5' src={assets.stripe_icon} alt="" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-10 mx-5' src={assets.razorpay_icon} alt="" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-sm text-gray-500 font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white Nue-text text-sm px-16 py-3 active:bg-gray-600'>PLACE ORDER</button>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default PlaceOrder