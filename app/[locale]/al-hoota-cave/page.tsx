import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextCollapsibleSplit,TextWithSlider} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";



const AlHootaCave: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

  const textWithSliderdata = {
    title: "AL Hoota CAVE",
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
        title: "Home to the rare blind fish",
        desc: "",
      },
      {
        id: 2,
        imgSrc: "/assets/images/amenities-icon/walking.svg",
        title: "Oman’s only electric train",
        desc: "",
      },
      {
        id: 3,
        imgSrc: "/assets/images/amenities-icon/playarea.svg",
        title: "Curated geological exhibition",
        desc: "",
      }
    ],
  }
  
  const amenities = {
    title: "AMENITIES",
    desc: [
      "Estimated to be over 2 million years old, Al Hoota Cave is the only show cave in the Arabian Peninsula. It has a total length of around 4.5km.",
      "The cave boasts a rich ecosystem that includes four lakes. The largest is the accessible central lake, home to the rare blind fish — Garra barreimiae. Other animal species include bats, arthropods, mollusks, spiders, snails, and water beetles.",
      "Explore fascinating features such as stalagmites, stalactites and the magnificent lion of Al Hoota Cave, formed by mineral deposits as water drips into or moves through the cave system. "
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
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider data={textWithSliderdata} isShowBtn={false}  locale={locale}/>
      <TextCollapsibleSplit data={collapseContent} amenities={amenities}/>
      <GalleryCards data={galleryImgs[0]}/>
    </main>
  );
};
export default AlHootaCave;
