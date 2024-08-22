// "use client"
import InnerBanner from "@/app/components/banner/InnerBanner";
import {FullBgDescription,TextImageSplit,TextWithSlider} from "@/app/components/shared";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Tabs from "@/app/components/useful-info/visa-information/Tabs";
// About us component imported to test view

const VisaInformation: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const bannerImg =
    "/assets/images/discover-oman/visa-info-banner.png";
  const dat = {
    heading: "Visa Eligibility",
    subHeading: "The Gateway to Unlimited Experiences",
    desc: [
      "Visit Oman is the digitally native travel booking gateway of the Sultanate of Oman, accredited by the International Air Transport Association (IATA). We seamlessly connect tourists and travel trade partners from all around the world with trusted local tourism providers in Oman. This makes it easier for travel agents and tourists to uncover exceptional Omani experiences, while empowering local businesses and SMEs to share their unique offerings on a global stage.",
    ],
  };
  // const { data, error, loading } = useFetchData('home-screens', locale);
  const fullBgData = {
    backgroundImg:
      "/assets/images/discover-oman/visa-info-full-bg.png",
    title: "Visa Information",
    subTitle: "",
    desc: [
      "Citizens from the 103 countries are allowed to enter Oman without securing a prior tourist visa and can stay for up to 14 days. For other nationalities :to apply for an e-Visa, applicants must hold a passport that's valid for 6 months from the date of entry. Keep in mind that 2 digital passport sized photos (on a white background) are required with the application. All visas must be applied for online at least 4 days before travelling to Oman.",
     
    ],
  };
  const textWithSliderdata1 = {
    title: "Visa Information",
    subTitle: "",
    parasOne: [
      "Visas are required for entry to Oman except for visitors from GCC countries. All applicants must apply for a visa through the Royal Oman Police's eVisa portal at https://evisa.rop.gov.om/",
      "FAQs regarding the visa application process may be explored at https://evisa.rop.gov.om/en/frequently-asked-questions. A valid passport is required that remains as such for at least 6 months from the date of arrival in Oman."
    ],
    parasTwo: [
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
  const textWithSliderdata2 = {
    title: "SPRING",
    subTitle: "March - May",
    parasOne: [
      "With temperatures rising again, it is also the Spring Migration of the birdwatching season, where birds returning from Asia fill the skies; popular spots include Musandam Peninsula, Ras Al Hadd, Jebel Akhdar, and Masirah Island. It is also the rose season in Jabal Akhdar, where the rugged mountain landscape is transformed into a sea of pink blooms, and the air is filled with the fragrance of the roses. Visitors can hike through the rose fields and visit a rose distillery to learn about the traditional process of making rose water."
    ],
    parasTwo: [
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
  const splitContent: any = {
    id: 1,
    secTitle: "Tourist Visa",
    secSubTitle:"",
    secImgSrc:
      "/assets/images/discover-oman/tourist-visa.png",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "",
        desc: "Tourist visa requirements for Oman differ from country to country. Securing an e-Visa before travelling is recommended. Keep in mind that e-Visas can take up to 4 days to be processed",
      },
      {
        id: 2,
        title: "",
        desc: "To apply for an e-Visa, visit www.evisa.rop.gov.om",
      },
    ],
  };
 
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider
          data={textWithSliderdata1}
          locale={locale}
          isShowSlider={true}
          isShowBtn={false}
        />
      <FullBgDescription data={fullBgData} isShowBtn={true} />
      <TextImageSplit
        locale={locale}
        reverse={true}
        data={splitContent}
        isShowBtn={true}
      />
     <Tabs data={null} />
    </main>
  );
};
export default VisaInformation;
