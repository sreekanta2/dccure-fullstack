import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { DependentsForm } from "./components/dependents-form";
import DependantsCard from "./components/DependentsCard";

interface DependentsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DependentsPageView = ({ trans }: DependentsPageViewProps) => {
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <div className="flex items-center justify-between border-none pb-0">
        <h1 className="text-2xl"> Dependents </h1>

        <SearchInput searchParamKey="search" />
        <DependentsForm />
      </div>
      <hr className="my-2" />

      <div className=" space-y-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div className="   " key={i}>
            <DependantsCard key={i} />
          </div>
        ))}
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  );
};

export default DependentsPageView;
