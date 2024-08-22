"use client";
import { useState } from "react";
import {ScreenContainer} from "@/app/components/shared";
import "./tabs.css";
import Accordion from "./Accordion";

const Tabs = ({ data }: any) => {
  const tabs = [
    {
      key: "registration",
      title: "Registration",
      secTitle:
        "The following items are required for the e-Visa application",
      secSubTitle: "",
      secImgSrc:
        "/assets/images/discover-oman/registration-visa.png",
      secImgAlt: "our values",
      listData: [
        {
          id: 1,
          title: "",
          desc: "Passport from an e-Visa eligible country valid for at least 6 months from the intended arrival date in Oman",
        },
        {
          id: 2,
          title: "",
          desc: "Digital photograph of traveller, passport-style against a white background.",
        },
        {
          id: 3,
          title: "",
          desc: "Credit or debit card to pay the Oman e-Visa fee.",
        },
        {
          id: 4,
          title: "",
          desc: "A valid email address, to which a copy of the approved visa application and receipt of payment will be sent.",
        },
        {
          id: 5,
          title: "",
          desc: "Copy of the passport information page and printed copy of the visa to present to border officials.",
        },
      ],
    },
    {
      key: "visa-charges",
      title: "Visa Charges",
      secTitle: "Visa Charges",
      secSubTitle: "",
      secImgSrc:
        "/assets/images/discover-oman/visa-charges-visa.png",
      secImgAlt: "our values",
      listData: [
        {
          id: 1,
          title: "",
          desc: "Depending on the nation of origin and whether a single entry or multiple visit visa is selected, visa fees can cost between €12 and €120. $15 and $145.",
        },
      ],
    },
    { key: "countries", title: "103 Countries" },
  ];
  const [key, setKey] = useState("registration");
  return (
    <ScreenContainer>
      <div className="visa-info-tabs-container ">
        <div className="tabs-btn-visa-info flex flex-row border-b-[4px] border-b-[#6660AA]">
          {tabs.map((tab: any) => (
            <button
              className={`font-Montserrat ${key === tab.key ? "tab-item active" : "tab-item"}`}
              key={tab.key}
              onClick={() => setKey(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs-contain-visa-info">
          {tabs.map((tab: any) => (
            <div
              className={`tabs-containt-visa-info-child ${key === tab.key ? "tabs-pane active" : "tabs-pane"}`}
              key={tab.key}
            >
              <div
                className={` tcvi-content flex flex-row-reverse justify-between `}
              >
                {tab?.secImgSrc && (
                  <div className="tcvi-img">
                    <img
                      src={tab?.secImgSrc}
                      alt={tab?.secImgAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="tcvi-text">
                  <div className="mb-[30px]">
                    <h2 className="vo-heading ">
                      {tab?.secTitle}
                    </h2>
                    {tab?.secSubTitle && (
                      <h2 className="vo-subHeading">
                        {tab?.secSubTitle}
                      </h2>
                    )}
                  </div>
                  <ul className="">
                    {tab?.listData?.map(
                      (item: any, index: number) => (
                        <li
                          key={item?.id}
                          className={`vo-paragraph ${index !== data?.listData.length - 1 ? "mb-[20px]" : ""}`}
                        >
                          {item?.title && (
                            <p className="vo-paragraph mb-[5px] !font-bold">
                              {item?.title}
                            </p>
                          )}
                          <p>{item?.desc}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tcvi-content-accordion">
          {tabs.map((tab: any, index: number) => (
            <Accordion title="Registration" key={index}>
               <div
                className={` tcvi-content flex flex-row-reverse justify-between `}
              >
                {tab?.secImgSrc && (
                  <div className="tcvi-img mb-[20px]">
                    <img
                      src={tab?.secImgSrc}
                      alt={tab?.secImgAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="tcvi-text">
                  <div className="mt-[10px]">
                    <h2 className="vo-heading font-bold ">
                      {tab?.secTitle}
                    </h2>
                    {tab?.secSubTitle && (
                      <h2 className="vo-subHeading">
                        {tab?.secSubTitle}
                      </h2>
                    )}
                  </div>
                  <ul className="">
                    {tab?.listData?.map(
                      (item: any, index: number) => (
                        <li
                          key={item?.id}
                          className={`vo-paragraph ${index !== data?.listData.length - 1 ? "mb-[20px]" : ""}`}
                        >
                          {item?.title && (
                            <p className="vo-paragraph mb-[5px] !font-bold">
                              {item?.title}
                            </p>
                          )}
                          <p>{item?.desc}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </ScreenContainer>
  );
};

export default Tabs;
