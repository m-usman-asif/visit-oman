"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PartnersCard from "../cards/PartnersCard";
import {ScreenContainer} from "@/app/components/shared";

const OurPartner: React.FC<any> = ({ locale }) => {
  const swiperRef = useRef<any | null>(null);

  const partnerList: any = [
    {
      id: 1,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_hotelbed_sp_04b6a99acc.svg",
    },
    {
      id: 2,
      imgSrc:
      "https://visitoman.s3.me-south-1.amazonaws.com/partner_almosafar_sp_cc6222f800.svg",
    },
    {
      id: 3,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_underthedoor_sp_08bb668fb3.svg",
    },
    {
      id: 4,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_prioticket_sp_9b302f5b6d.svg",
    },
    {
      id: 5,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_omantel_sp_ffc9c12df1.svg",
    },
    {
      id: 6,
      imgSrc:
      "https://visitoman.s3.me-south-1.amazonaws.com/partner_card_sp_c22704af49.svg",
    },
    {
      id: 1,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_hotelbed_sp_04b6a99acc.svg",
    },
    {
      id: 2,
      imgSrc:
      "https://visitoman.s3.me-south-1.amazonaws.com/partner_almosafar_sp_cc6222f800.svg",
    },
    {
      id: 3,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_underthedoor_sp_08bb668fb3.svg",
    },
    {
      id: 4,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_prioticket_sp_9b302f5b6d.svg",
    },
    {
      id: 5,
      imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/partner_omantel_sp_ffc9c12df1.svg",
    },
    {
      id: 6,
      imgSrc:
      "https://visitoman.s3.me-south-1.amazonaws.com/partner_card_sp_c22704af49.svg",
    }
  ];

  return (
    <section className="bg-bgPrimaryLight mb-[80px] lg:mb-[60px] md:mb-[50px] ">
      <ScreenContainer>
        <h2 className="vo-heading">Partner</h2>

        <div className="swiper-container mt-[50px] ">
          <Swiper
            // slidesPerView={5.5}
            slidesPerView={"auto"}

            spaceBetween={0}
            centeredSlides={false}
            speed={2000}
            autoplay={{
              delay: 1, // 3 seconds
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[Autoplay, A11y, Navigation, FreeMode]}
            className="partner-slider w-full"
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
              },
              480: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 5.5,
              },
            }}
          >
            {partnerList?.map(
              (item: any, index: number) => (
                <SwiperSlide
                  virtualIndex={index}
                  key={index}
                  className="swiper-slide-custom"
                >
                  <PartnersCard data={item} key={index} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          
        </div>
      </ScreenContainer>
    </section>
  );
};

export default OurPartner;
