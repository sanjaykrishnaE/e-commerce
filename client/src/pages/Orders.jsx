import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

function Orders() {

  const { products, currency} = useContext(ShopContext);


  return (
    <div className='px-[150px]'>
    <div className='border-t pt-16'>

      <div className='text-2xl font-semibold'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          products.slice(1,4).map((item,index) => (
            <div key={index} className='py-4 border-t border-b Nue-text text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm font-semibold'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-bold'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-sm'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: 9</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-500'>24, Mar, 2025</span></p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-600'></p>
                  <p className='text-sm md:text-base'>Ready to ship.</p>
                  
                </div>
                <button className='border px-4 py-2 text-sm font-semibold rounded-sm mr-5'>Track Order</button>
              </div>
            </div>

          ))
        }
      </div>

    </div>

    </div>
  )
}

export default Orders