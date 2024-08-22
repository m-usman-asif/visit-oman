import NewsDetailsContianer from "@/app/components/useful-info/news-details/NewsDetailsContianer";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { latestCardData } from "@/app/data/data";
const LatestNewDetails: React.FC<any> = ({
  params: { locale, newsdetails },
}) => {

const  data=latestCardData?.filter((items)=>items?.id == newsdetails)

  return (
    <main>
     
      <NewsDetailsContianer
        data={data[0]}
        locale={locale}
      />
    </main>
  );
};
export default LatestNewDetails;
