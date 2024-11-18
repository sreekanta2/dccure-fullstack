"use client";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";
import React from "react";

import HeaderSearch from "@/components/header-search";
import LayoutLoader from "@/components/layout-loader";
import ThemeCustomize from "@/components/partials/customizer/theme-customizer";
import Footer from "@/components/partials/footer";
import MobileSidebar from "@/components/partials/sidebar/mobile-sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";
import { useSidebar } from "@/store";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
const DashBoardLayoutProvider = ({
  children,
  trans,
}: {
  children: React.ReactNode;
  trans: any;
}) => {
  const { collapsed } = useSidebar();

  const [open, setOpen] = React.useState(false);

  const location = usePathname();
  const isMobile = useMediaQuery("(min-width: 768px)");
  const mounted = useMounted();

  if (!mounted) {
    return <LayoutLoader />;
  }

  return (
    <div className="max-w-[1360px] mx-auto">
      <Header handleOpenSearch={() => setOpen(true)} />
      <Sidebar trans={trans} />

      <div
        className={cn("", {
          "ltr:xl:ml-[248px] rtl:xl:mr-[300px] sticky top-0 ": !collapsed,
          "ltr:xl:ml-[72px] rtl:xl:mr-[72px] sticky top-0": collapsed,
        })}
      >
        <div className={cn(" layout-padding px-6 pt-4  page-min-height ")}>
          <LayoutWrapper
            isMobile={isMobile}
            setOpen={setOpen}
            open={open}
            location={location}
            trans={trans}
          >
            {children}
          </LayoutWrapper>
        </div>
      </div>
      <Footer handleOpenSearch={() => setOpen(true)} />
      {isMobile && <ThemeCustomize />}
    </div>
  );
};

export default DashBoardLayoutProvider;

const LayoutWrapper = ({
  children,
  setOpen,
  open,
  location,
  trans,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  setOpen: any;
  open: boolean;
  location: any;
  trans: any;
}) => {
  return (
    <>
      <motion.div
        key={location}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>

      <MobileSidebar trans={trans} className="left-[300px]" />
      <HeaderSearch open={open} setOpen={setOpen} />
    </>
  );
};
