"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../cards/SliderCard";
import ScreenContainer from "./ScreenContainer";
import SimpleHeadingandText from "./SimpleHeadingandText";
const GeneralCardSlider: React.FC<any> = ({
  data,
  isOnClickRoute = false,
  sideBySide = false,
  //tablet prop un case k leye jahn tab view py 2 cards show krne with pagiantion
  tablet = false,
  //hover is for cards that will have no hover effect like 1000-nights-camp > gallery section
  hover = true,
}) => {
  const swiperRef = useRef<any | null>(null);
  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <SimpleHeadingandText
          data={{
            title: data?.title,
            para: data?.para,
          }}
          sideBySide={sideBySide}
        />
        <div
          className={`mt-[50px] ${tablet ? "tab-pag" : ""}`}
        >
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
                slidesPerView: tablet ? 2 : 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data?.cardData?.map(
              (value: any, index: number) => (
                <SwiperSlide key={index}>
                  <SliderCard
                    data={value}
                    isOnClickRoute={isOnClickRoute}
                    hover={hover}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default GeneralCardSlider;
