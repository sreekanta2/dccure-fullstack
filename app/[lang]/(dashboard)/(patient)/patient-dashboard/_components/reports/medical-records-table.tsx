import IconWrapper from "@/components/IconWraper";
import Pagination from "@/components/PaginationComponents";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Edit, Trash } from "lucide-react";

export default function MedicalRecordsTable() {
  const headers = [
    "ID",
    " Name",
    "Date",
    "Created by",
    "Description",
    "Action",
  ];
  return (
    <div className="lg:w-fit">
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="min-w-[800px]   border ">
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="">
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

                <TableCell>Edalin Hendry</TableCell>
                <TableCell>$300</TableCell>

                <TableCell className="flex  gap-4">
                  <IconWrapper
                    icon={Edit}
                    strokeWidth={2}
                    className="hover:bg-success text-default-500 hover:text-primary-foreground hover:border-0"
                  />
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
