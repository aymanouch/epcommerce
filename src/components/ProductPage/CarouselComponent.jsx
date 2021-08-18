import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import {Carousel} from "react-responsive-carousel";
function CarouselComponent({assets}) {
    return (
        <Carousel showArrows={false} dots={false}>
       {
           assets.map(item => (
               <div key={item.id} >
                   <img src={item.url} alt={item.name} />
               </div>
           ))
       }
    </Carousel>
    );
}

export default CarouselComponent
