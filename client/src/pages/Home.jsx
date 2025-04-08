import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import Bestseller from '../components/Bestseller'
import Policy from '../components/Policy'

function Home() {
  return (
    <div>
      <Hero />
      <div className='p-10'>
      <NewArrivals />
      <Bestseller />
      <Policy />
      </div>
      
    </div>
  )
}

export default Home