"use client";
import {ScreenContainer} from "@/app/components/shared";
import LatestNewsCard from "./LatestNewsCard";
import LatestNewsPagination from "./LatestNewsPagination";
import { latestCardData } from "@/app/data/data";
import "./latest-news.css";
const LatestNewsContainer = ({ locale }: any) => {

 
  return (
    <div className="latest-news-container">
      <ScreenContainer>
        <div className="latest-new-wrapper flex flex-col gap-[80px]">
          <div className="lnw-container flex flex-col gap-[50px] md:gap-[40px]">
            <h2 className="vo-heading">Latest news</h2>
            {latestCardData.map((data: any) => (
              <LatestNewsCard data={data} key={data?.id} />
            ))}
          </div>
          <div className="">
            <LatestNewsPagination locale={locale} />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default LatestNewsContainer;
