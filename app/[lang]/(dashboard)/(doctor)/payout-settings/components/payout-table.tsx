import { TableCell, TableRow } from "@/components/ui/table";

export default function PayoutTable() {
  return (
    <TableRow>
      <TableCell>
        <h1>11 Nov 2023 </h1>
        <p className="text-sm   font-bold"> 10.45 am</p>
      </TableCell>
      <TableCell className="text-start">Paypal</TableCell>
      <TableCell>$100</TableCell>

      <TableCell className=" flex gap-1  items-center h-full ">
        <p className="  px-2 py-1 rounded-md">Completed</p>
      </TableCell>
    </TableRow>
  );
}
