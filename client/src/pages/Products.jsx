import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Products() {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image , setImage] = useState('');
  const [size ,setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=> {
   fetchProductData()
  },[productId, products])

  return productData ? (
    <div className='px-10'>
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>


        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />

              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>

        </div>

        {/* product info */}
        <div className='flex-1'>
          <h2 className='Nue-text text-xl font-medium uppercase '>{productData.category}</h2>
           <h1 className='Nue-text font-bold text-2xl '>{productData.name}</h1>
           <p className='Nue-text text-2xl mt-2 font-semibold '>{currency}{productData.price}</p>
           <div className='flex flex-col gap-4 my-5'>
            <p className='Nue-text font-semibold'>Select Size (UK)</p>
            <div className='flex gap-2'>
              { productData.sizes.map((item,index)=> (
                <button onClick={()=> setSize(item)} className={`border border-black  py-2 px-4 hover:bg-black hover:text-white  ${item === size ? ' bg-black text-white' : ''} `} key={index}>{item}</button>

              ))}

            </div>

           </div>

           <button onClick={()=> addToCart(productData._id,size)} className='Nue-text font-bold bg-black text-white py-3 px-8 text-sm active:bg-gray-600'>ADD TO CART</button>

           <p className='Nue-text text-gray-800 md:w-4/5 mt-5'>{productData.description}</p>

           {/* <hr className='mt-8 sm:w-4/5' /> */}
           <div className=' Nue-text text-sm text-gray-800 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Order will be delivered to you in 4-5 business days.</p>
            <p>Easy return and exchange policy withiin 7-10 days.</p>

           </div>
           


        </div>

      </div>

      {/* description & reviews */}
      {/* <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (101)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 Nue-text  text-sm text-gray-600'>
          <p>Step into the ultimate destination for sneaker enthusiasts! At Sneakhub, we don’t just sell sneakers—we celebrate the culture, the craft, and the community that makes each pair special. </p>
          <p>From iconic classics to the hottest new releases, our curated collection features designs that blend performance, style, and individuality. Whether you're chasing exclusivity or looking for everyday essentials, Sneakhub is where your sneaker journey begins. Discover your perfect match today and let your shoes do the talking—only at Sneakhub.</p>
        </div>

      </div> */}

      {/* related products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


      <div></div>

    </div>
    </div>
  ) : <div className='opacity-0 '>

  </div>
  
}

export default Products