import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import {TitleWithSplitPara} from "@/app/components/shared";
import PrivacyPoliciesContainer from "@/app/components/footer/PrivacyPoliciesContainer";


const PrivacyPolicy: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
  "/assets/images/privacy-policy/privacy-policy-banner.png";
  const titleSplitPara = {
    title: "PRIVACY STATEMENT",
    subTitle: "",
    desc: "National Travel Operator SPC values your personal information and privacy. This privacy policy (“Privacy Policy”) will outline how we use personal data that we collect from you when you visit this Website. Your use of the Website is subject to the Terms <a href='https://visitoman.om/terms-and-conditions/' target='_blank'>available here</a>. Personal Information collected from your use of the Website will be used in accordance with this Privacy Policy.",
  }
 
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <TitleWithSplitPara locale={locale} data={titleSplitPara} />
      <PrivacyPoliciesContainer locale={locale} data={null}/>
    </main>
  );
};
export default PrivacyPolicy;
