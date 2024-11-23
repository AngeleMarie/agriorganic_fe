import React from 'react';
import Updates from '../components/Updates';
import Promotions from '../components/Promotions';
import CenteredTextNewsCarousel from '../components/carousel';
import Benefits from '../components/services';


function NewsPage() {
  
    

  return (
    <>
  
      
    <div >
      <CenteredTextNewsCarousel/>

      <Updates />
<Promotions/>

    </div>

    </>
  );
}

export default NewsPage;
