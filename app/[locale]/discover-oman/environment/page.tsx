import InnerBanner from "@/app/components/banner/InnerBanner";
import {
  FullBgDescription,
  TextImageSplit,
  TextWithSlider,
} from "@/app/components/shared";
const Environment: React.FC<any> = ({
  params: { locale },
}) => {
  const bannerImg =
    "/assets/images/discover-oman/environment-banner.png";

  const fullBgData = {
    backgroundImg:
      "/assets/images/discover-oman/environment-full-bg.png",
    title: "OUR LOCATION",
    subTitle: "The Sultanate of Oman",
    desc: [
      "The natural landscape of Oman is unlike any other place on earth and captivates visitors with its breathtaking scenery. Visitors are often overwhelmed by the scenery of the sea set against the Al Hajar Mountains.",
      "Surrounded by the Sea of Oman, the Indian Ocean, and the vast desert of the Empty Quarter, Oman enjoys a geographically distinct and secluded location. Historically, the sea served as Oman's vital connection to the world, solidifying its position as a major trade centre for thousands of years.",
      "Oman's landscape boasts a captivating tapestry of vast deserts, verdant valleys, towering mountains, and a mesmerizing coastline. It is the only country on earth made mostly of oceanic crust and rocks from the earth's mantle. Oman is a wonderland for visitors interested in geology.",
    ],
  };
  const textWithSliderdata = {
    title: "ABOUT",
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
  const splitContent1: any = {
    id: 1,
    secTitle: "Our History",
    secImgSrc:
      "/assets/images/discover-oman/environment-our-history.png",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "",
        desc: "Oman boasts a rich history of seafaring, pearl diving, and trade. Situated strategically at the tip of the Arabian Peninsula, our ancestors played a crucial role in facilitating the Silk Road and Spice Routes, serving as a vital hub for the exchange of goods and cultures.",
      },
      {
        id: 2,
        title: "",
        desc: "Additionally, Oman acted as the gateway for ships traversing the Strait of Hormuz, the Indian Ocean, and the Arabian Sea, solidifying its position as a key player in global maritime trade.",
      },
      {
        id: 3,
        title: "",
        desc: "By immersing yourself in Oman's maritime heritage, you'll gain a deeper appreciation for this nation's rich history and vibrant culture.",
      },
    ],
  };
  const splitContent2: any = {
    id: 1,
    secTitle: "Our Culture",
    secImgSrc:
      "/assets/images/discover-oman/environment-our-culture.png",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "",
        desc: "Oman is a cultural haven for visitors looking for a true authentic experience. Because of our secluded location from the rest of the world and being the oldest independent Arabian state, we have preserved the essence of our culture and heritage.",
      },
      {
        id: 2,
        title: "",
        desc: "Visitors are enchanted with Omani hospitality and the friendliness of our people. Oman's rich tapestry of maritime traditions, including seafaring, pearl diving, and trade has left an indelible mark on its culture.",
      },
      {
        id: 3,
        title: "",
        desc: "Oman's vibrant cultural scene is further evident in the exquisite craftsmanship of its people. Travellers are drawn to Omani craftwork, handed down from generation to generation, and our architecture that blends traditional and modern elements.",
      },
    ],
  };
  const splitContent3: any = {
    id: 1,
    secTitle: "Our People",
    secImgSrc:
      "/assets/images/discover-oman/environment-our-people.png",
    secImgAlt: "our values",
    listData: [
      {
        id: 1,
        title: "",
        desc: "Renowned for its welcoming embrace, Oman boasts one of the friendliest populations on earth. Bound by a deep sense of tolerance, Oman's almost 5 million people welcome visitors with open arms, taking great pride in sharing our rich heritage and traditions. Visitors are often impressed with the Omani hospitality and the kindness of our people.",
      },
      {
        id: 2,
        title: "",
        desc: "Known for our unwavering respect, genuine kindness, and helpfulness, the Omani people extend their warm embrace to everyone they encounter. Travellers are sure to witness this hospitality firsthand during their adventures through the Sultanate of Oman, from friendly greetings from shopkeepers to taxi drivers who go out of their way to assist with directions.",
      },
      {
        id: 3,
        title: "",
        desc: "Come and experience the warmth and generosity of the Omani people for yourself - you'll be glad you did!",
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
      <TextImageSplit
        locale={locale}
        reverse={true}
        data={splitContent1}
      />
      <FullBgDescription data={fullBgData} />
      <TextImageSplit
        locale={locale}
        reverse={true}
        data={splitContent2}
      />
      <TextImageSplit
        locale={locale}
        reverse={false}
        data={splitContent3}
      />
    </main>
  );
};
export default Environment;
