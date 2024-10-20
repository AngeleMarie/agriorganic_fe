import { Clock, ArrowRight } from "lucide-react"


const newsItems = [
  {
    id: 1,
    title: "AI Breakthrough: New Model Understands Context Better Than Ever",
    excerpt: "Researchers have developed an AI model that comprehends context with unprecedented accuracy, potentially revolutionizing natural language processing.",
    category: "Technology",
    date: "2023-05-15",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=350&fit=crop"
  },
  {
    id: 2,
    title: "Global Initiative Launched to Clean Up Ocean Plastic",
    excerpt: "A coalition of countries and organizations has announced a massive effort to remove plastic waste from the world's oceans, targeting completion by 2030.",
    category: "Environment",
    date: "2023-05-14",
    imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&h=350&fit=crop"
  },
  {
    id: 3,
    title: "New Study Reveals Benefits of 4-Day Work Week",
    excerpt: "A large-scale study has shown that implementing a 4-day work week can lead to increased productivity and employee satisfaction without negatively impacting business outcomes.",
    category: "Business",
    date: "2023-05-13",
    imageUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&h=350&fit=crop"
  },
  {
    id: 4,
    title: "Government Initiatives to Support Organic Farmers in Rwanda",
    excerpt: "The Rwandan government has launched new programs aimed at supporting organic farmers with subsidies and training, promoting sustainable agricultural practices across the nation.",
    category: "Policy",
    date: "2024-10-08",
    imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&h=350&fit=crop"
  }
]

export default function Updates() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <img src="ellipse.svg" alt="ellipse" className="absolute left-0" />
      <img src="smallie.svg" alt="ellipse" className="absolute right-0 bottom-0" />

      <div className="max-w-7xl mx-auto">
      <p className='uppercase font-semibold text-center text-md text-other-green  '>TRENDING</p>
        <p className="text-4xl font-bold text-center mb-4 text-main-green">Latest News</p>
        <p className='text-blackie text-center p-3'>Laoreet interdum phasellus ultrices id amet. Amet nibh varius fames vulputate. Gravida placerat velit amet.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-4 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-0 left-0 bg-main-green/70 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-other-green my-3  line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4   text-justify line-clamp-3">{item.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-main-green">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.date}
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
  )
}