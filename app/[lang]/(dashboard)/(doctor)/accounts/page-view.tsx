import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountsDetails from "./accout-page";
import AccountsTabsContents from "./components/AccountsTabsContents";
import RefundsTabsContents from "./components/RefundsTabsContents";

interface AccountPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const AccountPageView = ({ trans }: AccountPageViewProps) => {
  return (
    <div className="space-y-6 mb-8  p-4 rounded-md bg-card">
      <AccountsDetails />
      <div className="my-8">
        <Tabs defaultValue="accounts">
          <TabsList className=" space-x-4 bg-transparent">
            <TabsTrigger
              value="accounts"
              className="h-10 px-4 bg-primary/10  hover:text-blue-500    data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground "
            >
              Accounts
            </TabsTrigger>
            <TabsTrigger
              value="refunds"
              className="h-10 px-4 bg-primary/10  hover:text-blue-500    data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground "
            >
              Refunds
            </TabsTrigger>
          </TabsList>
          <SearchInput searchParamKey="q" className="my-4" />
          <AccountsTabsContents />
          <RefundsTabsContents />
        </Tabs>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  );
};

export default AccountPageView;
