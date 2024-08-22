"use client";
import { useRouter } from "@/i18n.config";
import "./latest-news.css";
const LatestNewsCard = ({ data }: any) => {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/news/"+data?.id);
  };
  
  return (
    <div className="latest-news-card flex w-full flex-row justify-between flex-wrap">
      <div className="w-[43%] lg:w-[48%] md:w-full md:mb-[30px]">
        <img
          src={data?.img}
          className="min-h-[430px] w-full object-cover lg:min-h-[280px] md:max-h-[350px]"
        />
      </div>
      <div className="flex flex-col gap-[40px] w-[50.7%] lg:w-[48%] lg:gap-[20px] md:w-full md:gap-[30px]">
        <h2 className="vo-news-title">
          {data?.title}
        </h2>
        <p className="vo-paragraph !font-semibold">
          {data?.date}
        </p>
        <p className="vo-paragraph line-clamp-3">
          {data?.desc}
        </p>
        <div className="lnd-btn">
          <button
            onClick={handleRouter}
            className="underline-offset-3 font-Montserrat font-medium underline decoration-1"
          >
            {data?.redmorebtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
