const PartnersCard: React.FC<any> = ({ data }) => {
  return (
    <div
      className={`flex h-[80px]   w-[225px] items-center justify-start  overflow-hidden	`}
    >
      <img
        src={data?.imgSrc}
        alt={data?.title}
        style={{ height: "auto", width: "auto" }}
      />
    </div>
  );
};

export default PartnersCard;
