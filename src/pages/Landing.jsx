import React from 'react'
import Home from '../components/Home'
import Collaborators from '../components/Collaborators'
import Features from "../components/features"
import Goods from "../components/Goods"
import HappyCustomers from '../components/Testimonials'
import Newsletter from '../components/newsLetter'
import Benefits from '../components/services'


function LandingPage() {
  return (
    <div>
              <Home/>
      <Collaborators/>

      <Features/>
      <Goods/>
      <HappyCustomers/>
      <Benefits/>
      <Newsletter/>
        </div>
  )
}

export default LandingPage