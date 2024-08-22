import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";
const bannerImg ="/assets/images/accomodation/raz-al-jinz-banner.png";
const textWithSliderdata = {
  title: "RAS AL JINZ TURTLE RESERVE",
  subTitle: "",
  parasOne: [
    "Turtle viewing is one of the most popular ecotourism activities in Oman. The country is home to several important nesting sites for four turtle species, and the Ras Al Jinz Turtle Reserve is probably the most important nesting concentration of the endangered green turtle on the Indian Ocean.",
    "Accommodation options include luxury eco tents alongside air-conditioned rooms. The 12 luxury tents are wind and rain proof, and have been tested in cyclone-hit areas to ensure durability and safety.",
    "Rates include breakfast buffet, turtle viewing guided tours and entry to the Turtle Reserve Visitor Centre."
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
      title: "Luxury tented accommodations",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Ecotourism highlight",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Includes turtle viewing tours",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "The Ras Al Jinz Turtle Reserve is world renown as a nesting site of the endangered green turtle.",
    "The property features 31 accommodation units, including 12 luxury eco tents. All the air-conditioned tents are en-suite and equipped with a dressing table, in-room safe, mini refrigerator, tea and coffee maker, and LCD TV.",
    "The property also offers complimentary internet access.",
    "Rates include breakfast buffet, turtle viewing guided tours, and entry to the Turtle Reserve Visitor Centre."
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

const RasAlJinz: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider data={textWithSliderdata} isShowBtn={false}  locale={locale}/>
      <TextCollapsibleSplit data={collapseContent} amenities={amenities}/>
      <GalleryCards data={galleryImgs[0]}/>
    </main>
  );
};
export default RasAlJinz;
