"use client";
import { useRouter } from "@/i18n.config";

const ServiceCard: React.FC<any> = ({
  data,
  isOnClickRoute = false,
  hover=true,
}) => {
  const router = useRouter();

  const handleRouter = () => {
    if (data?.link) {
      router.push(data.link);
    }
  };

  return (
    <>
      {isOnClickRoute ? (
        <div
          className={`${hover?'group':''}  relative flex h-[500px] w-full lg:h-[385px] lg:w-[100%] md:h-[240px] md:h-[385px] sm:h-[315px] `}
          onClick={handleRouter}
        >
          <img
            src={data?.imgSrc}
            width={"100%"}
            alt={data?.title}
          />
          <div className={`absolute inset-0 flex flex-col items-center justify-end px-[30px] transition-opacity duration-300  group-hover:opacity-0 lg:group-hover:opacity-100`}>
            <h3 className="vo-subHeading mb-[40px] text-center transition-opacity duration-300 group-hover:opacity-0 ">
              {data?.title}
            </h3>
          </div>
          <div className={`${!hover ? "hidden" : ""} absolute inset-0 flex w-full items-start bg-black bg-opacity-60 px-[30px] py-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
            <div className="w-full">
              {/* <h3 className="vo-card-heading mb-[20px] text-center transition-opacity duration-300">
                {data?.title}
              </h3> */}
              {Array.isArray(data?.desc) ? (
                data.desc.map(
                  (item: string, index: number) => {
                    const totalLines = 10;
                    const numItems = data.desc.length;
                    const linesPerItem = Math.floor(
                      totalLines / numItems,
                    );
                    const extraLines =
                      totalLines % numItems;

                    let lineClamp;
                    if (numItems === 1) {
                      lineClamp = totalLines;
                    } else if (index === numItems - 1) {
                      lineClamp = linesPerItem + extraLines;
                    } else {
                      lineClamp = linesPerItem;
                    }

                    return (
                      <p
                        key={index}
                        className={`vo-card-paragraph mb-[20px] list-disc line-clamp-${lineClamp}`}
                      >
                        {item}
                      </p>
                    );
                  },
                )
              ) : (
                <p className="vo-card-paragraph line-clamp-10 mb-[20px] list-disc">
                  {data?.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${hover?'group':''} relative flex  h-[500px] w-full lg:h-[385px] lg:w-[100%] md:h-[240px] md:h-[385px] sm:h-[315px]  `}>
          <img
            src={data?.imgSrc}
            width={"100%"}
            alt={data?.title}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end transition-opacity duration-300 group-hover:opacity-0 lg:group-hover:opacity-100">
            <h3 className="vo-subHeading !text-white mb-[40px] transition-opacity duration-300 group-hover:opacity-0 ">
              {data?.title}
            </h3>
          </div>
          <div
            className={`${!hover ? "hidden" : ""}  absolute inset-0 flex w-full items-start  bg-black bg-opacity-60 px-[30px] py-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:px-[20px] lg:py-[20px] `}
          >
            <div className="w-full">
              <h3 className="vo-subHeading !text-white mb-[20px] text-center transition-opacity duration-300">
                {data?.title}
              </h3>

              {Array.isArray(data?.desc) ? (
                data.desc.map(
                  (item: string, index: number) => {
                    const totalLines = 10;
                    const numItems = data.desc.length;
                    const linesPerItem = Math.floor(
                      totalLines / numItems,
                    );
                    const extraLines =
                      totalLines % numItems;

                    let lineClamp;
                    if (numItems === 1) {
                      lineClamp = totalLines;
                    } else if (index === numItems - 1) {
                      lineClamp = linesPerItem + extraLines;
                    } else {
                      lineClamp = linesPerItem;
                    }

                    return (
                      <p
                        key={index}
                        className={`vo-card-paragraph mb-[20px] list-disc line-clamp-${lineClamp}`}
                      >
                        {item}
                      </p>
                    );
                  },
                )
              ) : (
                <p className="vo-card-paragraph line-clamp-10 mb-[20px] list-disc">
                  {data?.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
