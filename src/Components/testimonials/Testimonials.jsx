import React from 'react'
import TestimonialData from '../../Data/TestimonialData'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h1 className= 'my-testimonial'>Testimonial</h1>

      <Swiper className="container testimonial-container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable:true}}
       
      >
        {
          TestimonialData.map(({AVATAR, NAME, REVIEW}, index) => {
              return(
                <SwiperSlide key={index} className='client-testimonial'>
          <div className="client-avatar">
            <img src={AVATAR} alt='avatat-one'/>
          </div>
          <h5 className='client-name'>{NAME}</h5>
          <small className='client-message'>{REVIEW}</small>
        </SwiperSlide>
              )
          })
        }
      </Swiper>


    </section>
  )
}

export default Testimonials
