import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextWithSlider,TextCollapsibleSplit} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";

const bannerImg ="/assets/images/tours/helicopter-tour-banner.png";

const textWithSliderdata = {
  title: "Dhow cruise along the coast south from Muscat",
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
      title: "Great chance to spot dolphins",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Range of tours available",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Refreshments and water provided",
      desc: "",
    }
  ],
}

const amenities = {
    title: "AMENITIES",
    desc: [
        "Explore the south coast from Muscat in a traditional dhow. The scene is mesmerising, with majestic mountains in the background.",
        "This area is known for its wildlife, and dolphin pods often swim and play alongside the boats. Whales are also a common sight in season.",
        "A range of excursions are available, from a few hours to overnight. This is an experience enjoyable for children and adults alike. Leave the hustle and bustle of the city behind for the calmness of an offshore cruise."
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

const DhowCruiseALongTheCoast: React.FC<any> = ({ params: { locale } }) => {
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
export default DhowCruiseALongTheCoast;
