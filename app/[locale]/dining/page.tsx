import InnerBanner from "@/app/components/banner/InnerBanner";
import {TextWithSlider,GeneralCardSlider} from "@/app/components/shared";
import {GalleryCards} from "@/app/components/cards";import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";


const bannerImg ="/assets/images/dining/dining-banner.png";

const Dining: React.FC<any> = ({params: { locale },}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

    const textWithSliderdata = {
        title: "Dining",
        subTitle: "",
        parasOne: [
            "Oman is a wonderland for food lovers. There’s fine dining in luxury hotels, traditional Omani food at an authentic restaurant or in a local’s home, barbeques out in the desert, and a wide range of restaurants that serve cuisines from around the world. With so many great dining options to choose from, it’s important to select the best ones when planning a trip to Oman."
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
                    title: "Traditional Omani",
                    imgSrc: "/assets/images/dining/traditional-omani.png",
                    desc: [
                        "To truly experience Oman, you need to try Omani cuisine. With a focus on fresh seafood and red meat, each main dish is accompanied by unleavened bread or rice spiced with cardamom, saffron, and turmeric, reflecting our diversity. There are several traditional Omani restaurants to choose from."
                    ]
                }, 
                {
                    id: 2,
                    title: "International Flavours",
                    imgSrc: "/assets/images/dining/international-flavours.png",
                    desc: [
                        "Whatever cuisine visitors are craving, they can find in Oman. From Italian and Indian food to Turkish and Lebanese, Oman offers visitors the world thanks to its ethnic diversity and global outlook."
                    ]
                },
                {
                    id: 3,
                    title: "Fine Dining",
                    imgSrc: "/assets/images/dining/fine-dining.png",
                    desc: [
                        "There’s an abundance of fine dining to be savoured in Oman. Many of our luxury hotels offer exceptional dining with culinary delights inspired by our local produce. There are even experiences that blend the best of Oman, bringing together architecture and food, culminating in culinary masterpieces."
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
export default Dining;
