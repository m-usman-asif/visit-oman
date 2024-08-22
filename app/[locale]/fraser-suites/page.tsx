import InnerBanner from "@/app/components/banner/InnerBanner";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";


const bannerImg =
  "/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "FRASER SUITES",
  subTitle: "",
  parasOne: [
    "Enviably situated in the towering Landmark complex, Fraser Suites Muscat offers luxury serviced hotel apartments in a highly sought-after Muscat location. The property has 120 units, ranging from studios to three-bedroom configurations with stunning 360-degree city views.",
    "Located in the heart of the central commercial district, the property is surrounded by three major malls and the soon-to-open Mall of Oman.",
    "The hotel is close to major attractions such as Mutrah Souq, the Royal Opera House and the Sultan’s Palace. Old Muscat, with its centuries-old souk, is only 20 minutes away.",
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
  startPara: "",
  endPara: "",
  content: [
    {
      id: 1,
      imgSrc: "/assets/images/amenities-icon/swimming.svg",
      title: "5-star Hotel",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Kid’s club and play areas",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Rooftop swimming pool",
      desc: "",
    },
  ],
};

const amenities = {
  title: "AMENITIES",
  desc: [
    "With modern décor throughout and an abundance of space, Fraser Suites apartments are exceptionally well appointed. A rooftop swimming pool, boutique shopping arcade and a ballroom for up to 800 people are just some of the highlights.",
    "To complement the luxurious serviced apartments, there’s a 24-hour gym, as well as a spa, an outdoor garden with a children’s play area and a convenient all-day dining restaurant.",
  ],
};

const galleryImgs: any = [
  {
    id: 1,
    title: "Gallery",
    cardData: [
      {
        id: 1,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-1.png",
      },
      {
        id: 2,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-2.png",
      },
      {
        id: 3,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-3.png",
      },
      {
        id: 4,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-4.png",
      },
      {
        id: 5,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-5.png",
      },
      {
        id: 6,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-6.png",
      },
      {
        id: 7,
        imgSrc:
          "/assets/images/gallery/1000-nights-camp-gallery-img-7.png",
      },
    ],
  },
];

const FraserSuites: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider
        data={textWithSliderdata}
        isShowBtn={false}
      />
      <TextCollapsibleSplit
        data={collapseContent}
        amenities={amenities}
      />
      <GalleryCards data={galleryImgs[0]} />
    </main>
  );
};
export default FraserSuites;
