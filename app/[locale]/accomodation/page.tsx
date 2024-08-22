import {VisitOmanBrief} from "@/app/components/home";
import { useTranslations } from "next-intl";
import {GeneralCardSlider} from "@/app/components/shared";
import InnerBanner from "@/app/components/banner/InnerBanner";
import { unstable_setRequestLocale } from "next-intl/server";

const bannerImg ="/assets/images/accomodation/accomodation-banner.png";
const dat = {
    heading: "Accommodation",
    subHeading: "Where to stay",
    desc: [
        "From resplendent luxury resorts to camping in Bedouin tents, Oman lays claim to a wide variety of comfortable accommodations for visitors to choose from. Visitors can stay in beautiful beachfront locations, secluded desert islands, and even mountain escapes. Oman’s most popular destinations among visitors are Salalah, Muscat, Sur, Musandam, Bahla, Nizwa, and Masirah Island to name a few.",
        "Here is a selection of a wide range of stays, offered through the Visit Oman platform."
    ],
};
const glampingCards: any = [
    {
        id: 1,
        title: "Glamping",
        subHeading: "",
        para: [
            "While our ancestors have lived in tents in the desert for centuries, a new crop of campers have adapted this heritage for the modern era. Oman boasts a selection of glamping options that combine the Bedouin lifestyle with modern conveniences for a luxurious experience that won’t be forgotten."
        ],
        cardData: [
            {
                id: 1,
                title: "1000 Nights Camp",
                imgSrc: "/assets/images/accomodation/glamping-card-1.png",
                desc: [
                    "The tented camp features an outdoor pool and children’s playground."
                ],
                link: "/1000-nights-camp"
            },
            {
                id: 2,
                title: "Ras Al Jinz Turtle Reserve",
                imgSrc: "/assets/images/accomodation/glamping-card-2.png",
                desc: [
                    "The tents are close to the ridge overlooking the turtle nesting site."
                ],
                link: "/ras-al-jinz-turtle-reserve"
            },
            
        ],
    }
];
const servicedApartments: any = [
    {
        id: 1,
        title: "Serviced Apartments",
        subHeading: "",
        para: [
            "Visitors can choose from a number of serviced apartments depending upon where they want to stay, their budget, the number of rooms, and the ammenities they’re looking for. We help visitors find the perfect place and book their stay directly through our site."
        ],
        cardData: [
            {
                id: 1,
                title: "Millennium Executive Apartments",
                imgSrc: "/assets/images/accomodation/serviced-appartments-1.png",
                desc: [
                    "Millennium Executive Apartments Muscat features modern design elements."
                ],
                link: "/millennium-executive-apartments"
            },
            {
                id: 2,
                title: "Somerset Apartments",
                imgSrc: "/assets/images/accomodation/serviced-appartments-2.png",
                desc: [
                    "Somerset Panorama Muscat offers spacious apartments with a hotel feel."
                ],
                link: "/somerset-apartments"
            },
            {
                id: 3,
                title: "Fraser Suites",
                imgSrc: "/assets/images/accomodation/serviced-appartments-4.png",
                desc: [
                    "Fraser Suites Muscat offers luxury units in the heart of the city."
                ],
                link: "/fraser-suites"
            },
            {
                id: 4,
                title: "Coral Muscat Hotel & Apartments",
                imgSrc: "/assets/images/accomodation/serviced-appartments-3.png",
                desc: [
                    "Coral Muscat Hotel & Apartments has some of the best rooms in the city."
                ],
                link: "/coral-apartments"
            }
        ],
    }
];
const hotels: any = [
    {
        id: 1,
        title: "Hotels",
        subHeading: "",
        para: [
            "From resplendent luxury resorts to budget hotels, Oman has a surprising selection of comfy hotels for all tastes, budgets, and destinations. With so many hotels to choose from, finding the right hotel is important when planning a trip to Oman."
        ],
        cardData: [
            {
                id: 1,
                title: "Hilton Garden Inn",
                imgSrc: "/assets/images/accomodation/hotel-1.png",
                desc: [
                    "Hilton Garden Inn is a 4-star hotel with city and mountain views."
                ],
                link: "/hilton-garden-inn"
            }, 
            {
                id: 2,
                title: "Royal Tulip Muscat",
                imgSrc: "/assets/images/accomodation/hotel-2.png",
                desc: [
                    "Royal Tulip Muscat is a 4-star hotel with true Omani hospitality."
                ],
                link: "/royal-tulip-muscat"
            },
            {
                id: 3,
                title: "Novotel Muscat",
                imgSrc: "/assets/images/accomodation/hotel-3.png",
                desc: [
                    "Novotel Muscat Airport is a modern 4-star hotel with spacious rooms."
                ],
                link: "/novotel-muscat"
            },
            {
                id: 4,
                title: "Atana Stay Al Ashkara",
                imgSrc: "/assets/images/accomodation/hotel-4.png",
                desc: [
                    "The funky Atana Stay Al Ashkara will appeal to the young at heart."
                ],
                link: "/atana-stay-al-ashkara"
            },
            {
                id: 5,
                title: "Grand Millennium Hotel",
                imgSrc: "/assets/images/accomodation/hotel-5.png",
                desc: [
                    "Grand Millenium Hotel is a luxury 5-star hotel in the heart of the city."
                ],
                link: "/grand-millennium-hotel"
            },
            {
                id: 6,
                title: "IBIS Muscat",
                imgSrc: "/assets/images/accomodation/hotel-6.png",
                desc: [
                    "Ibis Muscat is a vibrant economy hotel in the centre of the city."
                ],
                link: "/ibis-muscat"
            },
            {
                id: 7,
                title: "Atana Khasab Resort",
                imgSrc: "/assets/images/accomodation/hotel-7.png",
                desc: [
                    "Perched on a cliff, the 4-star Atana Khasab offers views over Musandam."
                ],
                link: "atana-khasab"
            },
            {
                id: 8,
                title: "Masira Island Resort",
                imgSrc: "/assets/images/accomodation/hotel-8.png",
                desc: [
                    "Masira Island Resort brings luxury living to a beautiful landscape."
                ],
                link: "/masira-island-resort"
            },
            {
                id: 9,
                title: "Tulip Inn Downtown",
                imgSrc: "/assets/images/accomodation/hotel-9.png",
                desc: [
                    "The 3-star Tulip Inn Downtown features archetypal fortress architecture."
                ],
                link: "/tulip-inn-downtown"
            }
        ],
    }
];

const Accomodation: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Accomodation");

  return (
    <main>
        <InnerBanner data={bannerImg} />
        <VisitOmanBrief locale={locale} data={dat} />
        <GeneralCardSlider data={glampingCards[0]} isOnClickRoute={true} sideBySide={true} tablet={true} hover={false} />
        <GeneralCardSlider data={servicedApartments[0]} isOnClickRoute={true} sideBySide={true} tablet={true} hover={false}/>
        <GeneralCardSlider data={hotels[0]} isOnClickRoute={true} sideBySide={true} tablet={true} hover={false}/>
    </main>
  );
};
export default Accomodation;
