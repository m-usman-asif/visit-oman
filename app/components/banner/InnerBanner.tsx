"use client";
const InnerBanner: React.FC<any> = ({ data }) => {
  return (
    <section className="relative mb-[80px] flex h-[750px] w-full items-end justify-center bg-footerBg lg:mb-[60px] lg:h-[450px] md:mb-[50px] md:h-[600px] ">
      <img
        src={data}
        alt=""
        className="absolute top-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default InnerBanner;
