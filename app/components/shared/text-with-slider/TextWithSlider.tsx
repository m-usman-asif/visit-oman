"use client";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./text-img-slider.css"
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import {
  Swiper as SwiperInstance,
  SwiperSlide,
} from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import {ScreenContainer} from "@/app/components/shared";
const TextWithSlider = ({
  data,
  locale="en",
  isShowSlider = true,
  isShowBtn = true,
}: any) => {
  const [isDiscoverMore, setIsDiscoverMore] = useState(false);
  const swiperWrapperRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  console.log("locale",locale)
    const applyTransform = () => {
      if (swiperWrapperRef.current && swiperInstanceRef.current) {
        const swiper = swiperInstanceRef.current;
        const transformations = locale === "en"
        ? ["translate-one-en", "translate-two-en", "translate-three-en"]
        : ["translate-one-ar", "translate-two-ar", "translate-three-ar"];
        console.log("transformations",transformations)
        const updateTransform = () => {
          const currentIndex = swiper.activeIndex % transformations.length;
          if (swiperWrapperRef.current) {
            // Remove previous transformation classes
            transformations.forEach(transformation => {
              swiperWrapperRef.current?.classList.remove(transformation);
            });
            // Add the new transformation class
            swiperWrapperRef.current?.classList.add(transformations[currentIndex]);
          }
        };
        updateTransform();
        swiper.on("slideChange", updateTransform);
        return () => swiper.off("slideChange", updateTransform);
      }
    };
    useEffect(() => {
      if (swiperInstanceRef.current) {
        applyTransform();
        if (swiperInstanceRef.current.autoplay) {
          swiperInstanceRef.current.autoplay.start();
        }
      }
    }, []);
    const toggleisDiscoverMore = () => {
      setIsDiscoverMore(!isDiscoverMore);
    };
  return (
    <ScreenContainer>
      <div className="text-with-slider-container relative flex flex-row gap-[40px] w-full">
        <div className="text-content-section">
          <div className="headings-section-tcs">
            <h2 className="vo-heading">{data.title}</h2>
            {data.subTitle && (
              <h2 className="vo-subHeading">
                {data.subTitle}
              </h2>
            )}
          </div>
          {isDiscoverMore ? (
            <div className={`para-section-tcs `}>
              {data.parasTwo.map(
                (value: any, index: number) => (
                  <p className="vo-paragraph" key={index}>
                    {value}
                  </p>
                ),
              )}
            </div>
          ) : (
            <div className={`para-section-tcs`}>
              {data.parasOne.map(
                (value: any, index: number) => (
                  <p className="vo-paragraph" key={index}>
                    {value}
                  </p>
                ),
              )}
            </div>
          )}
          {isShowBtn && (
            <button
              className={`flex ${isDiscoverMore ? "flex-row-reverse" : "flex-row"} discover-text-btn w-fit items-center justify-start gap-[7px]`}
              onClick={toggleisDiscoverMore}
            >
              <span className="flex flex-col items-center justify-center font-Montserrat font-medium text-[#39BFC0] lg:text-[16px] lg:leading-[38px]">
                {isDiscoverMore
                  ? "Discover less"
                  : "Discover more"}
              </span>
              <span className="flex flex-col items-center justify-center">
                <img
                  src="/assets/icons/chavron-cgreen.svg"
                  alt="chavron"
                  className={`mt-[3px] h-[10px] w-[5px] object-contain ${isDiscoverMore ? "rotate-180" : "rotate-0"}`}
                />
              </span>
            </button>
          )}
        </div>
        {isShowSlider && (
          <div className={`${locale === "en" ? 'tws-slider-wrapper-en':'tws-slider-wrapper-ar'} tws-slider-wrapper`}>
            <div className="tws-slider-container relative h-full w-full">
              <SwiperInstance
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  scale: 0.9,
                }}
                onSwiper={(swiper) => {
                  swiperWrapperRef.current = swiper.wrapperEl as HTMLDivElement;
                  swiperInstanceRef.current = swiper;
                  if (swiperWrapperRef.current) {
                    swiperWrapperRef.current.classList.add("custom-swiper-wrapper");
                  }
                }}
                // autoplay={{
                //   delay: 2500,
                //   pauseOnMouseEnter: true,
                //   disableOnInteraction: false,
                // }}
                pagination={{ clickable: true }}
                modules={[
                  EffectCoverflow,
                  Pagination,
                  // Autoplay,
                ]}
                className={`${locale === "en" ? "tws-slider":"tws-slider-ar"} 'h-full w-full'`}
              >
                {data?.sliderImgs?.map(
                  (item: any, index: number) => (
                    <SwiperSlide
                      key={index}
                      className={`${locale==="en" ? "tws-slider-slide-en":"tws-slider-slide-ar"} tws-slider-slide`}
                    >
                      <img
                        className="object-cover"
                        src={item.img}
                        alt={item.src}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ),
                )}
              </SwiperInstance>
            </div>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};
export default TextWithSlider;