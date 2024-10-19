import React from 'react'
import Home from '../components/Home'
import Collaborators from '../components/Collaborators'
import Features from "../components/features"
import Goods from "../components/Goods"
import HappyCustomers from '../components/Testimonials'
import Newsletter from '../components/newsLetter'
import Benefits from '../components/services'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
      <Navbar/>
          <Home/>
      <Collaborators/>
      <Features/>
      <Goods/>
      <HappyCustomers/>
      <Benefits/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default LandingPage