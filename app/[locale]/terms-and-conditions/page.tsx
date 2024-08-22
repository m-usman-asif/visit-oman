import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import {TitleWithSplitPara} from "@/app/components/shared";
import TermsAndConditionsContainer from "@/app/components/footer/TermsAndConditionsContainer";


const TermsAndConditions: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
  "/assets/images/terms-and-conditions/terms-and-conditions-banner.png";
  const titleSplitPara = {
    title: "Terms of Use",
    subTitle: "LAST UPDATED 13.06.2021",
    desc: "These Terms (“Terms”) exclusively apply to your access to, browsing and navigating to and from, benefit of, and use (“Use”) of the, <a href='/'>www.visitoman.om</a> and its pages (“Website”), owned and operated by National Travel Operator SPC (“NTO”).",
  }
 
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TitleWithSplitPara locale={locale} data={titleSplitPara} />
      <TermsAndConditionsContainer locale={locale} data={null}/>
    </main>
  );
};
export default TermsAndConditions;
