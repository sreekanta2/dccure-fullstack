import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeCheck } from "lucide-react";
import EditForm from "./components/edit-form";
import PayoutTable from "./components/payout-table";

interface PayoutSettingPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const RequestPageView = ({ trans }: PayoutSettingPageViewProps) => {
  const headers = ["Date", "Payment Method", "Amount", "Status"];
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 bg-primary p-6 rounded-md text-default-50">
          <h1 className="text-2xl font-semibold ">Payout Settings</h1>
          <p className="text-sm  ">
            All the earning will be sent to below selected payout method
          </p>

          <div className="flex gap-8     ">
            <div className="flex gap-4 w-36 h-28 bg-default-100 rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-primary font-semibold border-b pb-1">
                Paypal
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-default-50 absolute -top-2 -right-1"
              />
            </div>
            <div className="flex gap-4 w-36 h-28 bg-default-100 rounded-md flex-col items-center py-4 relative ">
              <p className="text-2xl text-primary  font-semibold border-b pb-1">
                Stripe
              </p>
              <EditForm />
              <BadgeCheck
                size={20}
                strokeWidth={2}
                fill="green"
                className="text-default-50 absolute -top-2 -right-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <SearchInput searchParamKey="search" className="w-fit my-4" />
          <ScrollArea className="w-full   ">
            <Table className=" min-w-[600px]">
              <TableHeader>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHead key={index} className="w-[100px]">
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody className="w-full">
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
                <PayoutTable />
              </TableBody>
            </Table>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </div>
    </div>
  );
};

export default RequestPageView;
