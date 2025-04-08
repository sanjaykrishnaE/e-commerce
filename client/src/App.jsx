import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./components/Login"

import Contact from "./pages/Contact"
import PlaceOrder from "./pages/PlaceOrder"
import Products from "./pages/Products"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"
import Collections from "./pages/Collections"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify';


function App() {
  
  const location = useLocation();

  return (
    <>
    {/* <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'></div> */}
    <div >
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/:productId" element={<Products />}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />

      </Routes>
      {
        location.pathname !== "/login" && (
          <div className='p-10' >
          <Footer />
          </div>
        )
      }
      
    </div>
      
    </>
  );
}

export default App
