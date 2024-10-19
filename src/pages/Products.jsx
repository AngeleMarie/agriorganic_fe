import React from 'react';
import Sidebar from '../components/SideBar.jsx'
import DiscountBanner from '../components/DiscountBanner.jsx';
import FlashSales from '../components/FlashSales.jsx';
import BrowseByCategory from '../components/BrowseByCategories.jsx';
import BestSellingPesticides from '../components/BestSellingPesticides.jsx';
import EnhanceFertilityBanner from '../components/EnhanceFertilityBanner.jsx';
import ProductShowcase from '../components/ProductShowcase.jsx';
import NewArrivals from '../components/NewArrivals.jsx';
import Benefits from '../components/services.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Products() {
  return (
    <div className="bg-white min-h-screen ">
      <Navbar/>
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row my-24">
          <Sidebar />
          <main className="md:w-3/4 md:ml-8">
            <DiscountBanner />
            <FlashSales />
            <BrowseByCategory />
            <BestSellingPesticides />
            <EnhanceFertilityBanner />
            <div className="flex items-center my-12">
        <div className="w-2 h-8 bg-other-green mr-2"></div>
        <h3 className="text-lg font-semibold text-other-green">Our Products</h3>
      </div>
            <ProductShowcase title="Explore Our Products" />
            <NewArrivals />
          </main>
        </div>
      </div>
      <Benefits/>
      <Footer/>

    </div>
  );
}

