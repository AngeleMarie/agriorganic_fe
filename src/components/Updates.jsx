import { Clock, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Innovative Research in Vermicomposting Boosts Soil Fertility",
    excerpt: "AGRIORGANIC researchers unveil breakthroughs in vermicomposting techniques, enhancing soil health and productivity for sustainable farming.",
    category: "Services",
    date: "2023-05-15",
    imageUrl: "service.png"
  },
  {
    id: 2,
    title: "Organic Products Revolutionize Pest Control for Farmers",
    excerpt: "New biopesticide products developed by AGRIORGANIC are empowering farmers to combat pests naturally while preserving biodiversity.",
    category: "Products",
    date: "2023-05-14",
    imageUrl: "env.jpg?height=100width=300"
  },
  {
    id: 3,
    title: "Educational workshop about Biopesticides",
    excerpt: "AGRIORGANIC hosts workshops to educate farmers about the benefits of vermicomposting and biopesticides, promoting sustainable agricultural practices.",
    category: "Education",
    date: "2023-05-13",
    imageUrl: "home3.jpg"
  },
  {
    id: 4,
    title: "AGRIORGANIC collaborates with ACORD Rwanda",
    excerpt: "ACORD Rwanda in partnership with AGRIORGANIC aim to support research and adoption of eco-friendly farming techniques.",
    category: "Partnership",
    date: "2024-10-08",
    imageUrl: "home2.jpg"
  }
];

export default function Updates() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <img src="ellipse.svg" alt="ellipse" className="absolute left-0 hidden md:block" />
      <img src="smallie.svg" alt="ellipse" className="absolute right-0 bottom-0" />

      <div className="max-w-7xl mx-auto">
        <p className="uppercase font-semibold text-center text-md text-other-green">TRENDING</p>
        <p className="text-4xl font-bold text-center mb-4 text-main-green">Latest News</p>
        <p className="text-blackie text-center p-3">Stay informed with the latest updates and trends in agriculture, sustainability, and innovation. Our trending news highlights crucial developments and insights that impact the Agriorganic community and beyond.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-main-green/70 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-other-green my-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-justify line-clamp-3">{item.excerpt}</p>
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
  );
}
