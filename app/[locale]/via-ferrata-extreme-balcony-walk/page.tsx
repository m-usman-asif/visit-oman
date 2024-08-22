import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextCollapsibleSplit,TextWithSlider} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";



const ViaFerrataExtremeBalconyWalk: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

  const textWithSliderdata = {
    title: "Via-Ferrata extreme balcony walk",
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
        title: "Climbing, hiking, and trekking",
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
        title: "Head for heights needed",
        desc: "",
      }
    ],
  }
  
  const amenities = {
    title: "AMENITIES",
    desc: [
      "This is a world-class experience on top of the highest mountain in the region, Jebel Shams. The adventure begins with a hike along the top of the canyon, the famous Balcony Walk, to the abandoned village of Sap Bani Khamis. See how the locals lived here just 70 years ago, and learn about Oman’s history and geology.",
      "Continue up the scree to the old stick stairway, now the Via Ferrata. The route’s protected with a steel cable that reaches all the way up the 200m cliff, providing assisted climbing for adventurers with little experience.",
      "Enjoy a picnic lunch on the plateau before heading back."
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
export default ViaFerrataExtremeBalconyWalk;
