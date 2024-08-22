import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import {GeneralCardSlider,TextWithSlider} from "@/app/components/shared";


const bannerImg ="/assets/images/attractions/attractions-banner.png";

const Attractions: React.FC<any> = ({params: { locale },}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");

    const textWithSliderdata = {
        title: "Attractions",
        subTitle: "",
        parasOne: [
            "From museums that tell the story of our past, to the Royal Opera House where you can enjoy cultural performances from around the world, there are so many incredible attractions in Oman that are open year-round. Plan ahead and choose the top attractions to make the most of your trip.",
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
                    title: "Royal Opera House",
                    imgSrc: "/assets/images/attractions/royal-opera.png",
                    desc: [
                        "The Royal Opera House, Oman’s leading centre of arts and culture, offers performances from January to May and a year-round feast for the senses with guided tours, the music library, exhibitions, dining, and shopping."
                    ]
                }, 
                {
                    id: 2,
                    title: "The National Museum",
                    imgSrc: "/assets/images/attractions/national-meuseum.png",
                    desc: [
                        "The National Museum houses cultural treasures from Oman’s past, immersive digital experiences, and a cinema. Here, visitors can see ancient objects from traditional life and a large collection of prehistoric artefacts."
                    ]
                },
                {
                    id: 3,
                    title: "Amouage Perfumery",
                    imgSrc: "/assets/images/attractions/amouage-perfumery.png",
                    desc: [
                        "Amouage, a celebrated luxury perfume brand founded in Oman in 1983, houses a unique factory and visitor’s center where guests can witness the meticulous creation of its exquisite fragrances."
                    ]
                },
                {
                    id: 4,
                    title: "Al Hoota Cave",
                    imgSrc: "/assets/images/attractions/al-hoota-cave.png",
                    desc: [
                        "At the foot of Oman’s highest mountain, Al Hoota is a 2-million-year-old cave that extends 5 kilometers underground—ending at Cave Lake. Inside its chambers, you can see magnificent stalactites, formed over millions of years."
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
export default Attractions;
