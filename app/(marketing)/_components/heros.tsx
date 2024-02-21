import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            alt="documents"
            className="object-contain"
          ></Image>
        </div>
        <div className="relative w-[400px] h-[400px] hidden lg:block">
          <Image src="/reading.png" fill alt="reading"></Image>
        </div>
      </div>
    </div>
  );
};

export default Heros;
