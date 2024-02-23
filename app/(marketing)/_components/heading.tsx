"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Unleash Your Creativity, Organize Your Thoughts. Your Ultimate
        Productivity Companion Awaits.
        <span className="underline">Brain Board</span>
      </h1>
      <h3 className="text-base sm:text-2xl md:text-3xl font-medium mb-4">
        Streamline Your Workflow, Capture Ideas Effortlessly, and Collaborate
        Seamlessly with Brain Board - Your All-in-One Productivity Solution.
      </h3>
      {!isLoading && isAuthenticated && (
        <Button asChild>
          <Link href="/documents">
            Enter Brain Board
            <ArrowRight className="w-4 h-4 ml-2"></ArrowRight>
          </Link>
        </Button>
      )}
      {isLoading && !isAuthenticated && (
        <div className="flex justify-center items-center">
          <Spinner size="lg"></Spinner>
        </div>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Join Now
            <ArrowRight className="w-4 h-4 ml-2"></ArrowRight>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
