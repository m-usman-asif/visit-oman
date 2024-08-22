import InnerBanner from "@/app/components/banner/InnerBanner";
import {TextImageSplit,TextWithSlider,FullBgDescription} from "@/app/components/shared";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
const bannerImg =
  "/assets/images/about/vision-mission-banner.png";

const fullBgData = {
  backgroundImg: "/assets/images/about/mission-bg.png",
  title: "Our MISSION",
  subTitle: "",
  desc: [
    "Visit Oman aims to build strong, strategic, and commercial partnerships with both key source markets and Omani suppliers, to deliver a single, interconnected booking platform designed to provide an unparalleled Omani travel experience.",
  ],
};

const VisionMission: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  const splitContent1: any = {
    id: 1,
    secTitle: "Our Values",
    secImgSrc: "/assets/images/about/split-comp-img.svg",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "Focus",
        desc: "Connected travel gateway to all things Oman",
      },
      {
        id: 2,
        title: "Quality",
        desc: "Credible and established ecosystem of travel partners providing world-class delivery and service",
      },
      {
        id: 3,
        title: "Trust",
        desc: "Trusted network of vetted and approved travel partners",
      },
      {
        id: 4,
        title: "Connected Choice",
        desc: "Access to an expansive list of Oman experiences or partners",
      },
      {
        id: 5,
        title: "Simplicity",
        desc: "Easy to list, easy to book, easy to connect",
      },
    ],
  };
  const splitContent2: any = {
    id: 1,
    secTitle: "Our Objectives",
    secImgSrc: "/assets/images/about/our-objective.svg",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        desc: "Increase high-quality inbound leisure traffic to Oman by connecting Omani tourism players with international markets",
      },
      {
        id: 2,
        desc: "Ensure financial sustainability and enable investments in the tourism industry by engaging and attracting investors",
      },
      {
        id: 3,
        desc: "Support local tourism and industry players by creating direct and indirect job and business opportunities",
      },
      {
        id: 4,
        desc: "Provide a high level of service that upholds national and international standards through a seamless, fully digital experience to customers and suppliers",
      },
    ],
  };
  const textWithSliderdata = {
    title: "Our vision",
    subTitle: "",
    parasOne: [
      "To be Oman’s extensive travel booking gateway that connects you to unlimited discovery.",
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
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider
        data={textWithSliderdata}
        locale={locale}
        isShowSlider={true}
        isShowBtn={false}
      />
      <FullBgDescription data={fullBgData} />
      <TextImageSplit data={splitContent1} />
      <TextImageSplit
        data={splitContent2}
        reverse
        isListStyle={true}
      />
    </main>
  );
};
export default VisionMission;
