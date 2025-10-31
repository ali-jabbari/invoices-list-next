"use client"

import Typography from "@/ui/typography/typography";
import { ListItemButtonModels } from "@/types/ui/listItemButton.models";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const ListItemButton: React.FC<ListItemButtonModels> = ({ title, href, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <button className={`${isActive && 'bg-background'} flex items-center gap-4 hover:bg-background w-full px-4 py-3 rounded-[10px]`}>
        <Icon size={24} className="text-txt-title"/>
        <Typography variants="title-sm-medium">
          {title}
        </Typography>
      </button>
    </Link>
  );
};

export default ListItemButton;
