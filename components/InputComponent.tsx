"use client";
import { Input, InputProps } from "@/components/ui/input";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface InputComponentProps
  extends Omit<InputProps, "name" | "control" | "defaultValue"> {
  name: string;
  control: Control<any>;
  label: string;
  error?: string;
  isRequired?: boolean;
  defaultValue?: string | number;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  (
    {
      name,
      control,
      label,
      error,
      isRequired = false,
      color = "primary",
      size,
      variant,
      radius,
      shadow,
      className = "h-10",
      defaultValue,
      ...inputProps
    },
    ref // Add ref as the second argument here
  ) => {
    return (
      <div className={` w-full    `}>
        <label htmlFor={name} className="mb-2 flex gap-1 items-center">
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <Input
                {...field}
                id={name}
                ref={ref} // Pass the ref to the Input component
                color={color}
                size={size}
                variant={variant}
                radius={radius}
                shadow={shadow}
                className={className}
                defaultValue={defaultValue}
                readOnly={inputProps.disabled}
                {...inputProps}
                onChange={(e) => {
                  const value =
                    inputProps.type === "number"
                      ? Number(e.target.value)
                      : e.target.value;
                  field.onChange(value);
                }}
                value={field.value || ""}
              />
              {error && (
                <p className="text-destructive text-sm mt-1">{error}</p>
              )}
            </>
          )}
        />
      </div>
    );
  }
);

export default InputComponent;
