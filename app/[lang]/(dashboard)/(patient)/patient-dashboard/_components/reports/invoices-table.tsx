import IconWrapper from "@/components/IconWraper";
import ImageComponent from "@/components/ImageComponent";
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
import { avatar } from "@/config/user.config";
import { Download, Edit, Trash } from "lucide-react";
import Link from "next/link";

export default function InvoicesTable() {
  const headers = [
    "ID",
    " Doctor Name",
    " Appointment Date",
    "Booked on",
    "Amount",
    "Action",
  ];
  return (
    <div className=" ">
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <Table className="min-w-[800px] lg:w-full   border ">
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
            {[1, 2, 3, 4].map((i) => (
              <TableRow className=" h-10  " key={i}>
                <TableCell>
                  <p>#RE1234</p>
                </TableCell>
                <TableCell className=" ">
                  <div className="flex gap-2">
                    <div className="w-10 h-10">
                      <ImageComponent
                        src={avatar}
                        alt=""
                        className="rounded-md "
                      />
                    </div>
                    <Link href={`#`} className="hover:text-success">
                      Edalin Hendry
                    </Link>
                  </div>
                </TableCell>
                <TableCell className="">21 Mar 2024</TableCell>
                <TableCell className="">21 Mar 2024</TableCell>
                <TableCell>$300</TableCell>

                <TableCell className="flex  gap-4 ">
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
