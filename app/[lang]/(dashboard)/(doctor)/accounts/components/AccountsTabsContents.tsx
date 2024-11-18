import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";

export default function AccountsTabsContents() {
  const headers = [
    "ID",
    "Account No",
    "Reason",
    "Debited / Credited On",
    "Amount",
    "Status",
  ];
  return (
    <TabsContent value="accounts">
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="min-w-[800px]  ">
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
                  <p>#AC-1234</p>
                </TableCell>
                <TableCell>5396 5250 1908 XXXX</TableCell>
                <TableCell className="">Appointment</TableCell>

                <TableCell>26 Mar 2024</TableCell>
                <TableCell>$300</TableCell>
                <TableCell> Completed</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </TabsContent>
  );
}
