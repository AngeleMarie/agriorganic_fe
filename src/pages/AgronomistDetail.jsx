import React from 'react';
import { Phone } from 'lucide-react';



  
const Hero = () => {
  return (
    <section className="relative h-[500px] bg-black/80">
      <img
        src="/services.jpg?height=300&width=1200"
        alt="Farmer in field"
        width={1200}
        height={300}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="relative container mx-32 px-4 h-full w-1/2 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-other-green mb-4">Driving growth with expert organic solutions</h1>
  <p className='text-white text-xl font-md'>Explore our tailored services for sustainable farming, including expert agronomist consultations, precision crop management, and innovative biopesticides. Discover how we can help you achieve healthier yields and a greener future today.</p>

      </div>

    </section>
  );
};

// Blog Card Component
const BlogCard = ({ img, date, comments, title, excerpt }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full "
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        </div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="bg-other-green flex gap-x-2 text-white px-4 py-2 rounded-md hover:bg-green-700  hover:underline transition-colors">
          <Phone className='h-4 mt-1'/>
          Reach Out
        </button>
      </div>
    </article>
  );
};

// Blog Grid Component
const BlogGrid = () => {
  const posts = [
    {
      img: "/service4.png",
      date: "20 Feb 2023",
      comments: 0,
      title: "Agroecological and climate-smart solution advocacy",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      img: "/service1.png?height=300&width=400",
      date: "18 Feb 2023",
      comments: 0,
      title: "Agricultural Research and Innovation ",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      img: "/service.png?height=300&width=400",
      date: "18 Feb 2023",
      comments: 0,
      title: "Farmers capacity Building and Advisory services",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      img: "/service3.png?height=300&width=400",
      date: "16 Feb 2023",
      comments: 0,
      title: "Sustainable organic inputs production",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};


// Main Component
const ourServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <Hero />
      <div className='mt-12'>
      <p className='uppercase  text-center text-sm  text-other-green'>CULTIVATING EXCELLENCE</p>
        <p className="text-4xl font-bold text-center mb-6 text-main-green">Our Services</p>
        <p className='text-main-green text-lg text-center w-2/3 mx-auto py-2'>
        We provide innovative agricultural solutions tailored to empower farmers and agribusinesses. From cutting-edge technology to expert support, we are dedicated to nurturing growth and sustainability.
          </p>
      </div>
      
      <BlogGrid />
    </div>
  );
};

export default ourServices;