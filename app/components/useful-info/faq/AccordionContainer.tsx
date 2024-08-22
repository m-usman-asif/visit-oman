"use client";
import { Fragment } from "react";
import {ScreenContainer} from "@/app/components/shared";
import Accordion from "./Accordion";
import "./faq.css";
const AccordionContainer = ({ data }: any) => {
  return (
    <div className="faqs-container mb-[80px]">
      <ScreenContainer>
        <div className="faqs-question-answer">
          {data?.map((item: any) => (
            <Fragment key={item?.id}>
              <Accordion
                title={item?.question}
                answer={item?.answer}
              />
            </Fragment>
          ))}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default AccordionContainer;
