import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextCollapsibleSplit,TextWithSlider} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";

const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "ATANA KHASAB RESORT",
  subTitle: "",
  parasOne: [
    "Atana Khasab is a 4-star resort perched on a rock face. Located in one of the best spots in the Sultanate, it boasts panoramic views of the spectacular Musandam shoreline.",
    "The 60-room boutique property features warmly decorated rooms, all fitted with state-of-the-art facilities and private balconies. The exceptional hospitality reflects the friendly spirit of the Omani people.",
    "Its outdoor pool overlooks the sea and complements an on-site diving school with professional instructors.",
    "The resort offers a free shuttle service to Khasab Airport. The city of Khasab is just 2km away."
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
      title: "Pool with view, diving centre",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "BBQ facilities",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "Atana Khasab’s spacious rooms all have private balconies in addition to a satellite flat-screen TV, coffeemaker, and minibar. The bathroom comes with bathrobes and luxury amenities.",
    "The hotel’s outdoor pool faces the sea. It also has a fitness centre, and guests can also obtain their PADI scuba diving licence through the on-site Khasab Underwater Centre.",
    "The property has three F&B outlets — an all-day dining restaurant, a café for light snacks, and a darts bar."
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

const AtanaKhasabResort: React.FC<any> = ({ params: { locale } }) => {
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
export default AtanaKhasabResort;
