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
import { Download, Trash } from "lucide-react";
import { MedicalRecordsForm } from "./add-medical-records";
import { MedicalRecordsUpdateForm } from "./update-form";

export default function MedicalRecordContent() {
  const headers = ["ID", " Name", "Date", "Description", "Action"];
  return (
    <div className="space-y-4">
      <div className="flex h-full  flex-col-reverse lg:flex-row items-center justify-between gap-4">
        <SearchInput searchParamKey="q" />
        <MedicalRecordsForm />
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
                <TableCell> Electro cardiography</TableCell>
                <TableCell className="">21 Mar 2024</TableCell>

                <TableCell>Glucose Test V12 </TableCell>
                <TableCell className="flex  gap-4 ">
                  <MedicalRecordsUpdateForm />

                  <IconWrapper
                    icon={Download}
                    strokeWidth={2}
                    className="hover:bg-success text-default-500 hover:text-primary-foreground hover:border-0"
                  />
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
