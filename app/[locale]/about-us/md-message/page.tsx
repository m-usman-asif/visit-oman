import { useTranslations } from "next-intl";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import {ManagerMessage} from "@/app/components/about-us";


const bannerImg ="/assets/images/about/md-main-banner.svg";
const mdCollapseData=[
    {
      id: 1,
      title: "For our trade partners",
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
    },
    {
      id: 2,
      title: "For Omani tourism providers",
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
]

const mdMessage = {
  title: "MANAGING DIRECTOR'S MESSAGE",
  desc: [
    "Oman’s tourism industry is evolving, and there are some exciting developments on the horizon! Welcome to Visit Oman, where digital innovation paves the way for endless possibilities. I’m proud to be part of the National Travel Operator – Visit Oman, the Sultanate’s digitally native booking engine designed to streamline Omani tourism offerings and empower local businesses.",
    "Visit Oman offers a seamless bridge between local tourism offerings and global demand. We’re not just a marketplace, we’re a digital ecosystem connecting vetted travel and tourism SMEs in Oman with well-established trade partners from source markets worldwide. Discover 60+ airlines, 100+ hotels, and over 200 authentic experiences, including 80% captivating experiences crafted by local SMEs; these aren’t just numbers, they represent the diversity and richness of Omani tourism, now readily accessible to the world."
  ]
};

const MDMessage: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <ManagerMessage data={mdCollapseData} message={mdMessage}/>
    </main>
  );
};
export default MDMessage;
