"use client";
import React, { useEffect, useState } from "react";
import {ScreenContainer} from "@/app/components/shared";
import "./weather-climate.css";

const WeatherClimateTable = ({
  locale,
  selectLocale,
}: any) => {
  const { selectTitle, cities, weekDays } = selectLocale;
  const [value, setValue] = useState("258638");
  const [data, setData] = useState([]);
  const forecastCities = [
    { label: cities[0], value: "258638" },
    { label: cities[1], value: "258843" },
    { label: cities[2], value: "321634" },
    { label: cities[3], value: "256960" },
    { label: cities[4], value: "256752" },
    { label: cities[5], value: "256684" },
    { label: cities[6], value: "257039" },
    { label: cities[7], value: "256811" },
    { label: cities[8], value: "261623" },
  ];
  const fetcWeatherData = async ({
    value,
  }: {
    value: string;
  }) => {
    const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=ubtgUBUePmjmYRbcXNz6LyS6v0mLZ15d&language=${locale}&details=true&metric=true`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data?.DailyForecasts || []);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetcWeatherData({ value });
  }, [value]);
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
  };
  const filteredData = data?.map((item: any) => {
    const dateObj = new Date(item?.Date);
    const dayMonth = dateObj?.toLocaleDateString(locale === "en"? "en-GB":"ar-GB", {
      day: "2-digit",
      month: "2-digit",
    });
    const dayName = dateObj?.toLocaleDateString( locale === "en"? "en-GB":"ar-GB", {
      weekday: "long",
    });
    return {
      date: dayMonth,
      dayName: dayName,
      precip: item?.Day?.PrecipitationProbability,
      day: {
        icon: item?.Day?.Icon,
        iconPhrase: item?.Day?.IconPhrase,
        precipitation: item?.Day?.HasPrecipitation,
      },
      temperature: {
        minimum: item?.Temperature.Minimum?.Value,
        maximum: item?.Temperature.Maximum?.Value,
      },
    };
  });

  return (
    <div className="weather-climate-table-container mb-[80px] lg:mb-[50px] xs:mb-[40px]">
      <ScreenContainer>
        <div className="weather-climate-table-wrapper flex flex-col gap-[51px] lg:gap-[31px] ">
          <div className="wctw-title">
            <h2 className="vo-heading">{selectTitle}</h2>
          </div>
          <div className="wctw-table flex flex-col gap-[50px] xs:gap-[16px]">
            <div className="wctw-table-select">
              <select
                className={`wctw-select h-[60px] max-w-[406px] cursor-pointer border-[1px] border-[#E1E1E1] bg-[#f1f2f6] font-Montserrat lg:h-[30px] lg:max-w-[218px] lg:text-[14px] ${locale === "en" ? "wcts-select-en-bg-x" : "wcts-select-ar-bg-x"}`}
                onChange={handleSelectChange}
                value={value}
              >
                {forecastCities &&
                  forecastCities?.map(
                    (item: any, index: number) => {
                      return (
                        <option
                          key={index}
                          value={item?.value}
                        >
                          {item?.label}
                        </option>
                      );
                    },
                  )}
              </select>
            </div>

            <div className="wctw-table-grid ">
              {filteredData &&
                filteredData?.map(
                  (item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="wctc-grid-row flex flex-row items-center justify-between border-t-[1px] border-[#00000033] py-[20px] lg:py-[14px] xs:py-[8px]"
                      >
                        <div className="wctc-grid-col wctc-grid-col-text w-full max-w-[180px] wcts-label-text lg:max-w-[90px] sm:max-w-[68px] ">
                          {item?.date}
                        </div>
                        <div className="wctc-grid-col wctc-grid-col-text w-full max-w-[180px] wcts-label-text lg:leading-[15px] sm:max-w-[68px] ltr:capitalize">
                          {item?.dayName}
                        </div>
                        <div className="wctc-grid-col w-full max-w-[180px] lg:max-w-fit ">
                          <img
                            src={`/assets/icons/weather-icons/${item?.day?.icon}-s.png`}
                            className="h-[60px] w-[60px] object-scale-down lg:h-[32px] lg:w-[32px] xs:h-[17px] xs:w-[17px]"
                          />
                        </div>

                        <div className="wctc-grid-col wcts-number-text wctc-grid-col-temp flex w-full max-w-[180px] flex-row gap-[4px]  lg:max-w-[90px]  sm:max-w-[68px] sm:justify-end">
                          <span>
                            {item?.temperature?.minimum}
                          </span>
                          <span>-</span>
                          <span>
                            {item?.temperature?.maximum}
                          </span>
                        </div>
                        <div className="wctc-grid-col col wctc-grid-col-text wcts-label-text w-full max-w-[180px] lg:max-w-[90px]  sm:max-w-[68px] sm:text-center  ltr:capitalize">
                          {item?.day?.iconPhrase}
                        </div>

                        <div className="wctc-grid-col flex w-full max-w-[180px] items-center gap-[9px] lg:max-w-[90px] sm:max-w-[68px] ltr:flex-row rtl:flex-row-reverse rtl:justify-end">
                          <span className="wctc-grid-col-text wcts-label-text">
                            {locale === "en"
                              ? "Precip"
                              : "هطول"}
                          </span>
                          <span className="wctc-grid-col-temp flex flex-row justify-between wcts-number-text">
                            {item?.precip}%
                          </span>
                        </div>
                      </div>
                    );
                  },
                )}
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default WeatherClimateTable;
