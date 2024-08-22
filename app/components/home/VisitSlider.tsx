"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VisitSliderCard from "./VisitSliderCard";
import "./VisitSwiper.css";

const VisitSlider: React.FC<any> = ({ locale }) => {
  const swiperRef = useRef<any | null>(null);

  const aboutOman: any = [
    {
      id: 1,
      title: "Transportation",
      serviceIcon: "https://visitoman.s3.me-south-1.amazonaws.com/transportation_9d8d8c97a9.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/transportation_b4b72fa930.png",
      imgSrc: "/assets/images/home/visit-slider/transportation.png",
      link:"/transportation"

    },
    {
      id: 2,
      title: "Accommodation",
      serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/accomodation_4dbfe317f7.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/accomodations_b4084f20cc.png",
      imgSrc: "/assets/images/home/visit-slider/accommodation.png",
      link: "/accomodation"
    },
    {
      id: 3,
      title: "Flights",
      serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/flight_5b724023b0.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/flight_9fee1cf81b.png",
      imgSrc: "/assets/images/home/visit-slider/flights.png",
      link: "/flights"
    },
    {
      id: 4,
      title: "Tours",
      serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/tours_17aab5d670.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/tours_88cc016a88.png",
      imgSrc: "/assets/images/home/visit-slider/tours.png",
      link: "/tours"
    },
    {
      id: 5,
      title: "Attraction",
      serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/attraction_b29200e215.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/attractions_38d852c54c.png",
      imgSrc: "/assets/images/home/visit-slider/attractions.png",
      link:"/attractions"
    },
    {
      id: 6,
      title: "Dining",
      serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/restaurant_2_8568093627.svg",
      // imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/Rectangle_42177_b4f727aee9.png",
      imgSrc: "/assets/images/home/visit-slider/dining.png",
      link: "/dining"
    }, 
    //    {
    //   id: 4,
    //   title: "Tours",
    //   serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/tours_17aab5d670.svg",
    //   imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/tours_88cc016a88.png",
    //   link: "/tours"
    // },
    // {
    //   id: 5,
    //   title: "Attraction",
    //   serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/attraction_b29200e215.svg",
    //   imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/attractions_38d852c54c.png",
    //   link:"/attractions"
    // },
    // {
    //   id: 6,
    //   title: "Dining",
    //   serviceIcon:"https://visitoman.s3.me-south-1.amazonaws.com/restaurant_2_8568093627.svg",
    //   imgSrc:"https://visitoman.s3.me-south-1.amazonaws.com/Rectangle_42177_b4f727aee9.png",
    //   link: "/dining"
    // },
    
   
   

  ];

  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <div className="swiper-container visitOman">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          loopAdditionalSlides={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          
          touchRatio= {0}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            scale: 0.9,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.25,
              spaceBetween: 10,
            },
            391: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Autoplay,
          ]}
          className="swiper_container"
        >
          {aboutOman.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <VisitSliderCard data={item} key={index} />
              
            </SwiperSlide>
          ))}
           {aboutOman.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <VisitSliderCard data={item} key={index} />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VisitSlider;

