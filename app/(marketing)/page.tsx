import { Footer } from "./_components/footer";
import Heading from "./_components/heading";
import Heros from "./_components/heros";

const page = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col justify-center items-center gap-y-8 text-center md:justify-start my-3 px-3 flex-1">
        <Heading></Heading>
        <Heros></Heros>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default page;
