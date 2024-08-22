import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {
  TextCollapsibleSplit,
  TextWithSlider,
} from "@/app/components/shared";
import { GalleryCards } from "@/app/components/cards";


const SeventhHole: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

  const textWithSliderdata = {
    title: "Seventh HOLE",
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
        title: "3-days, plus overnight camp",
        desc: "",
      },
      {
        id: 2,
        imgSrc: "/assets/images/amenities-icon/walking.svg",
        title: "Great photo opportunities",
        desc: "",
      },
      {
        id: 3,
        imgSrc: "/assets/images/amenities-icon/playarea.svg",
        title: "Good fitness level required",
        desc: "",
      }
    ],
  }
  
  const amenities = {
    title: "AMENITIES",
    desc: [
      "Explore a section of one of the largest cave networks in the World. It starts with nine hours of training in Muscat followed by an overnight camp at Selma Plateau.",
      "At sunrise, take a leap of faith with the first 120m abseil into the darkness of the cave into the middle of the Canyon Room. The cave is lit through multiple holes in the ceiling, making for a dramatic atmosphere through which to appreciate the intricacies of the cave’s formation.",
      "Continue through a pitch-black fossil passage to a second descent, and onto the 80m climb out of the cave using techniques learnt in the training."
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
export default SeventhHole;
