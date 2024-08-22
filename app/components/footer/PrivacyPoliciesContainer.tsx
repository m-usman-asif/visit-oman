"use client";
import {TItleList,ScreenContainer,TitleWithSplitPara} from "@/app/components/shared";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const PrivacyPoliciesContainer = ({
  data,
  locale,
}: any) => {
  const listData = [
    {
      id: 1,
      title: "Contact Information",
      desc: "If you have any queries related to the processing of your personal information, please feel free to contact us at the Contact Us page.",
    },
    {
      id: 2,
      title: "What We Collect",
      desc: "You acknowledge that we, or third parties, may collect and record information concerning your access and use of the Website of your through electronic means (cookies, monitoring, etc). This information is not intended to identify you.You may also, voluntarily, use functionality on the Website to submit your information to us for your own or our purposes through web links, webmail or other communications tools adopted in the Website. You acknowledge that you submit, and we collect and record such information for purposes set out below.",
    },
    {
      id: 3,
      title: "Purpose of processing",
      desc: "You acknowledge that we, or third parties, may collect and record information concerning your access and use of the Website of your through electronic means (cookies, monitoring, etc). This information is not intended to identify you.You may also, voluntarily, use functionality on the Website to submit your information to us for your own or our purposes through web links, webmail or other communications tools adopted in the Website. You acknowledge that you submit, and we collect and record such information for purposes set out below.",
    },
    {
      id: 4,
      title: "Direct marketing and promotion",
      desc: "You may voluntarily provide information through to receive information about National Travel Operator SPC’s services/offerings. You can unsubscribe to any direct marketing and promotions (detailed below).",
    },
    {
      id: 5,
      title: "Opt-out",
      desc: "In the event that you no longer wish to receive marketing or promotional materials you may opt-out of receiving these communication you may notify us by email at the <a href='https://visitoman.om/media/contact-us/' target='_blank'>Contact Us</a> page.",
    },
    {
      id: 6,
      title: "Cross border transfer",
      desc: "Your personal information may be transferred across countries or processed in countries which may not have data protection laws or to countries where your privacy and other rights in respect of the same are not guaranteed.",
    },
  ];
  const titleSplitPara = {
    title: "Cookie Statement",
    subTitle: "",
    desc: "By using our Website you agree and consent that National Travel Operator SPC and third parties can store and access cookies and other tracking technologies to ensure functionality of the Website, collect data about Website usage. You have the option to disable cookies as set out below.",
  };
  const para = "Detailed guidance on how to control and delete cookies is also available from <a href='https://www.aboutcookies.org/' target='_blank'>www.aboutcookies.org</a>."
  return (
    <div className="privacy-policies-container mb-[80px]">
      <ScreenContainer>
        <div className="privacy-policies-wrapper flex flex-col">
          <div className="mb-[80px]">
          <TItleList data={listData} locale={locale} />
          </div>
          <TitleWithSplitPara
            locale={locale}
            data={titleSplitPara}
          />
          <div className="privacy-policies-cookies flex flex-col gap-[20px]">
            <h3 className="vo-subHeading">
              Disabling Cookies
            </h3>
            <div className="vo-paragraph flex flex-col">
              <p>
                Most browsers will allow you to control
                whether or not they accept cookies.
                Instructions for configuring cookie settings
                in some of the most popular browsers are
                available from these pages:
              </p>
              <ul className="">
                <li>
                  - Cookie settings in Internet Explore
                </li>
                <li>- Cookie settings in Firefox</li>
                <li>- Cookie settings in Chrome</li>
                <li>- Cookie settings in Safari</li>
              </ul>
              <ReactMarkdown className={"vo-paragraph format-link"} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >{para}</ReactMarkdown>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default PrivacyPoliciesContainer;
