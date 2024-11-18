"use client";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { useMediaQuery } from "@/hooks/use-media-query";
import facebookIcon from "@/public/images/auth/facebook.png";
import githubIcon from "@/public/images/auth/github.png";
import googleIcon from "@/public/images/auth/google.png";
import twitterIcon from "@/public/images/auth/twitter.png";

const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
  password: z.string().min(4),
});

const LogInForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  const togglePasswordType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "dashtail@codeshaper.net",
      password: "password",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    startTransition(async () => {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log(response);
      if (response?.ok) {
        toast.success("Login Successful");
        window.location.assign("/doctor-dashboard");
        reset();
      } else if (response?.error) {
        console.log(response?.error);
        toast.error(response.error);
      }
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <div className="w-full h-fit p-6 rounded-md max-w-[550px] border bg-card">
        <Link href="/" className="flex justify-center">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
        </Link>
        <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
          Hey, Hello 👋
        </div>
        <div className="2xl:text-lg text-base text-default-600 2xl:mt-2 leading-6">
          Enter the information you entered while registering.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7">
          <div>
            <Label
              htmlFor="email"
              className="mb-2 font-medium text-default-600"
            >
              Email
            </Label>
            <Input
              disabled={isPending}
              {...register("email")}
              type="email"
              id="email"
              className={cn("", { "border-destructive": errors.email })}
              size={!isDesktop2xl ? "xl" : "lg"}
            />
            {errors.email && (
              <div className="text-destructive mt-2">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="mt-3.5">
            <Label
              htmlFor="password"
              className="mb-2 font-medium text-default-600"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                disabled={isPending}
                {...register("password")}
                type={passwordType}
                id="password"
                className="peer"
                size={!isDesktop2xl ? "xl" : "lg"}
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-4"
                onClick={togglePasswordType}
                aria-label="Toggle password visibility"
              >
                <Icon
                  icon={
                    passwordType === "password"
                      ? "heroicons:eye"
                      : "heroicons:eye-slash"
                  }
                  className="w-5 h-5 text-default-400"
                />
              </button>
            </div>
            {errors.password && (
              <div className="text-destructive mt-2">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="mt-5 mb-8 flex flex-wrap justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Checkbox id="isRemembered" />
              <Label
                htmlFor="isRemembered"
                className="text-sm text-default-600 cursor-pointer"
              >
                Remember me
              </Label>
            </div>
            <Link href="/auth/forgot" className="text-sm text-primary">
              Forgot Password?
            </Link>
          </div>

          <Button
            className="w-full"
            disabled={isPending}
            size={!isDesktop2xl ? "lg" : "md"}
          >
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="mt-6 xl:mt-8 flex justify-center gap-4">
          {[googleIcon, githubIcon, facebookIcon, twitterIcon].map(
            (icon, index) => (
              <Button
                key={index}
                type="button"
                size="icon"
                variant="outline"
                className="rounded-full border-default-300 hover:bg-transparent"
                disabled={isPending}
                onClick={() =>
                  signIn(
                    icon === googleIcon
                      ? "google"
                      : icon === githubIcon
                      ? "github"
                      : undefined,
                    {
                      callbackUrl: "/dashboard",
                      redirect: icon !== githubIcon,
                    }
                  )
                }
              >
                <Image
                  src={icon}
                  alt="Social login icon"
                  className="w-5 h-5"
                  priority
                />
              </Button>
            )
          )}
        </div>

        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
