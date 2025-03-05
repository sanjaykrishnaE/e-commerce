import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NewArrivals from "./pages/NewArrivals"
import Contact from "./pages/Contact"
import PlaceOrder from "./pages/PlaceOrder"
import Products from "./pages/Products"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="about" element={<About/>} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/productId" element={<Products />}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />

      </Routes>

    </div>
      
    </>
  )
}

export default App
