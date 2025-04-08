import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

function Login({setToken}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password});
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='bg-white shadow-xl rounded-lg px-8 py-8 max-w-md w-full Nue-text '>
            <div className='text-center mb-8'>
                <h1 className='font-extrabold text-3xl  text-gray-800 mb-2'>Admin Panel</h1>
                <p className='text-gray-600 font-semibold'>Sign in to your account</p>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-6'>
                    <p className='block text-sm font-semibold text-gray-700 mb-2'>Email address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} 
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors' 
                        type="email" 
                        placeholder='your@email.com' 
                        required 
                    />
                </div>

                <div className='mb-6'>
                    <p className='block text-sm font-semibold text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)}  value={password}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors' 
                        type="password" 
                        placeholder='Enter your password' 
                        required 
                    />
                </div>

                

                <button 
                    type="submit" 
                    className='w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                >
                    Sign in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login