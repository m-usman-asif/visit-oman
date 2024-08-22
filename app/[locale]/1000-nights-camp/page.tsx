import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextCollapsibleSplit,GeneralCardSlider,TextWithSlider} from "@/app/components/shared";
import { locales } from '../../../i18n.config';

const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

const textWithSliderdata = {
  title: "1000 Nights Camp",
  subTitle: "",
  parasOne: ["Thousand Nights is characterised by its unique location. Situated in a tranquil oasis, a rare jewel in the heart of the Sharqiyah Desert, it’s home to diverse species of plants, birds, and animal life from the majestic Arabian horse to the graceful gazelle, and the Arabian Oryx.",
    "Choose from a selection of elegant rooms and tents that maintain the authentic Bedouin experience. The flagship Ameer tents are fit for a prince. These luxurious, air-conditioned units feature glass walls on two sides to provide a panoramic view of the sunrise and sunset. They also come with a private pool."
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
      title: "Swimming Pools",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Walking Tours",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "Childrens Playground",
      desc: "",
    }
  ],
}

const amenities = {
  title: "AMENITIES",
  desc: [
    "Thousand Night Camp believes the beauty of nature is a right that must be shared by everyone. For this reason, the camp is eco-friendly and relies on renewable sources of energy.",
    "The tents come with air conditioning, a fridge, separate toilet, TV, sofa, and tea and coffee-making facilities. Activities include archery and star gazing, while there’s also an extensive library",
    "The property presents an authentic experience inspired by the nomadic Bedouin heritage."
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

const NightsCamp: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider data={textWithSliderdata} isShowBtn={false} locale={locale}/>
      <TextCollapsibleSplit data={collapseContent} amenities={amenities}/>
      <GeneralCardSlider data={galleryImgs[0]}  tablet={true} hover={false}/>
    </main>
  );
};
export default NightsCamp;
