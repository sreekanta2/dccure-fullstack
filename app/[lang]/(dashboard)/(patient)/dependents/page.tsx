import { getDictionary } from "@/app/dictionaries";
import DependentsPageView from "./page-view";

interface DependentsPageProps {
  params: {
    lang: any;
  };
}
const DependentsPage = async ({ params: { lang } }: DependentsPageProps) => {
  const trans = await getDictionary(lang);
  return <DependentsPageView trans={trans} />;
};

export default DependentsPage;
