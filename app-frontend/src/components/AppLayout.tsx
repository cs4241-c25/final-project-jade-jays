import React from "react";
import { Outlet } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const AppLayout: React.FC = () => {
  return (
    <>
      <NavigationMenu.Root
        asChild
        className={cn(
          "group relative z-10 flex justify-between items-center w-screen bg-primary",
        )}
        itemID={"navbar"}
      >
        <header>
          <NavigationMenu.Item className={cn("h-full")}>
            <NavigationMenu.Link
              className={"text-primary-foreground text-3xl font-semibold"}
              href="/"
            >
              Planner
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.List className={cn("group h-full")}>
            <NavigationMenu.Item className={cn("h-full")}>
              <NavigationMenu.Link
                className={"text-primary-foreground text-lg font-semibold"}
                href="/"
              >
                Courses
              </NavigationMenu.Link>
              &nbsp;
              &nbsp;
              <NavigationMenu.Link
                  className={"text-primary-foreground text-lg font-semibold"}
                  href="/flow"
              >
                Flowchart
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </header>
      </NavigationMenu.Root>
      <div className={"container"}>
        <Outlet />
      </div>
    </>
  );
};
