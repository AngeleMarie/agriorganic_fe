import React from 'react'
import Sidebar from '../components/adminSide'
import TopBar from '../components/topBar' 
import Customers from '../components/Customers'

function Transactions() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <TopBar />
      <div className='m-8'>
      <Customers/>

      </div>
      </div>
      </div>
  )
}

export default Transactions