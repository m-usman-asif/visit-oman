
import { Swiper } from 'swiper';

export const nextSlide = (swiperRef: React.MutableRefObject<Swiper | null>) => {
  if (swiperRef.current) {
    swiperRef.current.slideNext();
  }
};

export const prevSlide = (swiperRef: React.MutableRefObject<Swiper | null>) => {
  if (swiperRef.current) {
    swiperRef.current.slidePrev();
  }
};
