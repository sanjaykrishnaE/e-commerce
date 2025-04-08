import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='px-[150px]'>

      <div className='Nue-text text-2xl text-center font-semibold pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 Nue-text font-medium'>  
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
        <p>Our name, <b>“SneakHub”</b> it represents the coming together of different perspectives or tastes bound together by the love for sneakers & street culture.</p>
        <p>As a community-first sneaker and streetwear boutique in India, we aim to be zeitgeists. With our culture-to-commerce approach, we endeavour to be at the forefront of movements rooted in music, art, fashion and more.</p>
        <b className='font-semibold'>Our mission</b>
        <p>Through our platform and reach, we champion inclusivity, individuality and creative expression. Collaborating with creators from all over India and across the world, we create impactful stories and editorial content.</p>
        </div>
      </div>
    </div>
  )
}

export default About