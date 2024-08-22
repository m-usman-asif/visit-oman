"use client";
import { useRouter } from "@/i18n.config";

const GeneralCard: React.FC<any> = ({
  data,
  isOnClickRoute = false,
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
          className="group relative flex h-[500px] w-full lg:h-[385px] lg:w-[49%] md:h-[240px] "
          onClick={handleRouter}
        >
          <img
            src={data?.imgSrc}
            width={"100%"}
            alt={data?.title}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-[30px] transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="vo-card-heading mb-[40px] text-center transition-opacity duration-300 group-hover:opacity-0">
              {data?.title}
            </h3>
          </div>
          <div className="absolute inset-0 flex w-full items-start bg-black bg-opacity-60 px-[30px] py-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="w-full">
              <h3 className="vo-card-heading mb-[20px] text-center transition-opacity duration-300">
                {data?.title}
              </h3>
              {Array.isArray(data?.desc) ? (
                data.desc.map(
                  (item: string, index: number) => (
                    <p
                      key={index}
                      className="vo-card-paragraph mb-[20px] list-disc"
                    >
                      {item}
                    </p>
                  ),
                )
              ) : (
                <p className="vo-card-paragraph mb-[20px] list-disc">
                  {data?.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="group relative flex h-[500px] w-full lg:h-[385px] lg:w-[100%] md:h-[240px] ">
          <img
            src={data?.imgSrc}
            width={"100%"}
            alt={data?.title}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="vo-card-heading mb-[40px] transition-opacity duration-300 group-hover:opacity-0">
              {data?.title}
            </h3>
          </div>
          <div className="absolute inset-0 flex w-full items-start bg-black bg-opacity-60 px-[30px] py-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="w-full">
              <h3 className="vo-card-heading mb-[20px] text-center transition-opacity duration-300">
                {data?.title}
              </h3>
              {Array.isArray(data?.desc) ? (
                data.desc.map(
                  (item: string, index: number) => (
                    <p
                      key={index}
                      className="vo-card-paragraph mb-[20px] list-disc"
                    >
                      {item}
                    </p>
                  ),
                )
              ) : (
                <p className="vo-card-paragraph mb-[20px] list-disc">
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

export default GeneralCard;
