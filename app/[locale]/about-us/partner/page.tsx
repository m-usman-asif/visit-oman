import {VisitOmanBrief,OurPartner} from "@/app/components/home";
import { useTranslations } from "next-intl";
import {GeneralCardSlider} from "@/app/components/shared";
import {PartnerCollapse} from "@/app/components/about-us";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
const dat = {
  heading: "OUR SUPPLIERS",
  desc: [
    "We are partnering with local businesses and SMEs across Oman that offer a range of travel services and experiences. If you have a business related to tourism in Oman, register with us and we will connect you to trade partners from around the world. The more suppliers on board, the more bespoke travel experiences Oman can offer",
    "With over 200 suppliers, here is a glimpse into a selection of experiences offered through Visit Oman.",
  ],
};
const partner: any = [
  {
    id: 1,
    title: "Experiences",
    cardData: [
      {
        id: 1,
        title: "Ghudu By Hun’na",
        imgSrc: "/assets/images/about/partner-guddu.png",
        desc: "A community tourism project, brought to you by HUN’na. The project aims to provide unique experiences from the east to the west of Dhofar all year, and to introduce Dhofar’s different seasons to visitors. Enjoy a local cultural experience like never before with the locals, and the option for a dedicated local female guide for some of the female only experiences.",
      },
      {
        id: 2,
        title: "Amouage",
        imgSrc: "/assets/images/about/partner-amouage.png",
        desc: "Amouage is a luxury perfume brand founded in Oman in 1983. It features a factory and visitor centre where people can see how the perfume is made, using only the highest-quality ingredients sourced from around the world.",
      },
      {
        id: 3,
        title: "Al Sharqiya Aviation",
        imgSrc:
          "/assets/images/about/partner-alsharqiyah.png",
        desc: "Al Sharqiya Aviation is Oman’s first commercial aviation service provider. It offers tours from the sky as well as charter and logistics services with the Airbus H125 helicopter and Embraer Legacy 650 business jet.",
      },
      {
        id: 4,
        title: "Thousand Nights Camp",
        imgSrc:
          "/assets/images/about/partner-thousand-nightcamp.png",
        desc: "Thousand Nights Camp offers a variety of adventures and desert experiences exploring its scenic terrains and adventurous sporting activities.",
      },
    ],
  },
  {
    id: 2,
    title: "Attractions",
    cardData: [
      {
        id: 1,
        title: "Oman Across Ages Museum",
        imgSrc:
          "/assets/images/about/partner-oman-across.png",
        desc: "Located in Wilayat Manah, Oman Across Ages Museum showcases the history of the land of Oman dating back to 800 million years. A truly unique and immersive experience that takes visitors on a journey through time, from the formation of the Earth’s crust to the modern day with interactive exhibits, ancient artefacts, and stunning architecture.",
      },
      {
        id: 2,
        title: "Infinite Tours",
        imgSrc: "/assets/images/about/partner-infinite.png",
        desc: "A Destination Management company with extensive experience in innovative product development, Infinite Tours offers individual leisure & adventure tours, group tours (Cultural, historical, adventure, women exclusive, and special interest tours), and cruise excursions.",
      },
      {
        id: 3,
        title: "Sidab Sea Tours",
        imgSrc: "/assets/images/about/partner-sidab.png",
        desc: "A Destination Management company with extensive experience in innovative product development, Infinite Tours offers individual leisure & adventure tours, group tours (Cultural, historical, adventure, women exclusive, and special interest tours), and cruise excursions.",
      },
      {
        id: 4,
        title: "The National Museum",
        imgSrc:
          "/assets/images/about/partner-national-museum.png",
        desc: "The National Museum showcases the nation’s heritage from the earliest human settlement in the Oman Peninsula two million years ago through to the present day. It boasts 14 permanent galleries, and temporary exhibitions.",
      },
      {
        id: 5,
        title: "Big Bus",
        imgSrc: "/assets/images/about/partner-bigbus.png",
        desc: "Hop on the Muscat bus tour to discover the fascinating history and traditional Arabian charm of Oman’s capital. Hop off to explore 16th century forts, museums and more, and to immerse yourself in the culture of Muscat.",
      },
      {
        id: 6,
        title: "Sea of Oman",
        imgSrc:
          "/assets/images/about/partner-sea-of-oman.png",
        desc: "With marine leisure provider Sea of Oman, you can discover Oman’s breathtaking coastline, encounter incredible marine life, and enjoy activities such as sailing and wakeboarding, charters, powerboats, and PADI diving courses.",
      },
      {
        id: 7,
        title: "Star of the Sea Tours",
        imgSrc:
          "/assets/images/about/partner-star-of-sea.png",
        desc: "Star of the Sea Tours is an established provider in Oman of outdoor activities, especially boat tours & water sports, including sunset dhows.",
      },
      {
        id: 8,
        title: "Canyon Adventures Tours",
        imgSrc: "/assets/images/about/partner-canyon.png",
        desc: "Canyon Adventures and Tours is dedicated to adventures in Oman, including canyoning and abseiling, as well as providing experienced and knowledgeable guides for areas such as Misfat Al Abreen.",
      },
    ],
  },
  {
    id: 3,
    title: "Stays",
    cardData: [
      {
        id: 1,
        title: "Marhaba Dhofar",
        imgSrc: "/assets/images/about/partner-marhaba.png",
        desc: "Your gateway to hidden wonders in Dhofar. Explore beyond the usual sights with Marhaba Dhofar’s immersive private and group tours. From uncovering ancient treasures on UNESCO heritage sites to experiencing an overnight desert stay at the Empty Quarter. The southern part of Oman has so much to offer beyond the Khareef season.",
      },
      {
        id: 2,
        title: "Rove Adventures",
        imgSrc: "/assets/images/about/partner-rove.png",
        desc: "Established in 2016 by a group of youngsters with a passion for the outdoors, Rove Adventures Company aims to promote Oman’s incredible natural wealth. The firm specializes in unique adventures and travel experiences.",
      },
      {
        id: 3,
        title: "Royal Baloon",
        imgSrc: "/assets/images/about/partner-royal.png",
        desc: "Founded in 2019, the Royal Balloon Oman is the first hot air balloon company in Oman, offering flights over the breathtaking Wahiba Sands, where visitors can soak in panoramic views as the sun paints the desert sky.",
      },
      {
        id: 4,
        title: "Desert Nights Camp",
        imgSrc: "/assets/images/about/partner-desert.png",
        desc: "The 5-star Desert Nights Camp is situated on the Sharqiya Sands, a secluded area of beautiful desert landscape. It offers 39 Bedouin-style tents and 14 rooms. Services include camel rides and sunset 4×4 dune drives..",
      },
      {
        id: 5,
        title: "Raz al Jinz Turtle Reserve",
        imgSrc:
          "/assets/images/about/partner-raz-al-jinz.png",
        desc: "Ras Al Jinz Turtle Reserve is a unique natural landscape of unspoiled shorelines, golden deserts, green oases and rugged mountains. It’s known globally as a crucial nesting site of the endangered green sea turtle.",
      },
    ],
  },
];
const bannerImg ="/assets/images/about/partner-main-banner.png";

