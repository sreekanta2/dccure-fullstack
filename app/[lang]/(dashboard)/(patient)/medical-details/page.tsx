import { getDictionary } from "@/app/dictionaries";
import MedicalDetailsPageView from "./page-view";

interface MedicalDetailsPageProps {
  params: {
    lang: any;
  };
}
const MedicalDetailPage = async ({
  params: { lang },
}: MedicalDetailsPageProps) => {
  const trans = await getDictionary(lang);
  return <MedicalDetailsPageView trans={trans} />;
};

export default MedicalDetailPage;
