import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextWithSlider,TextCollapsibleSplit} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";

const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "Zayr Experience",
  subTitle: "",
  parasOne: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
      title: "From 7pm",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Private, exclusive activity",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Pickup/drop-off provided",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "This is easily the most authentic of local experiences. “Zayr” means visitor, and through the programme local families open their homes to visitors. It’s a modern iteration of an ancient tradition.",
    "Share a meal with a family and discover the rich Omani culture through their humbling hospitality. Each hosting family has its unique experience, story, and culture. They have big hearts, that’s why they open their homes to visitors. The food is homemade, the conversation is organic, and the connection is real.",
    "Get to know the Omani people by sharing a meal with a family."
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

const ZayrExperience: React.FC<any> = ({ params: { locale } }) => {
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
export default ZayrExperience;
