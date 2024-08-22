import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextCollapsibleSplit,TextWithSlider} from "@/app/components/shared";
import GalleryCards from "@/app/components/cards/GalleryCards";

const bannerImg ="/assets/images/tours/helicopter-tour-banner.png";

const textWithSliderdata = {
  title: "A day in paradise (Full day beach pass)",
  subTitle: "",
  parasOne: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
      title: "6 swimming pools",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "2 private beaches",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Offer includes lunch",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "Located along the sparkling bay with deep turquoise water contrasting vividly with the majestic mountains that rise behind the resort, Shangri-La Barr Al Jissah Resort and Spa’s ‘Day in Paradise’ excursion is truly like a day in paradise. The resort features six swimming pools, two private beaches with golden sand, a meandering lazy river, and many watersport activities.",
    "A full-day pass includes complete access to the beaches, pools, lazy river, and use of the facilities. Towels and water are provided, as is a lavish buffet lunch with an exquisite selection of dishes, including seafood."
  ]
};

const galleryImgs: any = [
  {
      id: 1,
      title: "Gallery",
      cardData: [
          {
            id: 1,
            imgSrc: "/assets/images/gallery/helicopter-tour-gallery-1.png",
          }, 
          {
            id: 2,
            imgSrc: "/assets/images/gallery/helicopter-tour-gallery-2.png",
          },
          {
            id: 3,
            imgSrc: "/assets/images/gallery/helicopter-tour-gallery-3.png",
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

const ADayInParadiseFullDayBeachPass: React.FC<any> = ({ params: { locale } }) => {
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
export default ADayInParadiseFullDayBeachPass;
