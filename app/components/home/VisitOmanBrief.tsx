"use client";
import React from "react";
import {ScreenContainer} from "@/app/components/shared";

const VisitOmanBrief: React.FC<any> = ({locale, data}) => {
  return (
    <section className="mb-[80px] lg:mb-[50px] md:mb-[30px]">
      <ScreenContainer>
        <div className="flex justify-between lg:flex-wrap">
          <div className="w-[38%] lg:mb-[30px] lg:w-[100%]">
            <h2 className="vo-heading">{data?.heading}</h2>
            {data?.subHeading && (
              <h3 className="vo-subHeading">
                {data?.subHeading}
              </h3>
            )}
          </div>
          <div className="w-[48.75%] lg:w-[100%]">
            {data?.desc?.map((value:any, index:any) => (
              <p
                className={`vo-paragraph w-full max-w-[1067px] ${index+1 !== data?.desc?.length ?'mb-[30px]':''}`}
                key={index}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default VisitOmanBrief;
