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
  title: "SOMERSET APARTMENTS",
  subTitle: "",
  parasOne: [
    "Housed within an integrated development site with Panorama Mall located right beneath it, Somerset Panorama Muscat offers a convenient, conducive space from which to explore Muscat.",
    "Particularly useful for guests travelling into the city on business, the residence is situated in the bustling Bawshar commercial district, centrally located near the diplomatic areas, Ghala industrial estate, and midway between the Central Business District and Muscat International Airport.",
    "The property offers spacious serviced apartments with a host of hotel-like indulgences, from studios to two-bedroom units."
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
      title: "Babysitting services",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "15 min from Muscat Airport",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "The property offers complimentary WiFi as well as business support facilities while seeing to all the daily conveniences.",
    "Enjoy benefits like airport transfer services, an in-house restaurant, as well as laundry and dry cleaning, daily housekeeping, doctor-on-call and meal delivery and grocery shopping services. Meeting rooms with audio-visual equipment are also available, as well as courier and secretarial services.",
    "The property has a modern gym, swimming pool and a residents’ lounge."
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

const SomerSetApartments: React.FC<any> = ({ params: { locale } }) => {
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
export default SomerSetApartments;
