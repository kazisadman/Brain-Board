import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo-dark.svg"
        width="40"
        height="40"
        alt="logo"
        className="dark:hidden"
      ></Image>
      <Image
        src="/logo-light.svg"
        width="40"
        height="40"
        alt="logo"
        className="hidden dark:block"
      ></Image>
      <h3 className={cn("font-semibold", font.className)}>Brain Board</h3>
    </div>
  );
};

export default Logo;
