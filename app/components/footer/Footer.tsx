import { footerLinks, footerSocial } from "@/app/data/data";
import Link from "next/link";
import {ScreenContainer} from "@/app/components/shared";
const Footer = () => {
  return (
    <section
      className={`bg-footerBg pb-[36px] pt-[50px] pt-[80px] lg:pb-0 lg:pt-[60px] sm:pt-[30px]`}
    >
      <ScreenContainer>
        <div className="mb-[50px] flex flex-wrap justify-between sm:mb-[20px]">
          <div className="lg:mb-[60px] lg:w-[100%] sm:mb-[30px] ">
            <Link href={"/"}>
              <img
                src="https://visitoman.s3.me-south-1.amazonaws.com/vo_footer_logo_df01bc3250.svg"
                alt="footer-logo"
                className="w-[148px] sm:w-[60px] "
              />
            </Link>
          </div>
          <ul className=" w-[78%] xs:columns-1 md:columns-2 lg:columns-3 columns-3 gap-[7.5%] xl:gap-[7.5%] lg:w-[100%]  sm:gap-[35px]">

          {/* <ul className=" w-[78%] columns-3 gap-[7.5%] xl:gap-[7.5%] lg:w-[100%] sm:columns-2 sm:gap-[35px]"> */}
            {footerLinks?.map((value) => (
              <li key={value?.id} className="mb-[24px]">
                <Link href={value?.link}>
                  <p className="vo-paragraph !text-white hover:!text-primary">
                    {value?.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ScreenContainer>
      <hr className="block border-[#FFFFFF80] lg:hidden" />
      <ScreenContainer>
        <div className="mt-[36px] flex flex-wrap justify-between">
          <div className="flex items-center lg:order-3 lg:mt-[30px] lg:w-[100%] lg:border-t lg:border-white lg:py-[30px] ">
            <p className="vo-paragraph  !text-white">
              Powered by OMRAN Group
            </p>
          </div>
          <div className="flex items-center justify-between w-[22%] lg:w-full lg:justify-start gap-[32px] lg:order-2 md:gap-[20px] sm:mt-[20px] sm:w-full sm:gap-[15px] ">
            {footerSocial?.map((value) => (
              <Link href={value?.link} key={value?.id}>
                <img
                  src={value?.src}
                  alt={value?.alt}
                  className="h-[24px] w-[24px] sm:h-[20px] sm:w-[20px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};
export default Footer;






