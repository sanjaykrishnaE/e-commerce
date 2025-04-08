import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collections() {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter ] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
     if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
     } else {
      setCategory(prev => [...prev, e.target.value])
     }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
  }

  const sortProducts = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':
       setFilterProduct(filterProductCopy.sort((a,b) => (a.price - b.price))); 
        break;

      case 'high-low':
       setFilterProduct(filterProductCopy.sort((a,b) => (b.price - a.price)));
       break;  
    
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
     setFilterProduct(products)
  },[])

  useEffect(() => {
      applyFilter();
  },[category, subCategory, search, showSearch, products]);
  
  useEffect(()=> {
   sortProducts();
  },[sortType])




  return (
    <div className='px-10 '>
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options  */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='m-2 text-xl Nue-text font-extrabold flex items-center cursor-pointer gap-2 '>FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
      <div className={` border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='Nue-text font-bold mb-3 text-sm'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
          </p>

        </div>

       </div>

       {/* subcat filter */}

       <div className={` border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='Nue-text font-bold mb-3 text-sm'>PRODUCT TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Sneaker'} onChange={toggleSubCategory} />Sneakers
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Bask-sneaker'} onChange={toggleSubCategory} />Basketball Sneaker
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Cap'} onChange={toggleSubCategory} />Caps
          </p>

        </div>

       </div>

      </div>

      {/* right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4 '>
          <Title text1={''} text2={'COLLECTIONS'} />

          {/* sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-1 border-gray-300 Nue-text font-bold text-sm px-2'>
            <option value="relavent">RELEVENT</option>
            <option value="low-high">PRICE(LOW TO HIGH)</option>
            <option value="high-low">PRICE(HIGH TO LOW)</option>
          </select>
          
        </div>

        {/* map products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }

        </div>

      </div>

    </div>

    </div>
  )
}

export default Collections