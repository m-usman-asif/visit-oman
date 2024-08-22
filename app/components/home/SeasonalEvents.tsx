"use client";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {EventsCard} from "@/app/components/cards";
import {ScreenContainer,SimpleHeadingandText} from "@/app/components/shared";

const SeasonalEvents: React.FC<any> = ({ data }) => {
  const swiperRef = useRef<any | null>(null);


  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <SimpleHeadingandText
          data={{
            title: "Seasonal Events",
            para: "",
          }}
        />
        <div className="mt-[50px] lg:hidden">
        <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              // el: ".custom-pagination-events",
            }}
            className="custom-swiper"

            onSlideChange={() =>{}
            }
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
            {data?.map(
              (value: any, index: number) => (
                <SwiperSlide key={index}>
                  <EventsCard data={value} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          {/* <div className="custom-pagination mt-[50px] flex justify-center gap-[8px]"></div> */}
        </div>

        <div className="hidden lg:flex lg:flex-wrap lg:justify-between lg:gap-y-4 lg:mt-[16px] md:mt-[30px] md:gap-y-2">
          {data?.map(
            (value: any, index: number) => (
              <EventsCard data={value} />
            ),
          )}
        </div>




      </ScreenContainer>
    </section>
  );
};

export default SeasonalEvents;
