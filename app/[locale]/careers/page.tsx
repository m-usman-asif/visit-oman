import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import CareersJobsContainer from "@/app/components/footer/CareersJobsContainer";
import {VisitOmanBrief} from "@/app/components/home";

const Careers: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
    "/assets/images/careers/careers-banner.png";
  const titleSplitPara = {
    heading: "Careers",
    subHeading: "",
    desc: ["The National Travel Operation (Visit Oman) is seeking qualified and motivated individuals to join our growing team."],
  };
 
  const jobsData =  [{
    id:1,
    title: "Senior General Manager",
    department: "Commercial",
    experience: "6 years",
    deadline: "7 August 2024",
    application:"jadarah.oia.gov.om/"
  }, {
    id:2,
    title: "General Manager",
    department: "Commercial",
    experience: "4+ years",
    deadline: "7 August 2024",
    application:"jadarah.oia.gov.om/"
  }]
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief
        locale={locale}
        data={titleSplitPara}
      
      />
      <CareersJobsContainer data={jobsData} locale={locale} />
    </main>
  );
};
export default Careers;
