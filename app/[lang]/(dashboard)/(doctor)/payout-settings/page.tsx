import { getDictionary } from "@/app/dictionaries";
import PayoutSettingsPageView from "./page-view";

interface PayoutSettingsPageProps {
  params: {
    lang: any;
  };
}
const PayoutSettingsPage = async ({
  params: { lang },
}: PayoutSettingsPageProps) => {
  const trans = await getDictionary(lang);
  return <PayoutSettingsPageView trans={trans} />;
};

export default PayoutSettingsPage;
