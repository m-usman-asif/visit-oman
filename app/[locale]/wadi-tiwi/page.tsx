import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {TextWithSlider,TextCollapsibleSplit} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";

const bannerImg ="/assets/images/tours/helicopter-tour-banner.png";

const textWithSliderdata = {
  title: "Wadi Tiwi",
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
      title: "Located in Tiwi village",
      desc: "",
    },
    {
      id: 2,
      imgSrc: "/assets/images/amenities-icon/walking.svg",
      title: "Stunning Mibam waterfall",
      desc: "",
    },
    {
      id: 3,
      imgSrc: "/assets/images/amenities-icon/playarea.svg",
      title: "1.5-hour drive from Muscat",
      desc: "",
    }
  ],
}

const amenities = {
    title: "AMENITIES",
    desc: [
        "Named after Tiwi village along the coast, Wadi Tiwi is a serene wadi with lush green plantations, several farms, and a stunning natural pool flanked by date and banana trees as well as a breathtaking waterfall. It’s a spectacularly deep and narrow gorge carved out of the mountains, running between towering cliffs right down to the sea.",
        "Located in Al Sharqiyah region, adjacent to the very popular Wadi Shab, this is a more secluded wadi where a narrow road meanders through traditional villages through to the entrance of the wadi."    
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

const WadiTiwi: React.FC<any> = ({ params: { locale } }) => {
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
export default WadiTiwi;
