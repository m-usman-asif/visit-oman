import InnerBanner from "@/app/components/banner/InnerBanner";
import {TextImageSplit,TextWithSlider,FullBgDescription} from "@/app/components/shared";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";



const TravelTips: React.FC<any> = ({params: { locale },}) => {
    unstable_setRequestLocale(locale);
    const t = useTranslations("Home");
    const bannerImg ="/assets/images/useful-info/travel-tips-banner.png";
    const textWithSliderdata = {
        title: "TRAVEL TIPS",
        parasOne: [
            "Oman is one of the safest and friendliest countries in the world. To truly unlock the beauty of the Sultanate of Oman and ensure a smooth and enjoyable visit, let us explore some key cultural norms, safety tips, and essential considerations. Understanding the local currency will empower you to navigate markets with confidence."
        ],
        parasTwo: [
          "Ready to embark on your Omani adventure? With these tips in mind, you are well on your way to a safe, enriching, and unforgettable experience."
        ],
        sliderImgs: [
            {
                id: 1,
                src: "avatar 1",
                img: "/assets/images/useful-info/travel-tips-slider.png",
            },
            {
                id: 2,
                src: "avatar 2",
                img: "/assets/images/useful-info/travel-tips-slider.png",
            },
            {
                id: 3,
                src: "avatar 3",
                img: "/assets/images/useful-info/travel-tips-slider.png",
            },
        ],
    };
    const fullBgDataFirst = {
        backgroundImg:"/assets/images/useful-info/travel-tip-first-full-bg.png",
        title: "Safety in oman",
        subTitle: "Navigate Safely, Discover Serenely",
        desc: [
            "Rest assured, Oman welcomes you with open arms and peaceful streets. As with any travel destination, let us explore some simple tips to navigate your adventures with confidence. Oman boasts a reputation for being one of the safest countries in the world.",
            "Although Oman is among the safest countries in the world, it is important to be vigilant. As with any country, remember to keep valuables secure in your car or on the beach.",
            "Driving in Oman is quite safe, but always stay alert and navigate Oman’s well-maintained roads by respecting traffic rules, including roundabouts, for everyone’s safety. While driving at night in rural areas is not recommended, daytime journeys unveil breathtaking landscapes and authentic cultural experiences.",
            "Empower your adventures by downloading an offline map for ease of navigation."
        ],
    };
    const splitContent1: any = {
        id: 1,
        secTitle: "Our History",
        secImgSrc:"/assets/images/useful-info/omani-riyal.png",
        secImgAlt: "omani rial",
        listData: [
            {
                id: 1,
                title: "",
                desc: "The Omani Rial (OMR) ranks among the top 3 most valuable currencies in the world, even higher than the Euro! Divided into 1000 Baisa, comes in notes from OMR 1 to OMR 50, with 100 and 500 Baisa notes handy for smaller purchases. While coins exist in all sorts of denominations, keep in mind that 5 and 10 Baisa might not be universally accepted.",
            },
            {
                id: 2,
                title: "",
                desc: "Cash is widely used in Oman, but do not worry – credit and debit cards are also widely accepted, especially Visa and Mastercard. Automatic Teller Machines (ATMs) are readily available in banks, airports, gas stations, convenience stores, and shopping malls, ensuring convenient access to cash.",
            },
            {
                id: 3,
                title: "",
                desc: "Be sure to download a currency conversion app with offline capabilities for worry-free transactions before your trip, ensuring smooth navigation of your transactions.",
            },
        ],
    };
    const splitContent2: any = {
        id: 1,
        secTitle: "A Guide to Etiquette",
        secImgSrc:"/assets/images/useful-info/omani-etiquette.png",
        secImgAlt: "our values",
        listData: [
            {
                id: 1,
                title: "",
                desc: "Omanis are renowned for their warmth and hospitality, and showing respect to our culture is key to a truly enriching experience. Sharing a positive cultural practice like offering a friendly greeting -Salam- can further encourage respectful interactions with locals. Here are some helpful tips:",
            },
            {
                id: 2,
                title: "Dress Modestly:",
                desc: "Avoid overly revealing clothing, especially in religious sites and during the holy month of Ramadan. Head coverings are not mandated for women outside of mosques. Remember, modesty is always appreciated.",
            },
            {
                id: 3,
                title: "Respectful Photography:",
                desc: "Always seek permission before taking photos of locals. Be mindful of sensitive locations like government buildings and airports and remember that recreational drones are prohibited.",
            },
            {
                id: 4,
                title: "Friendliness First:",
                desc: "A friendly “Salam” greeting goes a long way! Be mindful of public displays of affection, as Omani culture generally keeps such expressions private. Always be polite and respectful in your interactions, mindful of your tone and language.",
            },
            {
                id: 5,
                title: "",
                desc: "Embrace the warmth of Omani culture with respect and discover a land that welcomes you with open arms.",
            },
        ],
    };
    const fullBgDataSec = {
        backgroundImg:"/assets/images/useful-info/oman-tax-savings-full-bg.png",
        title: "Tax savings",
        subTitle: "Practical Guide to VAT Refunds in Oman",
        desc: [
            "Good news for shoppers! You can claim a VAT refund on personal purchases provided the value of these goods is at least OMR 25 (not inclusive of VAT). Moreover, the goods should have been purchased not earlier than 3 months before the departure of the passenger and must be transported in their suitcases or carry-on luggage.",
            "Items ineligible for a refund are cigarettes and other tobacco-related products, food and beverage items, and oil and gas products or their derivatives. Other items could be potentially added to the list of merchandise that is not eligible for a refund, according to the tax authorities.",
            "The VAT regulations define tourists as individuals who do not have a permanent place of residence in Oman or the wider GCC region. Furthermore, VAT refunds cannot be claimed by those staying in the country for more than 3 months at a stretch. Crew members of a flight, ship, road transport or ferry service are not eligible for a refund as well.",
            "Claim your VAT refund at the dedicated counters at the airport, located at departure halls before security checks, in addition to land borders and ferry terminals. For eligible larger purchases exceeding OMR 500, head to the Oman Tax Authority website for a convenient online refund application.",
            "Remember to collect tax receipts, pack purchases in your personal luggage, download the Oman Tax Refund App, check eligibility requirements, and allow enough time for processing before your departure.",
            "Shop with confidence, claim your refunds, and enjoy a tax-free shopping spree in Oman!"
        ],
    };
    const splitContent3: any = {
        id: 1,
        secTitle: "Dial with Confidence: Essential Numbers",
        secImgSrc:"/assets/images/useful-info/essential-numbers.png",
        secImgAlt: "essential numbers",
        listData: [
            {
                id: 1,
                title: "",
                desc: "In case of emergency, the following contacts might be helpful.",
            },
            {
                id: 2,
                title: "",
                desc: "For general emergencies, immediate police assistance, and road accidents causing vehicle damage, call: 9999.",
            },
            {
                id: 3,
                title: "",
                desc: "Need a taxi in Muscat? Have car troubles and want to request a tow truck? Call Muscat Taxi Main Station at +968 9914 3222. Visitors may consider taxi apps, such as Marhaba and Oman Taxi (OTaxi).",
            },
            {
                id: 4,
                title: "",
                desc: "Keep in mind that the working week in Oman is from Sunday to Thursday. Most foreign embassies and consulates are in the capital city Muscat and may have shorter operating hours, especially during the holy month of Ramadan. Confirm specific timings beforehand to avoid inconvenience.",
            },
            {
                id: 5,
                title: "",
                desc: "Dial help, relax, and discover Oman! Essential numbers in your pocket, peace of mind at your fingertips.",
            },
        ],
    };
    const splitContent4: any = {
        id: 1,
        secTitle: "Customs Declaration",
        secImgSrc:"/assets/images/useful-info/omani-customs.png",
        secImgAlt: "omani customs",
        listData: [
            {
                id: 1,
                title: "",
                desc: "Under Article 53, every traveller leaving the Sultanate of Oman must declare to the Customs Authority any cash, currencies, or negotiable financial instruments in their possession that exceed OMR 6,000 (approximately $15,582 or equivalent in other currencies).",
            },
            {
                id: 2,
                title: "",
                desc: "This declaration ensures compliance with Omani customs regulations and safeguards the integrity of financial transactions.",
            },
            {
                id: 3,
                title: "",
                desc: "Please have your declaration ready upon departure for a seamless clearance process.",
            },
            {
                id: 4,
                title: "",
                desc: "For inquiries, visit https://customs.gov.om or call +968 8008 0022.",
            },
        ],
    };
  return (
    <main>
        <InnerBanner data={bannerImg} />
        <TextWithSlider  data={textWithSliderdata} locale={locale} isShowSlider={true} isShowBtn={true}/>
        <FullBgDescription data={fullBgDataFirst} />
        <TextImageSplit locale={locale} reverse={true} data={splitContent1}/>
        <TextImageSplit locale={locale} reverse={false} data={splitContent2}/>
        <FullBgDescription data={fullBgDataSec} />
        <TextImageSplit locale={locale} reverse={true} data={splitContent3}/>
        <TextImageSplit locale={locale} reverse={false} data={splitContent4}/>
    </main>
  );
};
export default TravelTips;
