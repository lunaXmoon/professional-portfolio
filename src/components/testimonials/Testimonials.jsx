import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avtar-1.jpg';
import AVTR2 from '../../assets/avatar-2.jpg';
import AVTR3 from '../../assets/avtar-1.jpg';
import AVTR4 from '../../assets/avatar-2.jpg';
import AVTR5 from '../../assets/avtar-1.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laboriosam voluptatibus corrupti eum odit consequuntur minima non nesciunt culpa porro earum at aspernatur, dolor natus, voluptates fuga ullam! Ullam.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laboriosam voluptatibus corrupti eum odit consequuntur minima non nesciunt culpa porro earum at aspernatur, dolor natus, voluptates fuga ullam! Ullam.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laboriosam voluptatibus corrupti eum odit consequuntur minima non nesciunt culpa porro earum at aspernatur, dolor natus, voluptates fuga ullam! Ullam.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laboriosam voluptatibus corrupti eum odit consequuntur minima non nesciunt culpa porro earum at aspernatur, dolor natus, voluptates fuga ullam! Ullam.'
  }
]

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>REview from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={Pagination} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt=''/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}
            </small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
