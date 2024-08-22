"use client";
import ScreenContainer from "./ScreenContainer";
import ContentCollapsable from "./ContentCollapsable";
const TextCollapsibleSplit: React.FC<{
  data: any;
  amenities: any;
}> = ({ data, amenities }) => {
  return (
    <section className="mb-[80px] w-full lg:mb-[60px] md:mb-[50px]">
      <ScreenContainer>
        <div className="flex justify-between md:flex-col ">
          <div className="w-[53%] lg:w-[47%] md:order-2 md:w-full">
            <h3 className="vo-heading mb-[40px]">
              {amenities?.title}
            </h3>
            {amenities?.desc?.map(
              (description: any, index: number) => (
                <p
                  key={index}
                  className={`vo-paragraph ${
                    index !== amenities.desc.length - 1
                      ? "mb-[20px]"
                      : ""
                  }`}
                >
                  {description}
                </p>
              ),
            )}
          </div>
          <div className="w-[32%] lg:w-[47%] md:mb-[40px] md:w-full">
            <ContentCollapsable data={data} />
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default TextCollapsibleSplit;
