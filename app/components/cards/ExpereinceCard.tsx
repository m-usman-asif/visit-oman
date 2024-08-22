const ExperienceCard: React.FC<any> = ({ data }) => {
  return (
    <div className="group relative flex h-[500px] w-full lg:h-[385px] md:h-[240px]">
      <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src={data?.vidSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[30px] transition-opacity duration-300 group-hover:opacity-0">
        <img
          src={data?.iconSrc}
          alt={data?.title}
          className="transition-opacity duration-300 group-hover:opacity-0 lg:h-[70px] lg:w-[70px]"
        />
        <h3 className="vo-seasoned-card-heading transition-opacity duration-300 group-hover:opacity-0">
          {data?.title}
        </h3>
      </div>
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
        <div className=" flex max-h-[265px] min-h-[265px] flex-col  items-center justify-between px-[47px]">
          <h3 className="vo-seasoned-card-heading transition-opacity duration-300">
            {data?.title}
          </h3>
          <p className="vo-card-paragraph line-clamp-5	">
            {data?.desc}
          </p>
          <button className="vo-card-btn underline">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
