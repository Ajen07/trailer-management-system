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
import Link from "next/link";

export function Heronavbar() {
  return (
    <div className="fixed top-2 right-5">
      <Menubar className="w-full">
        <MenubarMenu>
          <MenubarTrigger>
            <CircleUserRound />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link className="w-full" href="/sign-in">Sign In</Link>
            </MenubarItem>
            <MenubarItem>
              <Link className="w-full" href="/sign-up">Sign Up</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
