import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import {GeneralCardSlider,TextWithSlider} from "@/app/components/shared";


const bannerImg ="/assets/images/transportation/transporation-banner.png";

const Transportation: React.FC<any> = ({params: { locale },}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

    const textWithSliderdata = {
        title: "Transportation",
        subTitle: "",
        parasOne: [
            "Car rentals, airport transfers, chauffeurs—there are so many ways to get around Oman. If you choose to hire a car, Oman is a surprisingly easy place to get around. Most of its major cities are linear and the entire country has an incredibly well-maintained road network that stretches far into the desert. For those who don’t want to worry about navigation, hiring a chauffeur is a stress-free option to reach Oman’s main attractions. With so many transportation options to choose from, Visit Oman takes the hassle out of selecting the right one.",
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
    const attractionsSlider: any = [
        {
            id: 1,
            title: "",
            subHeading: "",
            para: [],
            cardData: [
                {
                    id: 1,
                    title: "Chauffeurs",
                    imgSrc: "/assets/images/transportation/chauffeurs.png",
                    desc: [
                        "A chauffeured car is a stress-free way to discover Oman. Drivers can pick up visitors from any location at their convenience and take them anywhere. From SUVs to luxury sedans, there are several categories to choose from."
                    ]
                }, 
                {
                    id: 2,
                    title: "Airport Transfers",
                    imgSrc: "/assets/images/transportation/airport-transfers.png",
                    desc: [
                        "For visitors needing a convenient hotel drop-off from the airport, private airport transfers offer the perfect solution, with various options available based on location and group size."
                    ]
                },
                {
                    id: 3,
                    title: "Car Hire",
                    imgSrc: "/assets/images/transportation/car-hire.png",
                    desc: [
                        "For those seeking ultimate freedom in exploring Oman, hiring a car is the answer. With major car rental brands and a wide range of vehicle types, you can easily rent, hit the road, and experience Oman at your own rhythm."
                    ]
                }
            ],
        }
    ];
    return (
        <main>
            <InnerBanner data={bannerImg} />
            <TextWithSlider
                data={textWithSliderdata}
                locale={locale}
                isShowSlider={true}
                isShowBtn={false}
            />
            <GeneralCardSlider data={attractionsSlider[0]} isOnClickRoute={false} sideBySide={true}         tablet={true}
            />
        </main>
    );
};
export default Transportation;
