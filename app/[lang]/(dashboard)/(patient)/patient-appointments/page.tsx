import { getDictionary } from "@/app/dictionaries";
import AppointmentsPageView from "./page-view";

interface AppointmentsPageProps {
  params: {
    lang: any;
  };
}
const AppointmentPage = async ({ params: { lang } }: AppointmentsPageProps) => {
  const trans = await getDictionary(lang);
  return <AppointmentsPageView trans={trans} />;
};

export default AppointmentPage;
