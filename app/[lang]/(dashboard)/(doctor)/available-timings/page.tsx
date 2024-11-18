import { getDictionary } from "@/app/dictionaries";
import AvailablePageView from "./page-view";

interface AvailablePageProps {
  params: {
    lang: any;
  };
}
const AppointmentPage = async ({ params: { lang } }: AvailablePageProps) => {
  const trans = await getDictionary(lang);
  return <AvailablePageView trans={trans} />;
};

export default AppointmentPage;
