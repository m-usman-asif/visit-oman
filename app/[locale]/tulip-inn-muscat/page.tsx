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
  title: "TULIP INN MUSCAT",
  subTitle: "",
  parasOne: [
    "The Tulip Inn Muscat Hotel, a 3-star hotel, is ideally located in the heart of Muscat District. Guests can easily reach all embassies, ministries, the Royal Opera House, and Muscat Grand Mall.",
    "The hotel offers 153 spacious rooms and suites, all well-equipped and beautifully furnished.",
    "On the culinary front, savour a selection of Arabic and international cuisines specially prepared to suit every palate, at Al Luban Restaurant. Guests can also unwind at the Lobby Lounge with fresh fruit juice, aromatic coffee, or a delicious dessert."
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
      title: "3-star hotel",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Local culture tours",
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
    "The Tulip Inn Muscat Hotel has a gym, located on the first floor, where guests can relieve stress and fatigue. It’s fully equipped with the latest fitness and cardio machines, as well as steam and sauna rooms.",
    "The hotel also has fully equipped meeting rooms with state-of-the-art equipment. The rooms can accommodate up to 100 guests.",
    "The hotel also offers free WiFi and parking, airport shuttle and family rooms."
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

const TulipInnMuscat: React.FC<any> = ({ params: { locale } }) => {
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
export default TulipInnMuscat;
