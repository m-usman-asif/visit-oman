"use client";
import React, { useRef } from "react";


import {ScreenContainer} from "@/app/components/shared";

const FullBgData: React.FC<any> = ({ data, isShowBtn=false }) => {

  

  return (
    <section style={{ backgroundImage: `url(${data?.backgroundImg})` }}
    className="bg-cover bg-center min-h-[750px] lg:min-h-[450px] md:min-h-[600px] w-full mb-[80px] lg:mb-[60px] md:mb-[50px]">
      
      <ScreenContainer>
        <div className="py-[80px] w-[60%] lg:py-[40px] lg:w-[64%] md:w-[100%]">
          <h2 className="vo-heading !text-white mb-[10px]">{data?.title}</h2>
          {data?.subTitle ? (
            <h4 className="vo-subHeading !text-white mb-[40px]">{data.subTitle}</h4>
          ) : null}
          {data?.desc?.map((description: any, index: number) => (
            <p
              key={index}
              className={`vo-paragraph !text-white ${
                index !== data.desc.length - 1 ? "mb-[20px]" : ""
              }`}
            >
              {description}
            </p>
          ))}
          {
            isShowBtn && ( <button className="vo-primary-btn mt-[40px]">
              <span>Apply Now
                <svg 
                  version="1.1" 
                  id="Layer_1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                  viewBox="0 0 36.1 25.8" 
                  enable-background="new 0 0 36.1 25.8" 
                  xmlSpace="preserve">
                    <g>
                      <line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line>
                      <polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   "></polyline>
                    </g>
                </svg>
              </span>
            </button>   )
          }
        </div>
      </ScreenContainer>
    </section>
  );
};

export default FullBgData;
