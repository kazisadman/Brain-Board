"use client";
import UseScrollTop from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/spinner";

const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const scrolled = UseScrollTop();
  return (
    <div
      className={cn(
        "fixed z-50 flex items-center top-0 w-full p-6 bg-background",
        scrolled && "border-b-2 shadow-md "
      )}
    >
      <Logo></Logo>
      <div className="flex md:justify-end md:ml-auto justify-between gap-x-2">
        {!isLoading && !isAuthenticated && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Join Free
              </Button>
            </SignInButton>
          </>
        )}
        {isLoading && !isAuthenticated && (
            <Spinner size="lg"></Spinner>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Brain Board</Link>
            </Button>
            <UserButton afterSignOutUrl="/"></UserButton>
          </>
        )}
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
