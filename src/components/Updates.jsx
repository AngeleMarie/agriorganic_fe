import { useEffect, useState } from 'react';
import { Clock, ArrowRight } from "lucide-react";

export default function Updates() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://agriorgainc-be.onrender.com/api/v1/news'); // Match backend endpoint
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase font-semibold text-center text-md text-other-green">TRENDING</p>
        <p className="text-4xl font-bold text-center mb-4 text-main-green">Latest News</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-8">
          {newsItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.picture || '/default-image.jpg'}
                  alt={item.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-main-green/70 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-other-green my-3 line-clamp-2">{item.headline}</h3>
                <p className="text-gray-600 mb-4 text-justify line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-main-green">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <a href="/" className="text-other-green hover:underline underline-offset-2 flex items-center transition-colors duration-300">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
