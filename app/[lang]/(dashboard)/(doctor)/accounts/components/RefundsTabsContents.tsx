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

export default function RefundsTabsContents() {
  const headers = [
    "ID",
    "Account No",
    "Reason",
    "Debited / Credited On",
    "Amount",
    "Status",
  ];
  return (
    <TabsContent value="refunds">
      {/* <div>
        <SearchInput
          placeholder="Search for items..."
          searchParamKey="q"
          debounceDelay={500}
          className="w-fit my-4"
        />
      </div> */}

      <ScrollArea className="w-full   ">
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
                <TableCell>
                  <span className="px-2 py-1  bg-[#14b8a6]  rounded-full text-xs text-white ">
                    Completed
                  </span>
                  {/* <span className="px-2 py-1  bg-[#eaab08]  rounded-full text-xs text-white ">
                    pending
                  </span> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </TabsContent>
  );
}
