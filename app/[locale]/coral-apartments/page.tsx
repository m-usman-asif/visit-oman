import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextWithSlider,TextCollapsibleSplit} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";

const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "CORAL MUSCAT HOTEL & APARTMENTS",
  subTitle: "",
  parasOne: [
    "With some of the best hotel rooms in Oman, the deluxe Coral Muscat Hotel & Apartments offers spacious accommodations, facilities and a variety of dining options in the heart of the city.",
    "The elegantly furnished one- to three-bedroom units are equipped with modern comforts, and ideal for both long- and short-stay guests, and the perfect option for families.",
    "When staying at Coral Muscat Hotel & Apartments, guests enjoy access to a wide range of five-star facilities and leisure amenities coupled with exemplary service and hospitality."
  ],
  parasTwo: [],
  sliderImgs: [
    {
      id: 1,
      src: "avatar 1",
      img: "/assets/images/text-with-slider/avatar-1.png",
    },
    {
      id: 2,
      src: "avatar 2",
      img: "/assets/images/text-with-slider/avatar-2.png",
    },
    {
      id: 3,
      src: "avatar 3",
      img: "/assets/images/text-with-slider/avatar-3.png",
    },
  ],
};

const collapseContent = {
  id: 1,
  title: "KEY STATS",
  startPara:'',
  endPara:'',
  content: [
    {
      id: 1,
      imgSrc: "/assets/images/amenities-icon/swimming.svg",
      title: "4-star hotel",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "2 restaurants on site",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Rooftop swimming pool",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "Coral Muscat Hotel & Apartments boast some of the largest rooms in the city.",
    "High-speed internet access is available throughout the hotel including the beach, helping guests stay in touch with family and friends or take care of business.",
    "The hotel is known for its family-friendly atmosphere and services, ensuring a stress-free stay with many exciting activities for adults and children.",
    "The property has a spa, fitness centre, and rooftop pool."
  ]
};

const galleryImgs: any = [
  {
      id: 1,
      title: "Gallery",
      cardData: [
          {
            id: 1,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-1.png",
          }, 
          {
            id: 2,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-2.png",
          },
          {
            id: 3,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-3.png",
          },
          {
            id: 4,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-4.png",
          },
          {
            id: 5,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-5.png",
          },
          {
            id: 6,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-6.png",
          },
          {
            id: 7,
            imgSrc: "/assets/images/gallery/1000-nights-camp-gallery-img-7.png",
          },
      ],
  }
];

const CoralApartments: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider data={textWithSliderdata} isShowBtn={false} locale={locale}/>
      <TextCollapsibleSplit data={collapseContent} amenities={amenities}/>
      <GalleryCards data={galleryImgs[0]}/>
    </main>
  );
};
export default CoralApartments;
