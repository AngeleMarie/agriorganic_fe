import React from 'react'



export default function Benefits() {
  const features = [
    { icon: 'delivery.svg', title: 'FREE AND FAST DELIVERY', description: 'Free delivery for all orders over $140' },
    { icon: 'customer.svg', title: '24/7 CUSTOMER SERVICE', description: 'Friendly 24/7 customer support' },
    { icon: 'flexible.svg', title: 'MONEY BACK GUARANTEE', description: 'We return money within 30 days' },
    { icon: 'flexible.svg', title: 'Flexible Payment', description: 'We return money within 30 days' }

  ]

  return (
    <div className="py-20 bg-other/10 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between text-other-green">
          {features.map((feature, index) => (
            <div key={index} className="w-1/3 px-4 text-center">
              <img src={feature.icon} alt="icons" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}