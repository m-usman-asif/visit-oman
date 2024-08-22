"use client";
import React, { useEffect, useRef, useState } from "react";
interface CollapsibleListProps {
  data: any;
}

const ContentCollapsable: React.FC<
  CollapsibleListProps
> = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [titleCollapsed, setTitleCollapsed] =
    useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHomeRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleHomeCollapse = () => {
    setTitleCollapsed(!titleCollapsed);
  };
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isCollapsed
        ? "0px"
        : `${contentRef.current.scrollHeight}px`;
    }
  }, [isCollapsed]);
  useEffect(() => {
    if (contentHomeRef.current) {
      contentHomeRef.current.style.maxHeight =
        titleCollapsed
          ? "0px"
          : `${contentHomeRef.current.scrollHeight}px`;
    }
  }, [titleCollapsed]);

  return (
    <>
      {/* desktop */}

      <button
        onClick={toggleCollapse}
        className={`flex w-full items-center justify-between ${isCollapsed ? "bg-primary" : "bg-secondary"}  px-[20px] py-[30px] hover:bg-secondary lg:hidden `}
      >
        <h3 className="vo-listing-heading">
          {data?.title}
        </h3>
        <img
          src={`/assets/icons${isCollapsed ? "/circular-plus-white" : "/circular-minus-white"}.svg`}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapsible-content  ${isCollapsed ? "collapsed" : "expanded"} bg-secondary `}
      >
        <hr className="mx-[20px] " />
        {data?.startPara && (
          <div className="px-[20px] pt-[40px] ">
            <p className="vo-listing-paragraph ">
              {data?.startPara}
            </p>
          </div>
        )}
        <ul
          className={`px-[20px] pt-[20px] ${data?.endPara ? "" : "pb-[40px]"}`}
        >
          {data?.content
            // ?.slice(initialCount)
            ?.map((item: any, index: any) => (
              <li
                key={index}
                className={`w-full py-[20px] ${index + 1 !== data?.content?.length ? "border-b border-white" : ""} `}
              >
                <p
                  className={`vo-listing-paragraph flex ${item?.imgSrc ? "gap-[20px]" : ""}`}
                >
                  {item?.imgSrc && (
                    <img
                      src={item.imgSrc}
                      alt="amenity icon"
                      className="h-[30px] w-[30px]"
                    />
                  )}
                  {item.title}
                </p>

                <p className="vo-listing-paragraph">
                  {item.desc}
                </p>
              </li>
            ))}
        </ul>
        {data?.endPara && (
          <div className="px-[20px] pb-[40px] pt-[20px]">
            <p className="vo-listing-paragraph ">
              {data?.endPara}
            </p>
          </div>
        )}
      </div>

      {/* tab and mob */}
      <button
        onClick={toggleHomeCollapse}
        className={`hidden w-full  py-[16px] lg:block ${titleCollapsed ? "bg-primary" : "bg-secondary"}`}
      >
        <div className="flex justify-between gap-[14px] px-[20px]">
          <h3 className="vo-listing-heading">
            {data?.title}
          </h3>
          <img
            src={`/assets/icons${titleCollapsed ? "/circular-plus-white" : "/circular-minus-white"}.svg`}
          />
        </div>
      </button>
      {/* tab and mob */}

      <div
        ref={contentHomeRef}
        className={`collapsible-content  ${titleCollapsed ? "collapsed" : "expanded"} bg-secondary `}
      >
        <hr className="mx-[20px] " />
        {data?.startPara && (
          <div className="px-[20px] pt-[40px] ">
            <p className="vo-listing-paragraph ">
              {data?.startPara}
            </p>
          </div>
        )}
        {/* pb-[40px]  */}
        <ul
          className={`px-[20px] ${data?.endPara ? "" : "pb-[40px]"}`}
        >
          {data?.content?.map((item: any, index: any) => (
            <li
              key={index}
              className={`w-full   py-[20px] ${index + 1 !== data?.content?.length ? "border-b border-white" : ""} `}
            >
              <p className="vo-listing-paragraph flex gap-[20px] !font-semibold	">
                {item?.imgSrc && (
                  <img
                    src={item.imgSrc}
                    alt="amenity icon"
                    className="h-[30px] w-[30px]"
                  />
                )}
                {item.title}
              </p>
              <p className="vo-listing-paragraph">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
        {data?.endPara && (
          <div className="px-[20px] pb-[40px] pt-[20px]">
            <p className="vo-listing-paragraph ">
              {data?.endPara}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentCollapsable;
