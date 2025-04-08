import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    {/* <img src="" alt="" /> */}
                    <Link to='/'>
                        <h3 className='mb-5'>SneakHub</h3> 
                        </Link>
                        <p className='w-full md:w-2/3 Nue-text text-gray-600'>
                            A marketplace which helps buyers find their desired kicks and the sellers to find the buyers.
                        </p>
                    
                </div>

                <div>
                    <p className='Nue-text text-xl font-extrabold mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 Nue-text text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>

                <div>
                    <p className='Nue-text text-xl font-extrabold mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 Nue-text text-gray-600'>
                      <li>+91- 000000000</li>
                      <li>@sneakhub.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='Nue-text py-5 text-sm text-center'>Copyright 2022@ SneakHub - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer