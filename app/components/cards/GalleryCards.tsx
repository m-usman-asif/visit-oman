"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {VisitOmanCard} from "@/app/components/cards";
import {ScreenContainer} from "@/app/components/shared";
const GalleryCards: React.FC<any> = ({ locale, data }) => {
  const swiperRef = useRef<any | null>(null);
  return (
    <section className="my-[80px] lg:my-[60px] md:my-[50px]">
      <ScreenContainer>
        <h2 className="vo-heading mb-[40px]">
          {data?.title}
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            // el: ".custom-pagination-events",
          }}
          className="custom-swiper"
          onSlideChange={() =>{}}
          onSwiper={(swiper) =>
            (swiperRef.current = swiper)
          }
          breakpoints={{
            320: {
              slidesPerView: 1.15,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data?.cardData?.map(
            (item: any, index: number) => (
              <SwiperSlide key={index}>
                <VisitOmanCard data={item} key={index} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </ScreenContainer>
    </section>
  );
};

export default GalleryCards;
