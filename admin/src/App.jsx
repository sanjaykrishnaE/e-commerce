import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import AddProduct from "./pages/AddProduct"
import ListProduct from "./pages/ListProduct"
import Orders from "./pages/Orders"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = 'Rs '


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=> {
     localStorage.setItem('token', token)
  },[token])

  return (
    
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {
        token === ''
        ? <Login setToken={setToken} />
        :  <>
        <Navbar setToken={setToken} />
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/add" element={<AddProduct token={token} />} />
              <Route path="/list" element={<ListProduct token={token}  />} />
              <Route path="/orders" element={<Orders token={token}  />} />
            </Routes>
  
          </div>
  
        </div>
        </>
      }
     
    </div>
    
  )
}

export default App
