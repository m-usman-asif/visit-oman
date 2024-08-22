import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";
const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "GRAND MILLENNIUM HOTEL",
  subTitle: "",
  parasOne: [
    "A tribute to Oman’s rich cultural heritage and time-honoured values, the 5-star Grand Millennium Muscat is situated in the heart of the city, and is seamlessly connected to the Muscat Grand Mall.",
    "Centrally located in the business, government and diplomatic district, the airport is just 15 minutes away. The property is within easy reach of beaches, the Avenues Mall, and the Royal Opera House of Muscat.",
    "The hotel’s 296 spacious rooms and suites and 32 spacious apartments are all luxuriously appointed with contemporary Omani design and everything guests need for a pleasant stay."
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
      title: "5-star hotel",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Rooftop pool & ladies pool",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "On-site tennis court",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "In addition to WiFi and complimentary parking, the Grand Millennium Muscat features an executive lounge, business centre, and fitness centre. It also has a pool, and one especially for children.",
    "Its signature restaurant is Bahriyat. Meaning “fruits of the sea”, it specialises in seafood. Taybat, meanwhile, offers a buffet of international delicacies and an à la carte menu featuring contemporary cuisine from around the world.",
    "Guests can relax and unwind at the indulgent Zanta spa."
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

const GrandMilleniumHotel: React.FC<any> = ({ params: { locale } }) => {
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
export default GrandMilleniumHotel;
