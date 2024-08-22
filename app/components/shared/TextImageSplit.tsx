"use client";
import ScreenContainer from "./ScreenContainer";
const TextImageSplit: React.FC<any> = ({
  locale,
  reverse = false,
  isListStyle = false,
  data,
  isShowBtn = false,
}) => {
  return (
    <section className="relative mb-[80px] w-full lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <div
          className={`flex justify-between ${reverse ? "" : "flex-row-reverse"} md:flex-wrap`}
        >
          <div className="w-[33.5%] lg:w-[48%] md:order-2 md:w-[100%]">
            <img
              src={data?.secImgSrc}
              alt={data?.secImgAlt}
              width={"100%"}
              className="lg:h-[100%] lg:object-cover md:h-[300px]"
            />
          </div>
          <div className="w-[60%] lg:w-[48%] md:order-1 md:mb-[30px] md:w-[100%]">
            <div className="mb-[30px]">
              <h2 className="vo-heading ">
                {data?.secTitle}
              </h2>
              {data.secSubTitle && (
                <h4 className="vo-subHeading">
                  {data.secSubTitle}
                </h4>
              )}
            </div>

            <ul
              className={`${isListStyle && "list-disc pl-[25px]"} `}
            >
              {data?.listData.map(
                (item: any, index: number) => (
                  <li
                    key={item.id}
                    className={`vo-paragraph ${index !== data?.listData.length - 1 ? "mb-[20px]" : ""}`}
                  >
                    {item.title && (
                      <p className="vo-paragraph mb-[5px] !font-bold">
                        {item.title}
                      </p>
                    )}
                    <p>{item.desc}</p>
                  </li>
                ),
              )}
            </ul>
            {isShowBtn && (
              <button className="vo-primary-btn mt-[40px] shadow-md">
                <span>
                  Apply Now
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 36.1 25.8"
                    enable-background="new 0 0 36.1 25.8"
                    xmlSpace="preserve"
                  >
                    <g>
                      <line
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        x1="0"
                        y1="12.9"
                        x2="34"
                        y2="12.9"
                      ></line>
                      <polyline
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        points="22.2,1.1 34,12.9 22.2,24.7   "
                      ></polyline>
                    </g>
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default TextImageSplit;
