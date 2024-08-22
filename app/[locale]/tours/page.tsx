import {GeneralCardSlider} from "@/app/components/shared";
import InnerBanner from "@/app/components/banner/InnerBanner";
import {VisitOmanBrief} from "@/app/components/home";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const bannerImg = "/assets/images/tours/tour-banner.webp";
const dat = {
  heading: "Tours",
  subHeading: "Things to do in Oman",
  desc: [
    "There are so many things to do in Oman… For adrenaline-fuelled adventures, visitors can go canyoneering or dune bashing. At sea, they can try flyboarding or surfing. For something more scenic, a helicopter tour provides unparalleled views. But no trip is complete without a sunset cruise. There’s so much to be discovered.",
  ],
};
const sportsCards: any = [
  {
    id: 1,
    title: "Sports",
    subHeading: "",
    para: [
      "A playground of outdoor sporting activities awaits – from scuba diving and white-water rafting to serene kayaking journeys through turquoise waters.",
    ],
    cardData: [
      {
        id: 1,
        title: "Helicopter tours",
        imgSrc: "/assets/images/tours/helicopter-tour.png",
        desc: [
          "Experience Muscat and its scenic surroundings from a bird’s eye view.",
        ],
        link: "/helicopter-tours",
      },
      {
        id: 2,
        title: "Sunrise Desert Yoga",
        imgSrc:
          "/assets/images/tours/sunrise-desert-yoga.png",
        desc: [
          "Say ‘Namaste’ to the day with a sunrise yoga session in the desert.",
        ],
        link: "/sunrise-desert-yoga/",
      },
      {
        id: 3,
        title: "A day in paradise (Full day beach pass)",
        imgSrc: "/assets/images/tours/paradise.png",
        desc: [
          "Indulge in a pool day at one of Oman’s most idyllic resorts.",
        ],
        link: "/a-day-in-paradise-full-day-beach-pass",
      },
      {
        id: 4,
        title: "Flyboarding and wake boarding/wake surfing",
        imgSrc: "/assets/images/tours/flyboarding.png",
        desc: [
          "Motorised water sports keep adrenaline high and stress levels low.",
        ],
        link: "/flyboarding-and-wake-boarding",
      },
      {
        id: 5,
        title: "Desert madness",
        imgSrc: "/assets/images/tours/desert-madness.png",
        desc: [
          "A desert safari is a quintessential Oman experience with nature.",
        ],
        link: "/desert-madness",
      },
    ],
  },
];
const natureWildLife: any = [
  {
    id: 1,
    title: "Nature & Wildlife",
    subHeading: "",
    para: [
      "From resplendent luxury resorts to budget hotels, Oman has a surprising selection of comfy hotels for all tastes, budgets, and destinations. With so many hotels to choose from, finding the right hotel is important when planning a trip to Oman.",
    ],
    cardData: [
      {
        id: 1,
        title:
          "The unique nature and wildlife of the desert ",
        imgSrc: "/assets/images/tours/wildlife-desert.png",
        desc: [
          "The desert is home to some of the most incredible nature and wildlife.",
        ],
        link: "/the-unique-nature-and-wildlife-of-the-desert/",
      },
      {
        id: 2,
        title: "Wadi Bani Khalid",
        imgSrc: "/assets/images/tours/wadi-bani-khalid.png",
        desc: [
          "Wadi Bani Khalid is known as the largest and most famous oasis in Oman.",
        ],
        link: "/wadi-bani-khalid/",
      },
      {
        id: 3,
        title:
          "Dhow cruise along the coast south from Muscat",
        imgSrc: "/assets/images/tours/dhow-cruise.png",
        desc: [
          "Explore the south coast of Oman from Muscat in a traditional dhow.",
        ],
        link: "/dhow-cruise-along-the-coast-south-from-muscat-2",
      },
      {
        id: 4,
        title: "Wadi Al Shab hike",
        imgSrc:
          "/assets/images/tours/wadi-al-shab-hike.png",
        desc: [
          "Wadi Al Shab features several caves including one with a waterfall.",
        ],
        link: "/wadi-al-shab-hike",
      },
    ],
  },
];
const culture: any = [
  {
    id: 1,
    title: "culture",
    subHeading: "",
    para: [
      "Vibrant cultural activities waiting to be discovered by curious travellers – from historical forts and bustling souks to countless other treasures.",
    ],
    cardData: [
      {
        id: 1,
        title: "Tour of the Royal Opera House, Muscat",
        imgSrc:
          "/assets/images/tours/royal-opera-muscat.png",
        desc: [
          "The Royal Opera House is the leading centre of arts and culture in Oman.",
        ],
        link: "/tour-of-the-royal-opera-house-muscat/",
      },
      {
        id: 2,
        title: "Private dinner in the desert",
        imgSrc: "/assets/images/tours/dinner-dessert.png",
        desc: [
          "Dine under the stars and experience an Omani feast by a desert campfire.",
        ],
        link: "/private-dinner-in-the-desert/",
      },
      {
        id: 3,
        title:
          "Sunrise Desert Yoga",
        imgSrc: "/assets/images/tours/sunrise-desert-yoga.png",
        desc: [
          "Say ‘Namaste’ to the day with a sunrise yoga session in the desert.",
        ],
        link: "/sunrise-desert-yoga/",
      },
      {
        id: 4,
        title: "Visit & eat in Bedouin House in the desert",
        imgSrc: "/assets/images/tours/bedouin-house.png",
        desc: [
          "Experience authentic Bedouin hospitality in a traditional desert camp.",
        ],
        link: "/visit-and-eat-in-bedouin-house-in-the-desert/",
      },
      {
        id: 5,
        title: "Amouge Fragrances Factory Visit",
        imgSrc: "/assets/images/tours/amouge-factory.png",
        desc: [
          "Learn more about the luxury Omani brand and how it makes perfume.",
        ],
        link: "/amouge-fragrances-factory-visit/",
      },
      {
        id: 6,
        title:
          "Dhow cruise along the coast south from Muscat",
        imgSrc: "/assets/images/tours/dhow-cruise.png",
        desc: [
          "Explore the south coast of Oman from Muscat in a traditional dhow.",
        ],
        link: "/dhow-cruise-along-the-coast-south-from-muscat-2/",
      }
    ],
  },
];
const adventure: any = [
  {
    id: 1,
    title: "Adventure",
    subHeading: "",
    para: [
      "Rugged mountains and pristine beaches to hidden wadis and breathtaking deserts, Oman offers an unparalleled canvas for adventurous travellers.",
    ],
    cardData: [
      {
        id: 1,
        title: "Snake Canyon abseil canyoning",
        imgSrc: "/assets/images/tours/snake-canyon.png",
        desc: [
          "This is a fantastic entry-level adventure for those looking to get a good adrenaline rush and try out some rope work.",
        ],
        link: "/snake-canyon-abseil-canyoning",
      },
      {
        id: 2,
        title: "Via-Ferrata extreme balcony walk",
        imgSrc: "/assets/images/tours/via-ferrata.png",
        desc: [
          "A great experience atop the region’s highest mountain, Jebel Shams.",
        ],
        link: "/via-ferrata-extreme-balcony-walk",
      },
      {
        id: 3,
        title: "Seventh Hole",
        imgSrc: "/assets/images/tours/seventh-hole.png",
        desc: [
          "Explore a section of one of the largest cave networks in the World.",
        ],
        link: "/seventh-hole",
      },
      {
        id: 4,
        title: "Flyboarding and wake boarding/wake surfing",
        imgSrc: "/assets/images/tours/flyboarding.png",
        desc: [
          "Motorised water sports keep adrenaline high and stress levels low.",
        ],
        link: "/flyboarding-and-wake-boarding/",
      },
      {
        id: 5,
        title: "Desert madness",
        imgSrc: "/assets/images/tours/desert-madness.png",
        desc: [
          "A desert safari is a quintessential Oman experience with nature.",
        ],
        link: "/desert-madness",
      },
      {
        id: 6,
        title: "Sunset Dhow cruise",
        imgSrc:
          "/assets/images/tours/sunset-dhow-cruise.png",
        desc: [
          "A sunset cruise off Muscat’s coast is the best way to end the day.",
        ],
        link: "/sunset-dhow-cruise/",
      },
      {
        id: 7,
        title: "Al Hoota Cave",
        imgSrc: "/assets/images/tours/al-hoota-cruise.png",
        desc: [
          "The only show cave in the region, more than 2 million years old.",
        ],
        link: "/al-hoota-cave",
      },
      {
        id: 8,
        title: "Luxury Private Cruise",
        imgSrc:
          "/assets/images/tours/luxury-private-cruise.png",
        desc: [
          "Sail to the Daymaniyat Islands nature reserve and popular dive site.",
        ],
        link: "/luxury-private-cruise",
      },
      {
        id: 9,
        title: "Helicopter Tour",
        imgSrc: "/assets/images/tours/helicopter-tour.png",
        desc: [
          "Experience Muscat from a bird’s eye view, or take a quick transfer.",
        ],
        link: "/helicopter-tour",
      },
    ],
  },
];
const foodandBeverages: any = [
  {
    id: 1,
    title: "Food & Beverage",
    subHeading: "",
    para: [
      "Visitors can choose from a number of serviced apartments depending upon where they want to stay, their budget, the number of rooms, and the ammenities they’re looking for. We help visitors find the perfect place and book their stay directly through our site.",
    ],
    cardData: [
      {
        id: 1,
        title: "Zayr Experience",
        imgSrc: "/assets/images/tours/zayr-experience.png",
        desc: [
          "Local families open their homes to share a meal with visitors.",
        ],
        link: "/zayr-experience",
      },
      {
        id: 2,
        title: "Cooking with Omani Family",
        imgSrc: "/assets/images/tours/cooking-with-omani-family.png",
        desc: [
          "Cook alongside locals, and share the meal with the hosting family.",
        ],
        link: "/cooking-with-omani-family",
      },
      {
        id: 3,
        title: "Self BBQ Omani Night",
        imgSrc: "/assets/images/tours/self-bbq-omani-night.png",
        desc: [
          "Enjoy a barbecue without having to organise everything yourself.",
        ],
        link: "/self-bbq-omani-night",
      },
    ],
  },
];
const Tours: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Accomodation");

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief locale={locale} data={dat} />
      <GeneralCardSlider
        data={sportsCards[0]}
        isOnClickRoute={true}
        sideBySide={true}
        tablet={true}
        hover={false}
      />
       <GeneralCardSlider
        data={foodandBeverages[0]}
        isOnClickRoute={true}
        sideBySide={true}
        tablet={true}
        hover={false}
      />
      <GeneralCardSlider
        data={natureWildLife[0]}
        isOnClickRoute={true}
        sideBySide={true}
        tablet={true}
        hover={false}
      />
      <GeneralCardSlider
        data={culture[0]}
        isOnClickRoute={true}
        sideBySide={true}
        tablet={true}
        hover={false}
      />
      <GeneralCardSlider
        data={adventure[0]}
        isOnClickRoute={true}
        sideBySide={true}
        tablet={true}
        hover={false}
      />
    </main>
  );
};
export default Tours;
