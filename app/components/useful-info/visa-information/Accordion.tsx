"use client";
import { useState } from "react";
import "./tabs.css";
const Accordion = ({ title, answer, children }: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="tcvi-wrapper border-b-[1px] border-b-[#00000033]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between py-[20px]"
      >
        <span
          className={`vo-card-paragraph faq-question font-Montserrat !font-bold !text-black`}
        >
          {title}
        </span>
        <svg
          className={`ml-8 shrink-0 fill-[#00000099] transition-transform duration-200 ${
            accordionOpen ? "rotate-180" : "rotate-0"
          }`}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.12 9.29a1 1 0 0 1 1.41 0L12 11.76l2.47-2.47a1 1 0 0 1 1.41 1.41l-3.18 3.18a1 1 0 0 1-1.41 0l-3.18-3.18a1 1 0 0 1 0-1.41z" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="vo-card-paragraph overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
