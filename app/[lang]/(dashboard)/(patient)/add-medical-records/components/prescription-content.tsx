import IconWrapper from "@/components/IconWraper";
import ImageComponent from "@/components/ImageComponent";
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
import { avatar } from "@/config/user.config";
import { Download, Edit, Trash } from "lucide-react";
import Link from "next/link";

export default function PrescriptionContent() {
  const headers = ["ID", " Name", " Created Date", "Prescribed By", "Action"];
  return (
    <div className="space-y-4">
      <div className="flex h-full  flex-col-reverse lg:flex-row items-center justify-between gap-4">
        <SearchInput searchParamKey="q" />
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

                <TableCell>
                  <div className="flex items-center gap-4">
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
