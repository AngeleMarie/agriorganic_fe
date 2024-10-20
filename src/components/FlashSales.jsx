import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ProductShowcase from '../components/ProductShowcase';

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 3, minutes: 23, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    
    <div className="flex space-x-2">
      {Object.entries(time).map(([key, value]) => (
        <div key={key} className="bg-main-green text-white p-2 rounded">
          <span className="font-bold">{value.toString().padStart(2, '0')}</span>
        </div>
      ))}
    </div>
  );
}

export default function FlashSales() {
  return (
    <section className="mb-8">
          <div className="flex items-center my-12">
        <div className="w-2 h-8 bg-other-green rounded-sm  mr-2"></div>
        <h3 className="text-lg font-bold text-other-green">Today's</h3>
      </div>
     
      <div className="flex justify-between items-center mb-4">
      <p className="text-3xl font-bold  text-main-green mb-8"> Flash Sales</p>
        <CountdownTimer />
      </div>
      <ProductShowcase />
      <div className="flex justify-center mt-4">
        <button variant="outline" className="mr-2">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button variant="outline">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}