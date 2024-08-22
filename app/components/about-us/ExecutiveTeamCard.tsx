"use client";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";

import {ScreenContainer,SimpleHeadingandText} from "@/app/components/shared";

import TeamCard from "../cards/TeamCard";

const ExecutiveTeamCard: React.FC<any> = ({ data,tablet=true }) => {
  const swiperRef = useRef<any | null>(null);


  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <SimpleHeadingandText
          data={{
            title: data?.title,
            para: "",
          }}
        />
        <div className={`mt-[40px] ${tablet ? "tab-pag" : ""}`}>
        <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            modules={[Autoplay,Pagination]}
            pagination={{
              clickable: true,
              // el: ".custom-pagination-events",
            }}
            speed={2000}
            autoplay={{
              delay: 1, // 3 seconds
              disableOnInteraction: false,
            }}
            loop={true}
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
                slidesPerView:tablet?2: 2.5,
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
                  <TeamCard data={value} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>

        {/* <div className="hidden lg:flex lg:flex-wrap lg:justify-between lg:gap-y-4 lg:mt-[16px] md:mt-[30px] md:gap-y-2">
          {data?.cardData?.map(
            (value: any, index: number) => (
              <TeamCard data={value} />
            ),
          )}
        </div> */}




      </ScreenContainer>
    </section>
  );
};

export default ExecutiveTeamCard;
