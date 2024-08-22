"use client";
import React, { useEffect, useRef, useState } from "react";
interface CollapsibleListProps {
  data: any;
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({
  data,
}) => {
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
        className={`flex w-full items-center justify-between ${isCollapsed ? "bg-primary" : "bg-secondary"}  px-[20px] py-[25px] hover:bg-secondary lg:hidden `}
      >
        <h3 className="vo-listing-heading">{data.title}</h3>
        <img
          src={`/assets/icons${isCollapsed ? "/circular-plus-white" : "/circular-minus-white"}.svg`}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapsible-content  ${isCollapsed ? "collapsed" : "expanded"} bg-secondary `}
      >
        <hr className="mx-[20px] " />
        <ul className="px-[20px] pb-[40px] ">
          {data?.list
            // ?.slice(initialCount)
            ?.map((item: any, index: any) => (
              <li
                key={index}
                className={`w-full ${index + 1 !== data?.list?.length ? "border-b border-white" : ""} py-[20px] `}
              >
                {item.subTitle && (
                  <h3 className="vo-paragraph mb-[16px] !font-semibold capitalize !text-white">
                    {item.subTitle}
                  </h3>
                )}
                <p className="vo-listing-paragraph">
                  {item.name}
                </p>
              </li>
            ))}
        </ul>
      </div>

      {/* tab and mob */}
      <button
        onClick={toggleHomeCollapse}
        className={`hidden w-full  py-[16px] lg:block ${titleCollapsed ? "bg-primary" : "bg-secondary"}`}
      >
        <div className="flex justify-between gap-[14px] px-[20px]">
          <h3 className="vo-listing-heading">
            {data.title}
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
        <ul className="px-[20px] pb-[40px] ">
          {data?.list?.map((item: any, index: any) => (
            <li
              key={index}
              className={`w-full  ${index + 1 !== data?.list?.length ? "border-b border-white" : ""} py-[20px] `}
            >
              <p className="vo-listing-paragraph">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CollapsibleList;
