import LatestNewsContainer from "@/app/components/useful-info/latest-news/LatestNewsContainer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import InnerBanner from "@/app/components/banner/InnerBanner";
const LatestNew: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const bannerImg =
    "/assets/images/latest-news/latest-news-banner.png";
  return (
    <main>
      <InnerBanner data={bannerImg} />
      <LatestNewsContainer locale={locale} />
    </main>
  );
};
export default LatestNew;
