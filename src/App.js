import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandigPage from './pages/Landing'
import About from './pages/about'
import Products from './pages/Products'
import Contact from "./pages/Contact"
import NewsPage from "./pages/News"

import Register from './pages/Register'
import Login from './pages/Login'
import Otp from './pages/Otp'
import ForgotPassword from './pages/ForgotPassword'
import ProductDetail from './pages/ProductDetail'
import AgronomistDetail from './pages/AgronomistDetail'
import BillingDetails from './pages/billingDetails'
import MyCart from './pages/cart'
import WishlistAndCategories from './pages/wishlist'
import Dashboard from './pages/dashboard'
import AdminProductList from './pages/stock'
import Transactions from './pages/Transactions'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full text-other-green font-light py-1 text-center bg-white z-50 '>
        Summer Sale For Eco-Friendly Biopesticides - OFF 50%!
        <span className='underline underline-offset-2 font-medium px-2'>Shop Now</span>
      </div>
      <div className="pt-8"> 
        <Router>
          <Routes>
            <Route path="/" element={<LandigPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<ForgotPassword />} />
            <Route path="/verify" element={<Otp />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="/services" element={<AgronomistDetail />} />
            <Route path="/billing" element={<BillingDetails />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/wishlist" element={<WishlistAndCategories />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stock" element={<AdminProductList />} />
            <Route path="/customers" element={<Transactions />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
