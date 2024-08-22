"use client";
import InnerBanner from "../../banner/InnerBanner";
import {ScreenContainer} from "@/app/components/shared";
import { latestCardData } from "@/app/data/data";
import { useRouter } from "@/i18n.config";

import "./news-details.css";
const NewsDetailsContianer = ({ data, locale }: any) => {
  const router = useRouter();
  const  prevCard=latestCardData?.filter((items)=>items?.id == data?.id-1)
  const  nextCard=latestCardData?.filter((items)=>items?.id == data?.id+1)


  const bannerImg =
    "/assets/images/latest-news/latest-news-img-1.png";
    const totalData= latestCardData?.length
    return (
    <div className="news-details-container">
      <InnerBanner data={data?.img} />
      <ScreenContainer>
        <div className="news-details-wrapper ">
          <div className="ndw-container flex flex-col gap-[40px] border-b-[1px] border-b-[#00000033] pb-[50px]">
            <div className="ndw-container-title">
              <h1 className="vo-heading">{data?.title}</h1>
            </div>
            <div className="ndw-container-date">
              <p className="vo-paragraph !font-semibold">
                {data?.date}
              </p>
            </div>

            <div className="ndw-container-decs flex flex-col gap-[20px]">
              {data?.detail?.paras?.map(
                (item: any, index: number) => (
                  <p
                    key={item?.index}
                    className="vo-paragraph"
                  >
                    {item?.text}
                  </p>
                ),
              )}
            </div>
          </div>
          <div className={`ndw-container-btn flex flex-row items-start ${data?.id===1?'justify-end':data?.id === latestCardData?'justify-start':'justify-between'} sm:pt-[40px]  pt-[80px] gap-[30px] `}>
            <button className={`ndw-prev-btn flex flex-row gap-[20px] ${data?.id ===1 ? 'hidden':''} sm:hidden`}   onClick={() => router.push("/news/" + (data?.id - 1).toString())}
            >
              <span className="my-auto w-[36px] h-[36px] flex justify-center items-center">
                <img
                  src="/assets/icons/chevron-prev-black.svg"  
                  className="h-[15px] w-[15px]"
                />
              </span>
              <span className="flex flex-col items-start justify-start text-left gap-[16px] w-full">
                <span className="vo-pagination-heading text-left h-[56px] line-clamp-2 w-full">
                  {prevCard[0]?.title}
                </span>
                <span className="vo-paragraph  !font-semibold  w-full">
                {prevCard[0]?.date}
                </span>
              </span>
            </button>
            <button className="hidden sm:block">
              <span className="vo-pagination-heading" onClick={() => router.push("/news/" + (data?.id - 1).toString())}>
                Previous
              </span>

            </button>
            <button className={`ndw-next-btn flex flex-row gap-[20px] ${totalData===data?.id?'hidden':''} sm:hidden `}onClick={() => router.push("/news/" + (data?.id + 1).toString())}>
              <span className={`flex flex-col items-start justify-start text-right gap-[16px] w-full`}>
                <span className="vo-pagination-heading text-right h-[56px] line-clamp-2 w-full">
                {nextCard[0]?.title}

                </span>
                <span className="vo-paragraph  !font-semibold w-full">
                {nextCard[0]?.date}
                </span>
              </span>
              <span className="my-auto w-[36px] h-[36px] flex justify-center items-center">
                <img
                  src="/assets/icons/chevron-next-black.svg"
                  className="h-[15px] w-[15px]"
                />
              </span>
            </button>
            <button className="hidden sm:block">
              <span className="vo-pagination-heading" onClick={() => router.push("/news/" + (data?.id + 1).toString())}>
                Next
              </span>

            </button>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default NewsDetailsContianer;
