"use client";
import React from "react";
import {ScreenContainer} from "@/app/components/shared";

const MDCollapse: React.FC<any> = ({ data }) => {
  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[30px] mb-[50px]"> 
            <p className="vo-paragraph">Launched in 2022, Visit Oman witnessed remarkable growth in a short span. With the support of the Ministry of Heritage and Tourism, we’ve connected Omani SMEs with international source markets, generated significant bookings, and built a thriving digital ecosystem. This is just the beginning.</p>
            <p className="vo-paragraph">Together, let’s contribute to the next chapter of Omani tourism, one seamless booking at a time.</p>
        </div>
        <div>
          <p className="vo-paragraph">Yours in Tourism,</p>
          <p className="vo-subHeading !text-bodyText">Shabib Al Maamari</p>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MDCollapse;
