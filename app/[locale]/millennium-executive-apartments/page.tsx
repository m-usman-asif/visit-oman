import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";
const bannerImg ="/assets/images/accomodation/millenium-executive-apartment-banner.png";

const textWithSliderdata = {
  title: "Millennium Executive Apartments",
  subTitle: "",
  parasOne: [
    "Centrally located in the Al Khuwair area, Millennium Executive Apartments Muscat is a part of Tilal Complex, a new mixed-use upscale development for retail, dining, living, and working.",
    "The 115 spacious, fully furnished apartments have everything guests need for a restful stay, including complimentary WiFi, an open lounge, dining room, and master bedroom with ensuite bathroom. The modern design complements the values of the contemporary Arabian culture in a smoking- and alcohol-free environment. The German-designed kitchens are also efficient and elegant and come with a full range of utensils."
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
      title: "Garden and terrace",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "20 min from Muscat Airport",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "The luxurious accommodations at Millennium Executive Apartments are within walking distance of the Oman Avenues Mall, with more than 205 retail outlets and a hypermarket. It’s also connected directly to the Muscat Grand Mall. The Royal Opera House and beaches are within easy reach.",
    "On-site amenities include free WiFi and parking, a pool, gym, laundry, restaurant, spa, and business centre. The apartments also have balconies."
  ]
};

const galleryImgs: any = [
  {
      id: 1,
      title: "Gallery",
      cardData: [
          {
            id: 1,
            imgSrc: "/assets/images/gallery/millenium-executive-apartment-gallery-1.png",
          }, 
          {
            id: 2,
            imgSrc: "/assets/images/gallery/millenium-executive-apartment-gallery-2.png",
          },
          {
            id: 3,
            imgSrc: "/assets/images/gallery/millenium-executive-apartment-gallery-3.png",
          },
          {
            id: 4,
            imgSrc: "/assets/images/gallery/millenium-executive-apartment-gallery-4.png",
          },  
      ],
  }
];

const MilleniumExeApartments: React.FC<any> = ({ params: { locale } }) => {
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
export default MilleniumExeApartments;
