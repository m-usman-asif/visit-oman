"use client";
import {ScreenContainer} from "@/app/components/shared";
const CareersJobsContainer = ({ data, locale }: any) => {
  return (
    <div className="my-[80px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[40px]">
          {data && data?.map((details: any, index: number) => (
            <div  className="flex border-[1px] border-[#00000033] p-[40px] justify-between lg:p-[20px] md:py-[30px] lg:flex-wrap" key={index}>
              <div className="w-[38.75%] lg:w-full lg:mb-[40px]">
                <h5 className="vo-careers-labels mb-[10px]">Job Title</h5>
                <h3 className="vo-subHeading">{details?.title}</h3>
              </div>
              <div className="w-[61%] flex justify-between lg:w-full lg:flex-wrap">
                <div className="lg:w-[49%] lg:flex lg:justify-between md:w-full md:flex-wrap">
                  <div className="mb-[55px] lg:w-[49%] lg:mb-[0px] md:w-full md:mb-[30px]">
                    <h5 className="vo-careers-labels mb-[10px]">Department:</h5>
                    <h3 className="vo-careers-labels !font-bold">{details?.department}</h3>
                  </div>
                  <div className="lg:w-[49%] md:w-full md:mb-[30px]">
                    <h5 className="vo-careers-labels mb-[10px]">Experience:</h5>
                    <h3 className="vo-careers-labels !font-bold">{details?.experience}</h3>
                  </div>
                </div>
                <div className="lg:w-[49%] lg:flex lg:justify-between md:w-full md:flex-wrap">
                  <div className="mb-[55px] lg:w-[40%] lg:mb-[0px] md:w-full md:mb-[30px]">
                    <h5 className="vo-careers-labels mb-[10px]">Deadline</h5>
                    <h3 className="vo-careers-labels !font-bold">{details?.deadline}</h3>
                  </div>
                  <div className="lg:w-[58%] md:w-full">
                    <h5 className="vo-careers-labels mb-[10px]">Application</h5>
                    <h3 className="vo-careers-labels block">
                      <span>htttps://</span>
                      <span className="!font-bold">{details?.application}</span>
                    </h3>
                  </div>
                </div>  
              </div>
            </div>
          ))}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default CareersJobsContainer;
