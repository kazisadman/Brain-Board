"use client";

import { ChevronsLeft, MenuIcon } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [iscollapsed, setIsCollapsed] = useState(isMobile);
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition text-muted-foreground hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-sm h-6 w-6",
            iscollapsed && "opacity-0"
          )}
        >
          <ChevronsLeft className="h-6 w-6"></ChevronsLeft>
        </div>
        <div>
          <p>Action Items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-w-resize absolute h-full w-1 bg-primary/10  right-0 top-0" />
      </aside>
      <div
        className={cn(
          "absolute top-0 left-60 w-[calc(100%-240px)]",
          isResetting && "transition ease-in-out duration-300",
          isMobile && "w-full left-0"
        )}
      >
        <nav ref={navbarRef} className="w-full border-red-400 border-2">
          {iscollapsed && (
            <MenuIcon className="h-6 w-6" role="button"></MenuIcon>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
