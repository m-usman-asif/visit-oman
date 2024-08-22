import { useTranslations } from "next-intl";
import {ExecutiveTeamCard} from "@/app/components/about-us";
import InnerBanner from "@/app/components/banner/InnerBanner";
import {TextWithSlider} from "@/app/components/shared";
import { unstable_setRequestLocale } from "next-intl/server";



const bannerImg ="/assets/images/about/executive-team-banner.png";
const partner: any = [
  {
    id: 1,
    title: "Executive Team",
    cardData: [
      {
        id: 1,
        imgSrc:
          "/assets/images/about/exe-team-member-1.png",
        name: "Shabib Al Maamari",
        designation: "Managing Director",
      },
      {
        id: 2,
        imgSrc:
          "/assets/images/about/exe-team-member-2.png",
        name: "Amanda Barnett",
        designation: "Commercial Director",
      },
      {
        id: 3,
        imgSrc:
          "/assets/images/about/exe-team-member-3.png",
        name: "Salah Al Battashi",
        designation: "Digital Director",
      },
      {
        id: 4,
        imgSrc:
          "/assets/images/about/exe-team-member-4.png",
        name: "Salah Al Battashi",
        designation: "Digital Director",
      },
    ],
  },
];

const ExecutiveTeam: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const textWithSliderdata = {
    title: "EXECUTIVE SUMMARY",
    subTitle: "The Sultanate of Oman",
    parasOne: [
      "Launched in 2021 as a subsidiary of OMRAN Group, Visit Oman is the Sultanate of Oman's digitally native online booking platform, accredited by the International Air Transport Association (IATA), serving the needs of both the local and international travel industry.",
      "Through strategic partnerships, Visit Oman seamlessly connects the entire accredited Omani travel supply chain - flights, accommodation, transfers, tour operators, experiences, and more - all of which have passed a rigorous quality assurance framework to ensure exceptional standards.",
      "From exploring ancient ruins to experiencing the thrill of desert safaris, there is so much to be discovered",
    ],
    parasTwo: [
      "Travellers can take a tour of the souq, find traditional treasures, hike through breathtaking wadis, cycle across mountains, explore ancient forts, dive into a vibrant underwater world, take a dhow cruise through Khasab, unwind at a luxury resort, or just take in the scenery.",
      "No matter what your reason for visiting Oman, you can be sure to receive a warm Omani welcome; the locals are always happy to help and share their culture with visitors.",
    ],
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
        isShowBtn={true}
      />
      <ExecutiveTeamCard data={partner[0]} />
    </main>
  );
};
export default ExecutiveTeam;
