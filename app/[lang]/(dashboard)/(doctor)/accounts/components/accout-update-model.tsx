"use client";
import InputComponent from "@/components/InputComponent";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  bankname: z.string().min(2, "Bank Name must be at least 2 characters."),
  branchname: z.string().min(2, "Branch Name must be at least 2 characters."),
  accountnumner: z
    .string()
    .min(2, "Account number must be at least 2 characters."),
  accountname: z.string().min(2, "Account Name must be at least 2 characters."),
});

export function AccountUpdateModel() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankname: "",
      branchname: "",
      accountnumner: "",
      accountname: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submitted data:", data);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="soft" className="bg-foreground text-white">
          Edit Details
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full">
        <ScrollArea className="h-[75vh] pr-4">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle>Account Details</AlertDialogTitle>
            <hr />
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputComponent
              name="bankname"
              control={control}
              label="Bank Name"
              placeholder="Enter Bank Name"
              error={errors.bankname?.message}
              type="text"
              isRequired={true}
              className="w-full"
              color="primary"
            />

            <InputComponent
              name="branchname"
              control={control}
              label="Branch Name"
              placeholder="Enter Branch Name"
              error={errors.branchname?.message}
              type="text"
              isRequired={true}
              className="w-full"
              color="primary"
            />

            <InputComponent
              name="accountnumner"
              control={control}
              label="Account Number"
              placeholder="Enter Account Number"
              error={errors.accountnumner?.message}
              type="text"
              isRequired={true}
              className="w-full"
              color="primary"
            />

            <InputComponent
              name="accountname"
              control={control}
              label="Account Name"
              placeholder="Enter Account Name"
              error={errors.accountname?.message}
              type="text"
              isRequired={true}
              className="w-full"
              color="primary"
            />

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit" className="bg-success">
                Update
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
}
