import { getDictionary } from "@/app/dictionaries";
import AccountPageView from "./page-view";

interface RequestPageProps {
  params: {
    lang: any;
  };
}
const AccountPage = async ({ params: { lang } }: RequestPageProps) => {
  const trans = await getDictionary(lang);
  return <AccountPageView trans={trans} />;
};

export default AccountPage;
