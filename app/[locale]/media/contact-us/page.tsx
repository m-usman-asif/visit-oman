import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import {VisitOmanBrief} from "@/app/components/home";
import ContactUsForm from "@/app/components/useful-info/forms/ContactUsForm";


const ContactUs: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
  "/assets/images/contact-us/contact-us-banner.png";
  const titleSplitPara = {
    heading: "Contact Us",
    subHeading: "",
    desc: ["Register to access the best trade packages available in Oman, or to partner with us and become part of our supplier database."]
  }
 
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <VisitOmanBrief locale={locale} data={titleSplitPara} />
      <ContactUsForm data={null} locale={locale} />
    </main>
  );
};
export default ContactUs;
