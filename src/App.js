import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandigPage from './pages/Landing'
import About from './pages/about'
import Products from './pages/Products'
import Navbar from './components/navbar'
import Contact from "./pages/Contact"
import News from "./pages/News"
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
