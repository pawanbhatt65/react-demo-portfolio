import React, { Fragment } from "react";
import ShapeTwo from "../../assets/shape-2.png";
import TestimonialIcon from "../../assets/testimonials-icon.svg";
import ShapeOne from "../../assets/shape-1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import "./Testimonial.css";
import { testimonials } from "../../Data";

const Testimonial = () => {
  return (
    <Fragment>
      <section className="testimonials section" id="testimonial">
        <h2 className="section__title text-cs">Testimonials</h2>
        <p className="section__subtitle">
          My <span>Customers Say</span>
        </p>

        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="testimonials__container container mySwiper"
        >
          {testimonials.map(({ id, img, name, author, description }, index) => {
            return (
              <SwiperSlide
                className="testimonials__item card card-one"
                key={index}
              >
                <div className="testimonial__header">
                  <div className="testimonial__icon">
                    <img src={TestimonialIcon} alt="Testimonial icon" />
                  </div>
                  <img src={img} alt="Image" className="testimonial__img" />
                </div>
                <p className="testimonial__description">{description}</p>
                <h3 className="testimonial__name">{name}</h3>
                <p className="testimonial__author">{author}</p>
                <img src={ShapeTwo} alt="" className="shape c__shape" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="section__deco deco__right">
          <img src={ShapeOne} alt="shape one" className="shape" />
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
