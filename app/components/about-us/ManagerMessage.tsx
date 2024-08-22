"use client";
import React from "react";
import {ScreenContainer,ContentCollapsable} from "@/app/components/shared";
import MDCollapse from "./MDCollapse";
import MDMessage from "./MDMessage";

const ManagerMessage: React.FC<{
  data: any;
  message: any;
}> = ({ data, message }) => {
  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <div className="flex justify-between md:flex-wrap">
          <div className="w-[60%] lg:w-[47%] md:w-full">
            <MDMessage data={message} />
            <div className="mb-[50px] flex flex-col gap-[30px] lg:hidden">
              {data?.map((value: any, index: any) => (
                <div className="w-full  " key={index}>
                  <ContentCollapsable data={value} />
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              <MDCollapse />
            </div>
          </div>
          <div className="w-[33%] lg:w-[47%] md:w-full md:mb-[50px]">
            <img
              src="/assets/images/about/md-profile-img.png"
              alt="Managing Director"
              className="w-full md:max-h-[450px] md:w-[350px] md:m-auto md:object-cover md:object-bottom xs:w-full xs:object-top"
            />
          </div>
        </div>
        <div className="mb-[50px] hidden flex-col gap-[30px] lg:flex ">
          {data?.map((value: any, index: any) => (
            <div className="w-full  " key={index}>
              <ContentCollapsable data={value} />
            </div>
          ))}
        </div>
        <div className="hidden lg:flex">
          <MDCollapse />
        </div>
      </ScreenContainer>
    </section>
  );
};

export default ManagerMessage;
