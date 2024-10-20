import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Updates from '../components/Updates';
import Promotions from '../components/Promotions';
import CenteredTextNewsCarousel from '../components/carousel';
import Benefits from '../components/services';


function NewsPage() {
  
    

  return (
    <>
      <Navbar />
      
    <div >
      <CenteredTextNewsCarousel/>

      <Updates />
<Promotions/>
<Benefits/>
    </div>
    <Footer />

    </>
  );
}

export default NewsPage;
