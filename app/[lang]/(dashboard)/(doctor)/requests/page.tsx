import { getDictionary } from "@/app/dictionaries";
import RequestPageView from "./page-view";

interface RequestPageProps {
  params: {
    lang: any;
  };
}
const RequestPage = async ({ params: { lang } }: RequestPageProps) => {
  const trans = await getDictionary(lang);
  return <RequestPageView trans={trans} />;
};

export default RequestPage;
