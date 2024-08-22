import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";


const SnakeCanyonAbseilCanyoning: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

  const textWithSliderdata = {
    title: "SNAKE CANYON ABSEIL & CANYONING",
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
        title: "Abseil, swim, and scramble",
        desc: "",
      },
      {
        id: 2,
        imgSrc: "/assets/images/amenities-icon/walking.svg",
        title: "Closed-toe shoes required",
        desc: "",
      },
      {
        id: 3,
        imgSrc: "/assets/images/amenities-icon/playarea.svg",
        title: "Pack a change of clothes",
        desc: "",
      }
    ],
  }
  
  const amenities = {
    title: "AMENITIES",
    desc: [
      "This is a fantastic entry-level adventure for those looking to get a good adrenaline rush and try out some rope work. The challenges begin right from the start, with an 8m abseil right into the first pool, and don’t end until the hike to exit the canyon.",
      "There’s also a 30m abseil, multiple slides, jumps, and scrambles. Every turn has a new obstacle to overcome. Traverse through the pools in the darkness of the cave and come out to face more slides, swims, and a few big jumps.",
      "A trek through the boulder valley leads out of the canyon. Enjoy lunch at a local house and head back to Muscat."
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
export default SnakeCanyonAbseilCanyoning;
