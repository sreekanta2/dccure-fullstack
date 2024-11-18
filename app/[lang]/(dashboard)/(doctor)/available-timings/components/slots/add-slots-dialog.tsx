"use client";
import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { calculatePrice } from "./utils";

const formSchema = z.object({
  startTime: z.string().min(2, "Start time  required"),
  endTime: z.string().min(2, "End time  required"),
  intervals: z.string().optional(),
  duration: z.string(),
  price: z.number().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function AddSlots({ day }: { day: string }) {
  // Example usage:
  const startTime = new Date("1970-01-01T09:00:00.000Z");
  const endTime = new Date("1970-01-01T17:00:00.000Z");

  const price = calculatePrice(startTime, endTime);
  console.log(`Total price: $${price}`);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      intervals: "",
      duration: "",
      price: price,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className=" text-success cursor-pointer  ">Add Slot</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" hiddenCloseIcon>
        <DialogHeader>
          <div className="border-b pb-4">
            <DialogTitle>Add New Slot</DialogTitle>
            <DialogClose asChild>
              <X
                className="absolute right-2 border bg-primary/20 text-default-500 rounded-full top-4 cursor-pointer p-[2px] transition-all duration-300 ease-in-out hover:bg-destructive hover:text-primary-foreground"
                size={24}
              />
            </DialogClose>
          </div>

          <DialogDescription>
            Add Schedule slots to your profile here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-4">
            <InputComponent
              name="startTime"
              control={control}
              label="Start Time"
              error={errors.startTime?.message}
              isRequired={true}
            />
            <InputComponent
              name="endTime"
              control={control}
              label="End Time"
              error={errors.endTime?.message}
              isRequired={true}
            />
          </div>
          <div className="md:flex gap-4">
            <InputComponent
              name="intervals"
              control={control}
              label="Appointments Intervals"
              error={errors.intervals?.message}
            />
            <InputComponent
              name="duration"
              control={control}
              label="Appointment Durations"
              error={errors.duration?.message}
            />
          </div>
          <InputComponent
            name="price"
            defaultValue={price}
            control={control}
            label="Price"
            disabled={true}
            error={errors.duration?.message}
          />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
