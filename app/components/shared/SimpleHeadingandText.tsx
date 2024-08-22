"use client";
type Data = {
  title: string;
  para?: string;
  titleAlign?: string;
};

type SimpleTextImgProps = {
  data: Data;
  lineClip?: number;
  sideBySide?: boolean;
};
const SimpleHeadingandText: React.FC<
  SimpleTextImgProps
> = ({ data, lineClip, sideBySide = false }) => {
  const titleAlignment = data.titleAlign || "start";

  return (
    <>
      {(data?.title || data?.para) && (
        <>
          {sideBySide ? (
            <div className="flex justify-between lg:flex-wrap">
              {data?.title && (
                <div className="w-[38%] lg:mb-[30px] lg:w-[100%]">
                  <h2 className="vo-heading">
                    {data.title}
                  </h2>
                </div>
              )}
              {data?.para && (
                <div className="w-[48.75%] lg:w-[100%]">
                  <p
                    className={`vo-paragraph w-full max-w-[1067px] line-clamp-[${lineClip}] block lg:hidden md:block`}
                  >
                    {data.para}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-[24px]">
              {data?.title && (
                <div>
                  <h2 className="vo-heading">
                    {data.title}
                  </h2>
                </div>
              )}
              {data?.para && (
                <div>
                  <p
                    className={`vo-content w-full max-w-[1067px] line-clamp-[${lineClip}] block lg:hidden md:block`}
                  >
                    {data.para}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SimpleHeadingandText;
