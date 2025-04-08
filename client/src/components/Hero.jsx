import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div Link className='flex flex-col sm:flex-row border border-gray-400'>
      <Link to={'/collections'} >
      <img src={assets.hero3_img} alt="" />
      </Link>
    </div>
  )
}

export default Hero