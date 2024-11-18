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

export default function AppointmentTable() {
  const headers = [
    "ID",
    "Test Name",
    "Date",
    "Referred By",
    "Amount",
    "Comments",
    "Status",
  ];
  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="min-w-[800px] max-w-fit border ">
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

                <TableCell>Edalin Hendry</TableCell>
                <TableCell>$300</TableCell>
                <TableCell> Good take rest</TableCell>
                <TableCell> Normal</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Pagination currentPage={1} totalPages={10} />
    </>
  );
}
