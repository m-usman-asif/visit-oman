const ExperienceCard: React.FC<any> = ({ data }) => {
  return (
    <div className="group relative flex h-[500px] w-full lg:h-[385px] lg:w-[49%] md:h-[240px]">
      <img
        src={data?.imgSrc}
        width={"100%"}
        alt={data?.title}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[30px] transition-opacity duration-300 group-hover:opacity-0">
        <img
          src={data?.iconSrc}
          alt={data?.title}
          className="transition-opacity duration-300 group-hover:opacity-0"
        />
        <h3 className="vo-seasoned-card-heading transition-opacity duration-300 group-hover:opacity-0">
          {data?.title}
        </h3>
      </div>
      <div className="absolute inset-0 flex w-full items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className=" flex max-h-[265px] min-h-[265px] w-full   flex-col justify-between px-[47px] ">
          <h3 className="vo-seasoned-card-heading text-center transition-opacity duration-300">
            {data?.title}
          </h3>
          <ul>
            {data?.events?.map(
              (value: string, index: number) => (
                <li
                  className="vo-card-paragraph list-disc py-[4px]"
                  key={index}
                >
                  {value}
                </li>
              ),
            )}
          </ul>

          <div className="flex justify-center">
            <button className="vo-card-btn underline">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
