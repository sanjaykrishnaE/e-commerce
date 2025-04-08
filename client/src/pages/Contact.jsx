import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className='px-[150px]'>

      <div className='Nue-text text-2xl text-center font-semibold pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='Nue-text my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img } alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Store</p>
          <p className='text-gray-500'>60025 ABC station <br /> &th road, bangalore, India</p>
          <p className='text-gray-500'>Ph: +91 0000000000 <br /> Email: @sneakhub.com</p>
          <p lassName='font-bold text-xl text-gray-800'> Careers at SneakHub</p>
          <p className='text-gray-500'>Learn more.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>

        </div>
      </div>

    </div>
  )
}

export default Contact;