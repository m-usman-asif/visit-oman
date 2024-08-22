const VisitOmanCard: React.FC<any> = ({ data }) => {
  return (
    <div className="relative flex  h-[500px]  w-full rounded-[15px] lg:h-[385px] md:h-[240px] ">
      <img
        src={data?.imgSrc}
        width={"100%"}
        height={"100%"}
        alt={data?.title}
      />
      <h3 className="vo-inner-title absolute bottom-[48px]  w-full text-center !text-white">
        {data?.title}
      </h3>
    </div>
  );
};

export default VisitOmanCard;
