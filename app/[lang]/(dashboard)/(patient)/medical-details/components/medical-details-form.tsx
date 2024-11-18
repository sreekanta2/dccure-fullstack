"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

// Define schema using zod
const formSchema = z.object({
  bmi: z.number().min(2, "Title must be at least 2 characters."),
  heartRate: z.number().min(2, "Heart Rate  required."),
  weight: z.number().min(2, "weight required."),
  fbc: z.number().min(2, "fbc required."),
  endDate: z.string().min(1, "Date  is required."),
});

type MedicalDetailsFormProps = {
  edit?: boolean;
};

export function MedicalDetailsForm({ edit = false }: MedicalDetailsFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bmi: 0,
      heartRate: 0,
      weight: 0,
      fbc: 0,
      endDate: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const gender = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Other" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="soft">Add MedicalDetails</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <ScrollArea className="h-[75vh] pr-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <InputComponent
              name="bmi"
              label="BMI"
              type="number"
              isRequired
              control={control}
              error={errors.bmi?.message}
            />
            <InputComponent
              name="heartRate"
              label="Heart Rate"
              type="number"
              isRequired
              control={control}
              error={errors.heartRate?.message}
            />
            <InputComponent
              name="weight"
              label="Weight"
              type="number"
              isRequired
              control={control}
              error={errors.weight?.message}
            />
            <InputComponent
              name="fbc"
              label="FBC"
              type="number"
              isRequired
              control={control}
              error={errors.fbc?.message}
            />
            <InputComponent
              name="endDate"
              label="End Date"
              isRequired
              type="date"
              control={control}
              error={errors.endDate?.message}
            />

            <div className="w-full flex justify-between gap-4">
              <Button type="submit" variant="soft" className="w-full">
                Submit
              </Button>
              <Button
                variant="soft"
                color="destructive"
                type="button"
                onClick={() => reset()}
                className="w-full"
              >
                Reset
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