const collapseContent = 
  {
    id: 1,
    title: "Why visit Oman?",
    startPara:'Oman, a jewel of the Arabian Peninsula, offers a unique blend of ancient heritage and modern charm. Here are some compelling reasons to visit this captivating country:',
    endPara:'Discover the magic of Oman – where every visit is a journey through time, nature, and tradition. Plan your trip now!',
    content: [
      {
        id: 1,
        title: "Rich Culture and History",
        desc: "Oman is a treasure trove of ancient forts, castles, and bustling souks. Explore UNESCO World Heritage sites and experience vibrant Omani traditions and hospitality.",
      },
      {
        id: 2,
        title: "Stunning Natural Beauty",
        desc: "From the Al Hajar Mountains and serene beaches to the Wahiba Sands desert and lush wadis, Oman's landscapes are breathtakingly diverse.",
      },
      {
        id: 3,
        title: "Adventure Awaits",
        desc: "Hiking, dune bashing, diving, and cave exploring – Oman offers endless outdoor activities for adventure seekers.",
      },
      {
        id: 4,
        title: "Warm and Welcoming People",
        desc: "Experience the legendary hospitality of Omanis, known for their friendliness and generosity.",
      },
      {
        id: 5,
        title: "Unique Experiences",
        desc: "Enjoy traditional Omani cuisine, vibrant festivals, and wildlife sightings, including the endangered Arabian Oryx and playful dolphins.",
      },
      {
        id: 6,
        title: "Safe and Accessible",
        desc: "Oman is one of the safest countries in the region, with modern amenities and well-maintained infrastructure for hassle-free travel.",
      },
    ],
}

const Partner: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief locale={locale} data={dat} />
      <PartnerCollapse data={collapseContent} />
      <GeneralCardSlider data={partner[0]} tablet={true}/>
      <GeneralCardSlider data={partner[1]} tablet={true}/>
      <GeneralCardSlider data={partner[2]} tablet={true}/>
      <OurPartner locale={locale}/>
    </main>
  );
};
export default Partner;
