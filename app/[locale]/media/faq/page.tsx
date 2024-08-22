import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import AccordionContainer from "@/app/components/useful-info/faq/AccordionContainer";
import {VisitOmanBrief} from "@/app/components/home";


const FAQ: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
  "/assets/images/faq/faq-banner.png";
  const titleSplitPara = {
    heading: "FAQs",
    subHeading: "Here are the answers to some frequently",
    desc: ["Here are the answers to some frequently asked questions about Visit Oman. If you have a question that we haven't answered, please contact us and make an enquiry. We'll do our best to get back to you with an answer as soon as possible."]
  }
  const accordionData= [
    {
        id:1,
        question:"What can tourists and travel operators buy on the Visit Oman platform?",
        answer:"Tourists and travel operators can purchase accommodation, air tickets, tours and activities and more through the Visit Oman booking portal. Travel agencies can buy set packages and can create their own package to match the needs of their customers, thanks to our dynamic packaging function."
    },
    {
        id:2,
        question:"What type of accommodations do you offer?",
        answer:"We are working with our suppliers to include hundreds of hotel offerings in Oman, across all categories of accommodations: hotels and resorts, serviced apartments, and glamping."
    },
    {
        id:3,
        question:"What are the booking and cancellation policies?",
        answer:"We adopt the booking and cancellation policies of our service providers, which are in line with the market standards."
    },
    {
        id:4,
        question:"In which currency can products be purchased?",
        answer:"The platform features dynamic currency conversion for browsing convenience, but product purchases are finalised in OMR or USD"
    },
    {
        id:5,
        question:"How are you planning to manage modifications and re-routing?",
        answer:"We'll work closely with our trade partners and service providers to support any modifications and re-routing. We want to ensure all our guests have a smooth experience."
    },
    {
      id:6,
      question:"Can one travel agency have access to multiple accounts at the same time?",
      answer:"Our platform enables our trade partners to have multiple accounts for all of their travel consultants so that everyone can access the platform at the same time."
    },
    {
      id:7,
      question:"Does Visit Oman allow advance bookings for trade partners?",
      answer: "Yes, our platform allows advance bookings and it even allows you to define the allocation for the tour operators, travel agencies and trade partners."
    },
    {
      id:8,
      question: "Does Visit Oman allow short-term bookings for trade partners?",
      answer: "Yes, our platform allows for short-term bookings based on the availability of our service providers or trade partners."
    },
    {
      id:9,
      question: "Can you provide an offline quotation for products and services that are not available on the platform?",
      answer: "We aim to digitise your entire booking process. However, there are exceptional cases where we can assist with offline quotations. For assistance, please email travelhelpdesk@visitoman.om"
    },
    {
      id:10,
      question: "Is Visit Oman an IATA agency?",
      answer: "Visit Oman is IATA accredited."
    }
  ]
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief locale={locale} data={titleSplitPara} />
      <AccordionContainer data={accordionData} locale={locale}/>
    </main>
  );
};
export default FAQ;
