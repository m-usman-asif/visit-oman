"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface DrawerCollapsableListProps {
  itemList: any;
  title: string;
  isLast: boolean;
  toggleDrawer?: any;
}

const DrawerCollapsable: React.FC<
  DrawerCollapsableListProps
> = ({ itemList, isLast, toggleDrawer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isCollapsed
        ? "0px"
        : `${contentRef.current.scrollHeight}px`;
    }
  }, [isCollapsed]);

  return (
    <div>
      <button
        onClick={toggleCollapse}
        className={`w-[100%]  py-[30px] ${!isLast && isCollapsed ? "border-b" : ""}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]  ">
            <img
              src={itemList?.icon}
              width={"24px"}
              height={"24px"}
              alt={itemList?.name}
            />
            <p className="vo-drawer-content">
              {" "}
              {itemList?.name}
            </p>
          </div>
          <img
            src={`/assets/icons/${isCollapsed ? "circular-plus-black" : "circular-minus-black"}.svg`}
            alt="circular-plus-black"
            width={"18px"}
            height={"18px"}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className={`collapsible-content ${isCollapsed ? "collapsed" : "expanded"}`}
      >
        <ul>
          {itemList?.subMenu?.map(
            (item: any, index: any) => (
              <li key={index}>
                <Link
                  href={item?.url}
                  className="flex gap-[8px] border-b py-[24px]"
                >
                  <p
                    onClick={() => toggleDrawer()}
                    className={`vo-drawer-content  !text-black hover:font-medium hover:text-secondary`}
                  >
                    {item?.name}
                  </p>
                  <img
                    src="/assets/icons/arrow-right-secondary.svg"
                    alt="arrow-right-secondary"
                    width={"24px"}
                    height={"24px"}
                  />
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default DrawerCollapsable;
