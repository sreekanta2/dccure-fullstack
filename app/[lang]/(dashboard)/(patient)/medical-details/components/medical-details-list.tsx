import IconWrapper from "@/components/IconWraper";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { MedicalDetailsForm } from "./medical-details-form";
import { MedicalDetailsModal } from "./medical-details-modal";
import { MedicalDetailsUpdateForm } from "./medical-details-update-form";

export default function MedicalDetailLst() {
  const headers = [
    "ID",
    " Patient Name",
    "BMI",
    "Heart Rate",
    "FBC Status",
    "Weight",
    "Added on",
    "Action",
  ];
  return (
    <div className="space-y-4">
      <div className="flex h-full  flex-col-reverse lg:flex-row items-center justify-between gap-4">
        <SearchInput searchParamKey="q" />
        <MedicalDetailsForm />
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="min-w-[800px] max-w-full border ">
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="w-[100px]">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="w-full  ">
            {[1, 2, 3].map((i) => (
              <TableRow className=" h-14 " key={i}>
                <TableCell>
                  <p>#RE1234</p>
                </TableCell>
                <TableCell> Electro cardio</TableCell>
                <TableCell className="">23.5</TableCell>

                <TableCell>89 </TableCell>
                <TableCell>140 </TableCell>
                <TableCell>74 kg </TableCell>
                <TableCell>22 mach 2024 </TableCell>

                <TableCell className="flex  gap-4 ">
                  <MedicalDetailsModal />
                  <MedicalDetailsUpdateForm />
                  <IconWrapper
                    icon={Trash}
                    strokeWidth={2}
                    className="hover:bg-destructive text-default-500 hover:text-primary-foreground hover:border-0"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Pagination currentPage={1} totalPages={10} />
    </div>
  );
}
