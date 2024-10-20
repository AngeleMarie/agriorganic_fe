import React from 'react'

export default function HappyCustomers() {
  const testimonials = [
    {
      name: 'Sarah T.',
      text: 'Exceptional Quality!',
      rating: 5,
      desc: "Since using Agriorganic, my crops have thrived like never before. The nutrients are top-notch, and my soil health has significantly improved.",
      prof: "profile.png"
    },
    {
      name: 'David M.',
      text: 'Outstanding Service!',
      rating: 5,
      desc: "The team at Agriorganic is incredibly supportive and knowledgeable. They helped me choose the right products for my needs, and their customer service is unmatched.",
      prof: "profile.png"
    },
    {
      name: 'Emily R.',
      text: 'A Game Changer!',
      rating: 5,
      desc: "Agriorganic has transformed my gardening business. Their eco-friendly products are effective and easy to use, making my work much more enjoyable.",
      prof: "profile.png"
    },
  ];
  
  
    return (
      <div className="py-20 bg-white relative">
        <div className="container mx-auto my-4">
        <p className='uppercase font-semibold text-center text-md text-other-green  '>testimonials</p>
        <p className="text-4xl font-bold text-center mb-6  capitalize text-main-green">Our happy customers</p>
        <p className='text-blackie text-center p-2'>Laoreet interdum phasellus ultrices id amet. Amet nibh varius fames vulputate. Gravida placerat velit amet.</p>
        <img src="ellipse.svg" alt="ellipse" className='absolute top-12 left-12' />
          <div className="flex flex-row gap-x-12 justify-center  my-4">
            <img src="left.svg" alt="leftie" />
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative w-1/5 bg-white rounded-3xl shadow-md p-4">
                <img src="quote.svg"   className="absolute top-0 right-0" alt="quote" />
                <div className="items-center">
                    <img src={testimonial.prof}  alt="profile" className="w-12 h-12  rounded-full mx-auto my-4"/>
                    <div className='text-other-green text-center '>
                      <p className="font-semibold text-other-green text-2xl">{testimonial.name}</p>
                      <p className="font-light capitalize">verified since 12/2024</p>
                      <div className="flex mx-24">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                <div className="p-6 ">
                  <p className="mb-4 font-semibold text-other-green text-center">{testimonial.text}</p>
                  <p className="mb-4 text-blackie/60 text-justify mx-4  ">{testimonial.desc}</p>

                                  </div>
              </div>
            ))}
          <img src="right.svg" alt="leftie" />

          </div>
        </div>
      </div>
    )
  }