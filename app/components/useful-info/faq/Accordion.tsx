"use client"
import React, { useState } from "react";
import "./faq.css"
const Accordion = ({ title, answer }:any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="faq-ques-ans-wrapper border-b-[#00000033] border-b-[1px]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className={`vo-card-paragraph faq-question text-start ${ accordionOpen && "!font-bold"}`}>{title}</span>
        <svg
          className="fill-[#00000099] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-[30] faq-answer"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <p className="overflow-hidden vo-card-paragraph ">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;