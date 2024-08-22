"use client";
import React from "react";
import {ScreenContainer,ContentCollapsable} from "@/app/components/shared";

const PartnerCollapse: React.FC<any> = ({ data }) => {
  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <ContentCollapsable data={data} />
      </ScreenContainer>
    </section>
  );
};

export default PartnerCollapse;
