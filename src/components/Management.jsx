'use client';

import { useState, useEffect } from 'react';

const teamMembers = [
  {
    name: 'Eric USENGIMANA',
    role: 'Managing Director',
    image: '/him1.png',
    quote:
      'At our company, we embrace a culture of innovation and excellence. Every day, I am inspired by the dedication and passion that our team brings to our mission. Together, we strive to create solutions that not only meet our customers needs but also make a meaningful impact in our community. Our commitment to quality and integrity is what sets us apart, and I am proud to be part of such a dynamic and forward-thinking organization.',
  },
  {
    name: 'Yvette SHIMO UMURERWA',
    role: 'General Secretary',
    image: '/him2.png',
    quote:
      'I am incredibly proud to be part of a team that values collaboration and transparency. Our collective efforts are focused on creating a positive environment where everyone feels empowered to share their ideas and contribute to our goals. The support and camaraderie among our team members drive us to achieve greater heights, and I am excited to see how we can continue to grow and evolve together.',
  },
  {
    name: 'Giselle MANZI JYAMBERE',
    role: 'Accountant',
    image: '/him3.png',
    quote:
      'Our company stands for more than just success; it embodies a commitment to ethical practices and sustainability. Every day, I witness the remarkable dedication of our team to uphold these values. We are not just striving for financial success but are also committed to making a positive difference in our world. I believe that our efforts will lead to lasting change and inspire others to follow suit.',
  },
  {
    name: 'Pacifique NDUWAYEZU',
    role: 'Site and Operation Manager',
    image: '/him4.png',
    quote:
      'I am continuously amazed by the passion and resilience that our team demonstrates. Together, we tackle challenges head-on and work towards creating an environment that fosters growth and innovation. Our collective vision and shared determination are what propel us forward, and I am excited to be part of a journey that seeks to elevate not only our company but also the communities we serve.',
  },
  {
    name: 'Olivier UKUNZWENIMANA',
    role: 'General Auditor and Advisor',
    image: '/him5.png',
    quote:
      'At the heart of our company is a strong commitment to integrity and excellence. I am inspired by the dedication our team shows in ensuring that we operate with transparency and responsibility. Each day, we strive to build a culture of trust and collaboration, knowing that our efforts will lead to a brighter future for our organization and the people we serve. Together, we are not just achieving our goals; we are setting new standards for what it means to be a responsible corporate citizen.',
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <p className="text-2xl font-bold text-main-green border-t-4 w-32 border-other-green">
          <span className="font-medium">Meet Our</span>
          <br /> Department
        </p>
      </div>

      <div className=" md:p-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 cursor-pointer">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative md:mx-8 lg:mx-16 my-8 md:my-8 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto  sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="mt-4">
                <p className="font-semibold text-xl md:text-xl text-other-green capitalize">
                  {member.name}
                </p>
                <p className="text-black/50 font-light text-lg md:text-lg capitalize">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
