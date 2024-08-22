import {OmanMap} from "@/app/components/home";
import InnerBanner from "@/app/components/banner/InnerBanner";
import {TextWithSlider} from "@/app/components/shared";
const bannerImg =
  "/assets/images/discover-oman/location-and-map-banner.png";
const LocationAndMap: React.FC<any> = ({ params: { locale } }) => {
  const textWithSliderdata = {
    title: "OUR LOCATION",
    subTitle: "",
    parasOne: [
      "The natural landscape of Oman is unlike any other place on earth and captivates visitors with its breathtaking scenery. Visitors are often overwhelmed by the scenery of the sea set against the Al Hajar Mountains.",
      "Surrounded by the Sea of Oman, the Indian Ocean, and the vast desert of the Empty Quarter, Oman enjoys a geographically distinct and secluded location. Historically, the sea served as Oman’s vital connection to the world, solidifying its position as a major trade centre for thousands of years.",
      "Oman's landscape boasts a captivating tapestry of vast deserts, verdant valleys, towering mountains, and a mesmerizing coastline. It is the only country on earth made mostly of oceanic crust and rocks from the earth’s mantle. Oman is a wonderland for visitors interested in geology.",
    ],
    parasTwo: [
     
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
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider data={textWithSliderdata} locale={locale} isShowSlider={true} isShowBtn={false} />
      <OmanMap locale={locale} customClass="location-and-map-page" />
    </main>
  );
};
export default LocationAndMap;
