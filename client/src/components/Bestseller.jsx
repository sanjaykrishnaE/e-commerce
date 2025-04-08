import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function Bestseller() {

    const { products } = useContext(ShopContext)

    const [bestSeller, SetBestSeller] = useState([])

    useEffect(() => {
          const bestProduct = products.filter((item) => (item.bestseller));
          SetBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl font-[5rem] py-8'>
        
        <Title text1={'TRENDING'} text2={'SNEAKERS'}/>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }

      </div>
    </div>
  )
}

export default Bestseller