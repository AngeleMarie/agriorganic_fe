import React,{useState,useEffect} from 'react';


export default function EnhanceFertilityBanner() {
  const [timeLeft, setTimeLeft] = useState({
    Days: 23,
    Hours: 5,
    Mins: 59,
    Secs: 35
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prevTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <div className="bg-black text-white  mb-8  flex justify-between items-center">
      <div className='px-12'>
        <p className='text-other-green font-semibold py-4'>Categories</p>
        <h2 className="text-3xl font-bold mb-2">Enhance Your Land Fertility</h2>
        <p className="mb-4 text-lg">Boost your crop yield with our premium fertilizers</p>
        <div className="flex space-x-4">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center">
                <div className="bg-white text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  {value.toString().padStart(2, '0')}
                </div>
                <p className="text-xs mt-1">{key}</p>
              </div>
            ))}
          </div>
        <button className="bg-[#266937] hover:bg-other-green px-12 font-medium text-lg py-2 mt-12  text-white">Buy Now</button>
      </div>
      <img src="/fertiliser.png" alt="Fertilizer Bottle" className="w-1/2 h-auto object-cover" />
    </div>
  );
}