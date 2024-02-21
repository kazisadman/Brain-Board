import { Button } from "@/components/ui/button";
import Logo from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <Logo></Logo>
      <div className="flex items-center gap-x-2 w-full justify-between md:justify-end md:ml-auto text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
