"use client";
import UseScrollTop from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const scrolled = UseScrollTop()
  return (
    <div
      className={cn(
        "fixed z-50 flex items-center top-0 w-full p-6 bg-background",
        scrolled && "border-b-2 shadow-md "
      )}
    >
      <Logo></Logo>
    </div>
  );
};

export default Navbar;
