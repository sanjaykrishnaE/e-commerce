import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {

  const { products, currency, cartItems, updateQuantity, navigate }  = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);


  useEffect(()=> {
       const tempData = [];
       for ( const items in cartItems ) {
        for ( const item in cartItems[items]) {
          if ( cartItems[items][item] > 0 ) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            })
          }
        }
       }
       setCartData(tempData);
  },[cartItems])

  return (
    <div className='px-[100px]'>
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3 font-bold'>
        <Title text1={'YOUR'} text2={'CART'} />

        <div>
          {
            cartData.map((item,index) => {

              const productData = products.find((product)=> product._id === item._id);

              return (
                <div key={index} className='py-4 border-b bordeer-t Nue-text text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                    <div>
                      <p className='  text-sm sm:text-lg font-semibold'>{productData.name}</p>
                      <div className='flex items-center mt-2 gap-5'>
                        <p className=' text-sm'>{currency}{productData.price}</p>
                        <p className=' text-sm px-2 sm:px-3 sm:py-1 border bg-slate-50 '>{item.size}</p>
                      </div>
                    </div>

                  </div>
                  <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value)) } className='border text-sm max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                  <img onClick={()=> updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              )
            })
          }
        </div>

        <div className='flex justify-start my-20'>
          <div className='w-full sm:w-[450px] '>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('place-order')} className='bg-black text-white Nue-text text-sm my-8 px-8 py-3 active:bg-gray-600'>CHECKOUT</button>
            </div>
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Cart