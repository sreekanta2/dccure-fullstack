import { getDictionary } from "@/app/dictionaries";
import RequestPageView from "./page-view";

interface FavoritesPageProps {
  params: {
    lang: any;
  };
}
const FavoritesPage = async ({ params: { lang } }: FavoritesPageProps) => {
  const trans = await getDictionary(lang);
  return <RequestPageView trans={trans} />;
};

export default FavoritesPage;
