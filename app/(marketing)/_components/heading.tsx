"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Unleash Your Creativity, Organize Your Thoughts. Your Ultimate
        Productivity Companion Awaits.
        <span className="underline">Brain Board</span>
      </h1>
      <h3 className="text-base sm:text-2xl md:text-3xl font-medium">
        Streamline Your Workflow, Capture Ideas Effortlessly, and Collaborate
        Seamlessly with Brain Board - Your All-in-One Productivity Solution.
      </h3>
      <Button>
        Join Now
        <ArrowRight className="w-4 h-4 ml-2"></ArrowRight>
      </Button>
    </div>
  );
};

export default Heading;
