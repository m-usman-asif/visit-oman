"use client";
const TeamCard: React.FC<any> = ({ data }) => {
  return (
    <div className="group relative flex h-[500px] w-full lg:h-[385px] lg:w-[100%] md:h-[240px] md:h-[385px] sm:h-[315px]">
      <img
        src={data?.imgSrc}
        width={"100%"}
        alt={data?.title}
      />
      <div className="absolute bottom-0 w-full pb-[30px] pl-[30px]">
        <p className="vo-subHeading !text-white">
          {data?.name}
        </p>
        <p className="vo-card-label">{data?.designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
