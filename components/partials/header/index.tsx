"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import FullScreen from "./full-screen";
import Inbox from "./inbox";
import Language from "./language";
import ClassicHeader from "./layout/classic-header";
import MobileMenuHandler from "./mobile-menu-handler";
import NotificationMessage from "./notification-message";
import ProfileInfo from "./profile-info";
import ThemeButton from "./theme-button";
import VerticalHeader from "./vertical-header";

const NavTools = ({ isDesktop }: { isDesktop: boolean }) => (
  <div className="nav-tools flex items-center gap-2">
    {isDesktop && <Language />}
    {isDesktop && <FullScreen />}
    <ThemeButton />
    <Inbox />
    <NotificationMessage />
    <div className="ltr:pl-2 rtl:pr-2">
      <ProfileInfo />
    </div>
    {!isDesktop && <MobileMenuHandler />}
  </div>
);

const Header = ({ handleOpenSearch }: { handleOpenSearch: () => void }) => {
  const { collapsed } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <ClassicHeader
      className={cn("", {
        "ltr:xl:ml-[248px] rtl:xl:mr-[300px] sticky top-0": !collapsed,
        "ltr:xl:ml-[72px] rtl:xl:mr-[72px] sticky top-0": collapsed,
      })}
    >
      <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
        <div className="flex justify-between items-center h-full">
          <VerticalHeader handleOpenSearch={handleOpenSearch} />
          <NavTools isDesktop={isDesktop} />
        </div>
      </div>
    </ClassicHeader>
  );
};

export default Header;
