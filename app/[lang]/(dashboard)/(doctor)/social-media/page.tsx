import { getDictionary } from "@/app/dictionaries";
import SocialMediaPageView from "./page-view";

interface SocialMediaPageProps {
  params: {
    lang: any;
  };
}
const SocialMediaPage = async ({ params: { lang } }: SocialMediaPageProps) => {
  const trans = await getDictionary(lang);
  return <SocialMediaPageView trans={trans} />;
};

export default SocialMediaPage;
