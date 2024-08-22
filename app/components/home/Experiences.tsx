"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {ExpereinceCard} from "@/app/components/cards";
import {SimpleHeadingandText,ScreenContainer} from "@/app/components/shared";
const Experiences: React.FC<any> = ({ locale }) => {
  const swiperRef = useRef<any | null>(null);

  const aboutOman: any = [
    {
      id: 1,
      title: "Adventure",
      // iconSrc:        "https://visitoman.s3.me-south-1.amazonaws.com/experience_adventure_94484c063d.svg",
      iconSrc: "/assets/images/home/experience/adventure.svg",
      vidSrc: "https://visitoman.s3.me-south-1.amazonaws.com/f8de_497c_a86d_027b5d87bf11_eb828f7d62.mp4",
      desc:"Rugged mountains and pristine beaches to hidden wadis and breathtaking deserts, Oman offers an unparalleled canvas for adventurous travellers."
    },
    {
      id: 2,
      title: "Culture",
      // iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/experience_culture_ae2f690ae6.svg",
      iconSrc: "/assets/images/home/experience/culture.svg",
      vidSrc: "https://visitoman.s3.me-south-1.amazonaws.com/68a0_4cb9_8b51_20b15d2e6b84_b1c9e1b6ad.mp4",
      desc:"Rugged mountains and pristine beaches to hidden wadis and breathtaking deserts, Oman offers an unparalleled canvas for adventurous travellers."
    },
    {
      id: 3,
      title: "Nature & Wildlife",
      // iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/experience_nature_3b094b17f6.svg",
      iconSrc: "/assets/images/home/experience/nature-wildlife.svg",

      vidSrc: "https://visitoman.s3.me-south-1.amazonaws.com/7b0f_4af5_82c2_6e2266e212e7_e44a95b0e4.mp4",
      desc:"A utopia for nature and wildlife enthusiasts - thrilling hikes and sandboarding down dunes to camping under the stars."
    },
    {
      id: 4,
      title: "Sports",
      // iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/experience_sports_b3d22a7ee7.svg",
      iconSrc: "/assets/images/home/experience/sports.svg",
      vidSrc: "https://visitoman.s3.me-south-1.amazonaws.com/f8de_497c_a86d_027b5d87bf11_eb828f7d62.mp4",
      desc:"A playground of outdoor sporting activities awaits - from scuba diving and white-water rafting to serene kayaking journeys through turquoise waters."
    },
    {
      id: 5,
      title: "Food & Beverage",
      // iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/experience_food_f5a3d370da.svg",
      iconSrc: "/assets/images/home/experience/food-beverage.svg",
      vidSrc: "https://visitoman.s3.me-south-1.amazonaws.com/68a0_4cb9_8b51_20b15d2e6b84_b1c9e1b6ad.mp4",
      desc:"Indulge in a symphony of spices - from cooking classes and local farm visits to dining in the desert."
    },
  ];

  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px] ">
      <ScreenContainer>
      <SimpleHeadingandText
          data={{
            title: "Experiences",
            para: "",
          }}
        />
        <div className="mt-[50px]">
          <Swiper
          className="custom-swiper"
            spaceBetween={20}
            slidesPerView={"auto"}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              // el: ".custom-pagination",
            }}
            onSlideChange={() =>{}
            }
            onSwiper={(swiper) =>
              (swiperRef.current = swiper)
            }
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {aboutOman.map(
              (
                item: any,
                index: React.Key | null | undefined,
              ) => (
                <SwiperSlide key={index}>
                  <ExpereinceCard data={item} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          {/* <div className="custom-pagination mt-[50px] flex justify-center gap-[8px] "></div> */}
        </div>
      </ScreenContainer>
    </section>
  );
};

export default Experiences;
