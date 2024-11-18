"use client";

import InputComponent from "@/components/InputComponent";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { Settings, X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function EditForm() {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex gap-2 items-center bg-slate-200 border rounded-full px-2 py-1 cursor-pointer">
          <Settings size={18} className="text-slate-500" />
          <p className="text-sm text-slate-500">Configure</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="top-[50%] md:top-[30%]  bg-card  ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <AlertDialogCancel className="absolute top-2 right-6 cursor-pointer hover:bg-red-600 hover:text-white rounded-full p-1 w-8 h-8 flex items-center justify-center transition-all duration-300">
            <X size={20} />
          </AlertDialogCancel>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-start">
              Configuration
            </AlertDialogTitle>
            <hr className="my-2 w-full  " />
            <AlertDialogDescription className="text-start">
              Enter your email address to receive payout
            </AlertDialogDescription>

            <div
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputComponent
                name="email"
                control={control}
                label="Email"
                placeholder="Enter your email"
                error={errors.email?.message}
                isRequired={true}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button type="submit">Save Changes</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
