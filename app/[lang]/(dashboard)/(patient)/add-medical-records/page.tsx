import { getDictionary } from "@/app/dictionaries";
import MedicalRecordsPageView from "./page-view";

interface MedicalRecordsPageProps {
  params: {
    lang: any;
  };
}
const MedicalRecordPage = async ({
  params: { lang },
}: MedicalRecordsPageProps) => {
  const trans = await getDictionary(lang);
  return <MedicalRecordsPageView trans={trans} />;
};

export default MedicalRecordPage;
