"use client";
import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUserRound } from "lucide-react";

export function Heronavbar() {
  return (
    <div className="fixed top-2 right-5">
      <Menubar className="w-full">
        <MenubarMenu>
          <MenubarTrigger>
            <CircleUserRound />
          </MenubarTrigger>
          <MenubarContent className="w-fit">
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
