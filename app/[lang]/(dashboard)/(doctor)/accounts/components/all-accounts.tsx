import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AllAccountsModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="soft" className="bg-foreground text-white">
          Others Accounts
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <ScrollArea className="h-[75vh] pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>Others Accounts</AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                className=" w-full border rounded-lg p-4 space-y-4"
                key={item}
              >
                <div className="flex  justify-between ">
                  <div className=" ">
                    <h1 className="text-sm">Name</h1>
                    <h1> HDFC Bank Inc</h1>
                  </div>

                  <div className=" self-end">
                    <h1 className="text-sm"> Account No</h1>
                    <h1> 5396 5250 1908 XXXX</h1>
                  </div>
                </div>
                <div className="flex  justify-between  ">
                  <div className=" ">
                    <h1 className="text-sm"> Branch</h1>
                    <h1> London</h1>
                  </div>
                  <div className=" self-end">
                    <h1 className="text-sm"> Name on Bank Account</h1>
                    <h1> Edalin Hendry</h1>
                  </div>
                </div>
              </div>
            ))}

            {/* bank Name Field */}
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 ">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
