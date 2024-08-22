import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextWithSlider,TextCollapsibleSplit} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";



const DesertMadness: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg ="/assets/images/accomodation/1000-nights-camp.png";

  const textWithSliderdata = {
    title: "Desert madness: dune bashing, sandboarding, quad biking & much more in the Wahiba Sands",
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
        title: "About three hours from Muscat",
        desc: "",
      },
      {
        id: 2,
        imgSrc: "/assets/images/amenities-icon/walking.svg",
        title: "No mobile phone/WiFi coverage",
        desc: "",
      },
      {
        id: 3,
        imgSrc: "/assets/images/amenities-icon/playarea.svg",
        title: "Best time to visit is Oct-Apr",
        desc: "",
      }
    ],
  }
  
  const amenities = {
    title: "AMENITIES",
    desc: [
      "Stretching more than 200km from the Eastern Hajar Mountains to the Arabian Sea, the Wahiba Sands are Oman’s adventure playground.",
      "A desert safari is a great way to experience one of Oman’s most characteristic natural wonders. Visitors can go dune bashing in a 4×4, take a sunset camel ride, or zip through dunes on a sandboard or quad bike. The unique desert ecosystem boasts over 180 plant species and more than 200 animal species.",
      "Small-group tours leave from Muscat or Bidiyah, and typically include a picnic lunch at a traditional desert camp, swimming at Wadi Bani Khalid, and more."
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
      <TextWithSlider data={textWithSliderdata} isShowBtn={false} locale={locale}/>
      <TextCollapsibleSplit data={collapseContent} amenities={amenities}/>
      <GalleryCards data={galleryImgs[0]}/>
    </main>
  );
};
export default DesertMadness;
