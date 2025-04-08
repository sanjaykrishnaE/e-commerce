import React from 'react'
import { assets } from '../assets/assets'

function Policy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-black'>

        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='Nue-text font-semibold'>Exchange Policy</p>
            <p className='Nue-text text-gray-400'>We offer free exchange policy</p>
        </div>

        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='Nue-text font-semibold'>7 days return Policy</p>
            <p className='Nue-text text-gray-400'>We provide 7 days return policy</p>

        </div>

        <div>
            <img src={assets.support_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='Nue-text font-semibold'>Best customer support</p>
            <p className='Nue-text text-gray-400'>We provide 24/7 customer support</p>

        </div>

    </div>
  )
}

export default Policy