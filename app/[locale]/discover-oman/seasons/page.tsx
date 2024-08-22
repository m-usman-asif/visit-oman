import InnerBanner from "@/app/components/banner/InnerBanner";
import {
  FullBgDescription,
  TextImageSplit,
  TextWithSlider,
} from "@/app/components/shared";
const Seasons: React.FC<any> = ({ params: { locale } }) => {
  const bannerImg =
    "/assets/images/discover-oman/seasons-banner.png";

  const fullBgData = {
    backgroundImg:
      "/assets/images/discover-oman/seasons-full-bg.png",
    title: "Autumn",
    subTitle: "September - November",
    desc: [
      "Once you enter the autumn season, temperatures gradually decrease, and this is considered one of the most pleasant times to visit the country, with average temperatures around 28°C (82°F). For adventurous travellers who enjoy snorkelling and diving, the whale shark season in Oman also falls between September and November as these gentle, majestic sea giants migrate south to the warmer waters of the southern hemisphere. The best spots to see whale sharks in Oman are at Ad Dimaniyat Islands off the coast of Muscat, and Musandam at the northern tip of the country. With the Autumn Migration, it is also peak season for birdwatching, with popular spots including Batinah Coast, Dhofar Governorate, Jebel Akhdar, and Al Ansab Wetlands.",
    ],
  };
  const textWithSliderdata1 = {
    title: "Summer",
    subTitle: "June - August",
    parasOne: [
      "While Oman's average temperature in the summer reaches 35°C (95°F), the Sultanate enjoys cooler temperatures in certain parts of the country, offering a delightful escape that transports visitors into a different season; this includes the monsoon season down south with an average of 20°C - 28°C (68°F - 82°F), commonly known as Khareef Salalah as it is also peak season for frankincense harvesting, in addition to the Jabal Akhdar and Jabal Shams mountains where temperatures drop tremendously.",
      "15 degrees cooler, visitors can trade cityscapes for stargazing skies up in the mountains, merely a 2-hour drive from the capital.",
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
  const textWithSliderdata2 = {
    title: "SPRING",
    subTitle: "March - May",
    parasOne: [
      "With temperatures rising again, it is also the Spring Migration of the birdwatching season, where birds returning from Asia fill the skies; popular spots include Musandam Peninsula, Ras Al Hadd, Jebel Akhdar, and Masirah Island. It is also the rose season in Jabal Akhdar, where the rugged mountain landscape is transformed into a sea of pink blooms, and the air is filled with the fragrance of the roses. Visitors can hike through the rose fields and visit a rose distillery to learn about the traditional process of making rose water.",
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
  const splitContent: any = {
    id: 1,
    secTitle: "Winter",
    secSubTitle: "December - February",
    secImgSrc:
      "/assets/images/discover-oman/seasons-winter.png",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "",
        desc: "This is the coolest and driest time, with average temperatures in Muscat around 26°C (79°F). For camping enthusiasts, this is the best season to be outdoors. The days are warm and sunny, while the nights are comfortably cool. The weather allows visitors to enjoy outdoor activities from hiking, dining, and exploring what Oman offers. The winter season offers lighter winds than summer, making it the ideal time for kite surfing, especially for beginners and intermediate riders as the wind can be more variable during this time. The best kite surfing spot in the country is Masirah Island, a kitesurfer’s paradise with consistent wind year-round, followed by Mussanah and Al Sawadi Beach.",
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
        isShowBtn={true}
      />
      <FullBgDescription data={fullBgData} />
      <TextImageSplit
        locale={locale}
        reverse={true}
        data={splitContent}
      />
      <TextWithSlider
        data={textWithSliderdata2}
        locale={locale}
        isShowSlider={true}
        isShowBtn={false}
      />
    </main>
  );
};
export default Seasons;
