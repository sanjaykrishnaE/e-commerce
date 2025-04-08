import React, { useState } from 'react'

function Login() {

    const [currentState, setCurrentState] = useState('Sign Up');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

  return (
   <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ' action="">
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='Nue-text text-3xl font-semibold'>{currentState}</p>
    </div>
    { currentState === 'Sign In' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name'/>}
    <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' />
    <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' />
    <div className='w-full flex justify-between Nue-text text-sm font-semibold mt-[-8px]'>
        <p className='cursor-pointer' >Forgot Password?</p>
        {
            currentState === 'Sign In'
            ? <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={()=> setCurrentState('Sign In')} className='cursor-pointer'>Already have an account? Sign In</p>
        }
    </div>
    <button className='Nue-text bg-black text-white font-semibold px-8 py-2 mt-4 '>{currentState === 'Sign In' ? 'Sign In' : 'Sign Up'}</button>
   </form>
  )
}

export default Login