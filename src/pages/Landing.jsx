import React from 'react'
import Home from '../components/Home'
import Collaborators from '../components/Collaborators'
import Features from "../components/features"
import HappyCustomers from '../components/Testimonials'
import Newsletter from '../components/newsLetter'


function LandingPage() {
  return (
    <div>
              <Home/>
      <Collaborators/>

      <Features/>
      <HappyCustomers/>
  
      <Newsletter/>
        </div>
  )
}

export default LandingPage