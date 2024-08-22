"use client";
import { useRouter } from "@/i18n.config";

const VisitSliderCard: React.FC<any> = ({ data }) => {

  const router = useRouter();



    return (
      // sm:h-[240px]   md:h-[385px] 
      <>
        <div onClick={() => router.push(data?.link)}>
          <img
            src={data?.imgSrc}
            width={"100%"}
            height={"100%"}
            alt={data?.title}
          />
          <div className="absolute top-[40%] left-0 right-0 mx-auto w-full  vo-inner-title !text-white text-center">
            <img
              src={data?.serviceIcon}
              alt="Service Icon"
              className="serviceIcon"
            />
            <p className="vo-subHeading !text-white">{data?.title}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default VisitSliderCard;
  