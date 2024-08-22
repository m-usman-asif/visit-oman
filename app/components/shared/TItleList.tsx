"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const TItleList = ({ data, locale }: any) => {
   const text="To be Oman’s <u>extensive</u> _travel_  **booking** gateway [abc.com](google.com) that connects you to unlimited discovery."
  return (
    <div className="title-list-container">
      <div className="">
        <ul className={`flex flex-col gap-[40px]`}>
          {data?.map((item: any, index: number) => (
            <li
              key={item.id}
              className={`vo-paragraph flex flex-col gap-[20px]`}
            >
              {item.title && (
                <h3 className="vo-subHeading">
                  {item.title}
                </h3>
              )}
              {item?.desc && (
               <ReactMarkdown className={"vo-paragraph format-link"} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >{item?.desc}</ReactMarkdown>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TItleList;
