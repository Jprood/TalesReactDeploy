import React from 'react';
import Carousel from 'react-elastic-carousel';    
import { useState } from 'react';

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://i.imgur.com/iId3ls3.png"},
    {id: 2, title: 'item #2', img:"https://i.imgur.com/7Ji45Yg.png"},
    {id: 3, title: 'item #3', img:"https://i.imgur.com/7CpCs3c.png"},
    {id: 4, title: 'item #4', img:"https://i.imgur.com/siaSrOC.png"},
    {id: 5, title: 'item #5', img:"https://i.imgur.com/3QSvia2.png"}  
  ])
  return (
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={4000}>
{items.map(item => <div key={item.id}>
<img src={item.img} alt="" /> 

</div>)}
</Carousel>
  )
}

export default CarouselComponent
