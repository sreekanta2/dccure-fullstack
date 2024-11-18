"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    // Redirect to home page immediately
    redirect("/");
  }, []);

  return null; // Optional: add a loading state if you want
}
