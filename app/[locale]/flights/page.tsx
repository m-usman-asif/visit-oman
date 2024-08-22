import {VisitOmanBrief,OurPartner} from "@/app/components/home";
import { useTranslations } from "next-intl";
import {GeneralCardSlider} from "@/app/components/shared";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";

const bannerImg ="/assets/images/flights/flight-banner.png";
const dat = {
  heading: "Flights",
  subHeading: "Our fight partners",
  desc: [
    "Over 60 airlines have partnered with us to bring the world to Oman. These airlines connect travellers from around the globe to the Sultanate, welcoming millions of visitors each year to experience the Sultanate’s unique beauty. With such a wide range of flights to choose from, finding the best option is important when planning a trip to Oman.",
    "We are proud to count Oman Air and Salam Air among our local partners, ready to take you on your Omani adventure."
  ],
};
const partner: any = [
  {
    id: 1,
    title: "",
    cardData: [
      {
        id: 1,
        title: "Oman Air",
        imgSrc: "/assets/images/flights/oman-air.png",
        desc: [
            "Oman Air, the flagship carrier of Oman since 1993, has transformed Muscat into a vibrant gateway to the world. Today, it flies passengers directly to various destinations worldwide, connecting them to even more through code-share partnerships with over 15 airlines.",
            "Recently, its dedication to excellence was recognised with a triple win at the World Travel Awards 2022, including the coveted title of World’s Leading Airline for Business Class."
        ],
      },
      {
        id: 2,
        title: "Salam Air",
        imgSrc: "/assets/images/flights/salam-air.png",
        desc: [
            "SalamAir, inspired by the soul of Oman and its people, is the first low-cost airline in Oman, offering a range of domestic flights within the country, while connecting major cities to Oman’s vibrant tourist hubs like Muscat, Sohar, and Salalah. The airline provides a convenient and affordable option for exploring Oman’s diverse regions."
        ]
      },
      {
        id: 3,
        title: "60+ Flight Partners",
        imgSrc:"/assets/images/flights/flight-partners.png",
        desc: []
      },
    ],
  }
];

const Partner: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief locale={locale} data={dat} />
      <GeneralCardSlider data={partner[0]} />
      <OurPartner locale={locale}/>

    </main>
  );
};
export default Partner;
