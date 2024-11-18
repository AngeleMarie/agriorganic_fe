  import React,{useState} from 'react'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import ProtectedRoute from './components/Protected'
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
import Navbar from './components/navbar'
import Footer from './components/Footer'

  function App() {
    const [currentUser, setCurrentUser] = useState(null);

    return (
      <>
       
        <div className="pt-8"> 
          <Router>
  
            <Navbar/>

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
              <Route 
              path="/wishlist" 
              element={<WishlistAndCategories user={currentUser} />
            
              } 
            />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stock" element={<AdminProductList />} />
              <Route path="/customers" element={<Transactions />} />
            </Routes>
            <Footer/>
          </Router>
        </div>
      </>
    )
  }

  export default App;
