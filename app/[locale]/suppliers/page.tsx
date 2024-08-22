import InnerBanner from "@/app/components/banner/InnerBanner";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import SuppliersForm from "@/app/components/useful-info/forms/SuppliersForm";


const Suppliers: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutUs");
  const bannerImg =
  "/assets/images/suppliers/suppliers-banner.png";
  const titleSplitPara = {
    title: "Tourism Providers",
    subTitle: "",
    desc: "",
  }
 
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <SuppliersForm data={null} locale={locale} />
    </main>
  );
};
export default Suppliers;
