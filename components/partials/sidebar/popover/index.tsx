"use client";
import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { doctorConfig, MenuItemProps } from "@/config/menus";
import { cn, getDynamicPath, isLocationMatch } from "@/lib/utils";
import { useSidebar, useThemeStore } from "@/store";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import AddBlock from "../common/add-block";
import SidebarLogo from "../common/logo";
import MenuLabel from "../common/menu-label";
import NestedSubMenu from "../common/nested-menus";
import SingleMenuItem from "./single-menu-item";
import SubMenuHandler from "./sub-menu-handler";

const PopoverSidebar = ({ trans }: { trans: string }) => {
  const { collapsed, sidebarBg } = useSidebar();
  const { isRtl } = useThemeStore();

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);

  const data = useSession();
  console.log(data);

  let role: "doctor" | "patient" = "doctor"; // Ensure 'role' can be 'doctor' or 'patient'
  let menus: MenuItemProps[] = []; // Initialize 'menus' as an empty array
  menus = doctorConfig;

  // if (role === "doctor") {
  //   menus = doctorConfig || [];
  // } else if (role === "doctor") {
  //   menus = patientConfig || [];
  // }

  const toggleSubmenu = (i: number) => {
    setActiveSubmenu(activeSubmenu === i ? null : i);
  };

  const toggleMultiMenu = (subIndex: number) => {
    setMultiMenu(activeMultiMenu === subIndex ? null : subIndex);
  };

  const pathname = usePathname();
  const locationName = getDynamicPath(pathname);

  useEffect(() => {
    let subMenuIndex: number | null = null;
    let multiMenuIndex: number | null = null;

    menus.forEach((item, i) => {
      if (item.child) {
        item.child.forEach((childItem, j) => {
          if (isLocationMatch(childItem.href, locationName)) {
            subMenuIndex = i;
          }
          if (childItem.multi_menu) {
            childItem.multi_menu.forEach((multiItem) => {
              if (isLocationMatch(multiItem.href, locationName)) {
                subMenuIndex = i;
                multiMenuIndex = j;
              }
            });
          }
        });
      }
    });

    setActiveSubmenu(subMenuIndex);
    setMultiMenu(multiMenuIndex);
  }, [locationName, menus]);

  return (
    <div
      className={cn("fixed bg-card top-0 border-r h-full", {
        "w-[248px]": !collapsed,
        "w-[72px]": collapsed,
      })}
    >
      {sidebarBg !== "none" && (
        <div
          className="absolute left-0 top-0 z-[-1] w-full h-full bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${sidebarBg})` }}
        />
      )}
      <SidebarLogo />
      <Separator />
      <ScrollArea
        className={cn("sidebar-menu h-[calc(100%-80px)]", {
          "px-4": !collapsed,
        })}
      >
        <ul
          dir={isRtl ? "rtl" : "ltr"}
          className={cn("space-y-1", {
            "space-y-2 text-center": collapsed,
          })}
        >
          {menus.map((item, i) => (
            <li key={`menu_key_${i}`}>
              {!item.child && !item.isHeader && (
                <SingleMenuItem
                  item={item}
                  collapsed={collapsed}
                  trans={trans}
                />
              )}
              {item.isHeader && !item.child && !collapsed && (
                <MenuLabel item={item} trans={trans} />
              )}
              {item.child && (
                <>
                  <SubMenuHandler
                    item={item}
                    toggleSubmenu={toggleSubmenu}
                    index={i}
                    activeSubmenu={activeSubmenu}
                    collapsed={collapsed}
                    menuTitle={item.title}
                    trans={trans}
                  />
                  {!collapsed && (
                    <NestedSubMenu
                      toggleMultiMenu={toggleMultiMenu}
                      activeMultiMenu={activeMultiMenu}
                      activeSubmenu={activeSubmenu}
                      item={item}
                      index={i}
                      trans={trans}
                    />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        {!collapsed && (
          <div className="-mx-2">
            <AddBlock />
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default PopoverSidebar;
