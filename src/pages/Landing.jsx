import React from 'react'
import Home from '../components/Home'
import Collaborators from '../components/Collaborators'
import Features from "../components/features"
import Goods from "../components/Goods"
import HappyCustomers from '../components/Testimonials'
import Newsletter from '../components/newsLetter'
import Benefits from '../components/services'

import Servs from '../components/ourServices'

function LandingPage() {
  return (
    <div>
              <Home/>
      <Collaborators/>
     {/* <Servs/> */}
      <Features/>
      <Goods/>
      <HappyCustomers/>
      <Benefits/>
      <Newsletter/>
        </div>
  )
}

export default LandingPage