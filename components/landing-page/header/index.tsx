"use client";
import ThemeButton from "@/components/partials/header/theme-button";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Icon } from "@iconify/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menus } from "./../data";
const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = React.useState<boolean>(false);

  if (!isDesktop) {
    return (
      <>
        <div
          className={
            scroll
              ? "bg-card/50 dark:bg-card/70 backdrop-blur-lg z-50 shadow-sm fixed top-0 left-0 w-full py-3"
              : "fixed top-0 left-0 w-full py-3 z-50"
          }
        >
          <nav className="container flex justify-between relative z-50">
            <Link href="/" className="flex items-center gap-1">
              <SiteLogo className="h-8 w-8  text-primary" />
              <span className="text-primary-500 font-medium text-xl">
                Decure
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <ThemeButton />
              <Button asChild size="sm">
                <Link href="/auth/login" className="text-sm font-semibold">
                  <Icon
                    icon="heroicons:shopping-cart"
                    className="w-4 h-4 mr-1.5"
                  />
                  Login
                </Link>
              </Button>
              <button type="button">
                <Menu
                  className=" h-6 w-6 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </button>
            </div>
            {open && (
              <div className="absolute top-full bg-background rounded-md p-4 w-full shadow-md">
                <ul className=" space-y-1.5">
                  {menus?.map((item, i) => (
                    <li
                      key={`main-item-${i}`}
                      className=" block text-base font-medium text-default-600 hover:text-primary"
                    >
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </>
    );
  }
  return (
    <div
      className={
        scroll
          ? "bg-card/50 backdrop-blur-lg shadow-xl z-30 dark:bg-card/70 fixed top-0 left-0 w-full py-3"
          : " z-30 fixed top-0 left-0 w-full py-3"
      }
    >
      <nav className="container flex justify-between">
        <Link href="/" className="flex items-center gap-1">
          <SiteLogo className="h-8 w-8  text-primary" />
          <span className="text-primary-500 font-medium text-xl">Deccure</span>
        </Link>
        <ul className="  flex gap-4">
          {menus?.map((item, i) => (
            <li
              key={`main-item-${i}`}
              className=" block text-base font-medium text-default-600 hover:text-primary"
            >
              <Link href={item.href}>{item.title} </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <ThemeButton />
          <Button asChild size="sm">
            <Link href="/auth/login" className="text-sm font-semibold">
              <Icon icon="heroicons:shopping-cart" className="w-4 h-4 mr-1.5" />
              Login
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
