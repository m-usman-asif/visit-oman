"use client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ScreenContainer from "./ScreenContainer";
const TitleWithSplitPara = ({
  data,
  locale,
  flexDirection = true,
  customClass=""
}: any) => {
  const { title, subTitle, desc } = data;
  return (
    <div
      className={`title-with-split-para-container mb-[80px]`}
    >
      <ScreenContainer>
      <div
          className={`title-with-split-para-wrapper flex ${customClass} ${flexDirection ? "flex-row" : "flex-col gap-[40px]"} justify-between lg:flex-wrap lg:flex-col`}
        >
          <div className="twspw-headings flex-1 lg:w-full">
            {title && (
              <h2 className="vo-heading lg:mb-[30px]">{title}</h2>
            )}
            {subTitle && (
              <h3 className="vo-card-heading !text-black">
                {subTitle}
              </h3>
            )}
          </div>
          <div className="twspw-desc flex-1 lg:w-full">
            {desc && (
              <ReactMarkdown
                className={"vo-paragraph format-link"}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {desc}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TitleWithSplitPara;
