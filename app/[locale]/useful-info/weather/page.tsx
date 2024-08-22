import InnerBanner from "@/app/components/banner/InnerBanner";
import {FullBgDescription,TextWithSlider} from "@/app/components/shared";
import WeatherClimateTable from "@/app/components/useful-info/weather-climate/WeatherClimateTable";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// import useFetchData from "@/app/hooks/useFetchData";
const WeatherClimate: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("WeatherClimate");
  const selectLocale = {
    selectTitle: t("select-title"),
    cities: [
      t("city.1.name"),
      t("city.2.name"),
      t("city.3.name"),
      t("city.4.name"),
      t("city.5.name"),
      t("city.6.name"),
      t("city.7.name"),
      t("city.8.name"),
      t("city.9.name"),
    ],
    weekDays: [
      t("weekdays.1.name"),
      t("weekdays.2.name"),
      t("weekdays.3.name"),
      t("weekdays.4.name"),
      t("weekdays.5.name"),
      t("weekdays.6.name"),
      t("weekdays.7.name"),
    ],
  };
  const bannerImg =
    "/assets/images/useful-info/weather-climate-banner.png";
  const textWithSliderdata = {
    title: "Weather",
    parasOne: [
      "The best time to visit is during the winter months between October to March when the weather is pleasant and cool. April and May are pleasant, but warmer than the winter months. The summer months of June to September can be hot although the temperature remains pleasant in the mountain range.",
    ],
    sliderImgs: [
      {
        id: 1,
        src: "avatar 1",
        img: "/assets/images/useful-info/weather-climate-slider-1.png",
      },
      {
        id: 2,
        src: "avatar 2",
        img: "/assets/images/useful-info/weather-climate-slider-1.png",
      },
      {
        id: 3,
        src: "avatar 3",
        img: "/assets/images/useful-info/weather-climate-slider-1.png",
      },
    ],
  };
  const fullBgDataFirst = {
    backgroundImg:
      "/assets/images/useful-info/weather-climate-full-bg-banner.png",
    title: "CLIMATE",
    desc: [
      "Oman has a subtropical dry desert climate with a low annual rainfall. In the Al Hajar Mountain range and Dhofar region, the climate remains moderate throughout the year, a rarity in the Arabian Peninsula.",
    ],
  };

  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TextWithSlider
        data={textWithSliderdata}
        locale={locale}
        isShowSlider={true}
        isShowBtn={false}
      />
      <FullBgDescription data={fullBgDataFirst} />
      <WeatherClimateTable locale={locale} selectLocale={selectLocale} />
    </main>
  );
};
export default WeatherClimate;
