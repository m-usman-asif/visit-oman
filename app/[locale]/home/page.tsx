import HomeBanner from "@/app/components/banner/HomeBanner";
import { DetailListing,OmanMap, GetInspired,Experiences,OurPartner,SeasonalEvents,VisitOmanBrief,VisitSlider} from "@/app/components/home";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { omanLocDetail } from "@/app/data/data";
const dat={
  heading:'Visit Oman',subHeading:'The Gateway to Unlimited Experiences',desc:['Visit Oman is the digitally native travel booking gateway of the Sultanate of Oman, accredited by the International Air Transport Association (IATA). We seamlessly connect tourists and travel trade partners from all around the world with trusted local tourism providers in Oman. This makes it easier for travel agents and tourists to uncover exceptional Omani experiences, while empowering local businesses and SMEs to share their unique offerings on a global stage.']
}
const eventsData: any = [
  {
    id: 1,
    title: "Spring",
    imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_spring_2bb6e76b1f.png",
    iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_spring_icon_804cc6aa8f.svg",
    // iconSrc: "/assets/images/home/seasonal-events/spring.svg",
    events:["Event Title 01","Event Title 02","Event Title 03","Event Title 04",]
  },
  {
    id: 2,
    title: "Summer",
    imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_summer_613da6f66c.png",
    iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_summer_icon_c8658ccc8b.svg",
    // iconSrc: "/assets/images/home/seasonal-events/summer.svg",
    events:["Event Title 01","Event Title 02","Event Title 03","Event Title 04",]
  },
  {
    id: 3,
    title: "Autumn",
    imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_autumn_c8ce49ae0c.png",
    iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_autumn_icon_4c13832b6d.svg",
    // iconSrc: "/assets/images/home/seasonal-events/autumn.svg",
    events:["Event Title 01","Event Title 02","Event Title 03","Event Title 04",]
  },
  {
    id: 4,
    title: "Winter",
    imgSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_winter_4561b212f9.png",
    iconSrc: "https://visitoman.s3.me-south-1.amazonaws.com/event_winter_icon_d143785754.svg",
    // iconSrc: "/assets/images/home/seasonal-events/winter.svg",
    events:["Event Title 01","Event Title 02","Event Title 03","Event Title 04",]
  },
];
// import useFetchData from "@/app/hooks/useFetchData";
const Home: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  // const { data, error, loading } = useFetchData('home-screens', locale);
  
  return (
    <main>
      <HomeBanner/>
      <VisitOmanBrief locale={locale} data={dat}/>
      <VisitSlider />
      <OmanMap locale={locale}/>
      <SeasonalEvents  data={eventsData}/>
      <Experiences locale={locale}/>
      <DetailListing data={omanLocDetail}/>
      <GetInspired locale={locale}/> 

      
      {/* <OurPartner locale={locale}/> */}

      {/* <TextImageSplit/> */}
 
     
    </main>
  );
};
export default Home;
