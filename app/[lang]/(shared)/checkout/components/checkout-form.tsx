"use client";
import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z
    .object({
      firstName: z.string().min(2, "First name required"),
      lastName: z.string().min(2, "Last name required"),
      email: z.string().email("Invalid email address"),
      phoneNumber: z.string().min(10, "Phone number required"),
      paymentMethod: z.enum(["creditCard", "paypal"], {
        required_error: "Payment method required",
      }),
      // Card details
      cardName: z.string().optional(),
      cardNumber: z.string().optional(),
      expiryMonth: z.string().optional(),
      expiryYear: z.string().optional(),
      cvv: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.paymentMethod === "creditCard") {
        if (!data.cardName) {
          ctx.addIssue({
            code: "custom",
            path: ["cardName"],
            message: "Card name is required",
          });
        }
        if (!data.cardNumber) {
          ctx.addIssue({
            code: "custom",
            path: ["cardNumber"],
            message: "Card number is required",
          });
        }
        if (!data.expiryMonth) {
          ctx.addIssue({
            code: "custom",
            path: ["expiryMonth"],
            message: "Expiry month is required",
          });
        }
        if (!data.expiryYear) {
          ctx.addIssue({
            code: "custom",
            path: ["expiryYear"],
            message: "Expiry year is required",
          });
        }
        if (!data.cvv) {
          ctx.addIssue({
            code: "custom",
            path: ["cvv"],
            message: "CVV is required",
          });
        }
      }
    });

  type FormData = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      paymentMethod: "creditCard",
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    console.log(data);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* User Information */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <InputComponent
          name="firstName"
          control={control}
          label="First Name"
          isRequired
          error={errors.firstName?.message}
        />
        <InputComponent
          name="lastName"
          control={control}
          label="Last Name"
          isRequired
          error={errors.lastName?.message}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <InputComponent
          name="email"
          control={control}
          label="Email"
          type="email"
          isRequired
          error={errors.email?.message}
        />
        <InputComponent
          name="phoneNumber"
          control={control}
          label="Phone Number"
          isRequired
          error={errors.phoneNumber?.message}
        />
      </div>
      <p>
        Existing Customer? Click here to{" "}
        <Link href="/auth/login" className="text-info">
          login
        </Link>
      </p>
      <div className="space-y-2">
        <h1 className="text-lg font-medium">Payment Methods</h1>
        <hr className="my-4" />
        {/* Credit Card Checkbox */}
        <div className="flex items-center gap-x-4">
          <Checkbox
            checked={selectedPaymentMethod === "creditCard"}
            onCheckedChange={() => setValue("paymentMethod", "creditCard")}
          />
          <Label>Credit Card</Label>
        </div>
        {/* Credit Card Information */}
        {selectedPaymentMethod === "creditCard" && (
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <InputComponent
                name="cardName"
                control={control}
                label="Card Name"
                isRequired
                error={errors.cardName?.message}
              />
              <InputComponent
                name="cardNumber"
                control={control}
                label="Card Number"
                isRequired
                error={errors.cardNumber?.message}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <InputComponent
                name="expiryMonth"
                control={control}
                label="Expiry Month"
                isRequired
                error={errors.expiryMonth?.message}
              />
              <InputComponent
                name="expiryYear"
                control={control}
                label="Expiry Year"
                isRequired
                error={errors.expiryYear?.message}
              />
              <InputComponent
                name="cvv"
                control={control}
                label="CVV"
                isRequired
                error={errors.cvv?.message}
              />
            </div>
          </div>
        )}
        {/* PayPal Checkbox */}
        <div className="flex items-center gap-x-4">
          <Checkbox
            checked={selectedPaymentMethod === "paypal"}
            onCheckedChange={() => setValue("paymentMethod", "paypal")}
          />
          <Label>PayPal</Label>
        </div>
        {errors.paymentMethod && (
          <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
        )}
      </div>
      {/* Confirm and Pay */}
      <Button type="submit">Confirm and Pay</Button>
    </form>
  );
}
