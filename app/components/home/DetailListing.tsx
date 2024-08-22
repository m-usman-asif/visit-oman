import React from "react";
import {Collapsable,ScreenContainer} from "@/app/components/shared";
const DetailListing: React.FC<any> = ({ data }) => {
  return (
    <section className="mb-[80px] lg:mb-[60px] md:mb-[50px] ">
      <ScreenContainer>
        <div className="flex gap-[15px]   lg:hidden block ">
          {data?.map((value: any) => (
            <div
              key={value.id}
              className="w-full"
            >
              <Collapsable  data={value} />
            </div>
          ))}
        </div>
        {/* //tab and mobile */}
        <div className="bg-bgPrimaryLight flex-col   rounded-[10px]  lg:flex  hidden gap-[12px]">
          {data?.map((value: any) => (
            <div
              key={value.id}
              className=" w-full "
            >
         
         <Collapsable  data={value} />

            </div>
          ))}
        </div>
      </ScreenContainer>
    </section>
  );
};

export default DetailListing;
