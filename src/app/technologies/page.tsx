"use client";
import CoverTitle from "@/src/components/CoverTitle";
import { useTranslations } from "next-intl";

const TechnologiesCover = () => {
  const t = useTranslations("TechnologiesPage");
  
  return (
  <section className="relative h-screen shrink-0 w-screen flex flex-col items-center justify-around text-6xl bg-[#fcb9c0] text-black font-semibold p-8 overflow-hidden isolate">
    <div className="flex w-screen justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
      <span>Rosanna Contasti</span>
      <span>7</span>
    </div>
    {/* <div
      className=" flex flex-row  items-center  text-[clamp(4rem,10vw,16rem)]  relative z-10
    leading-none
    tracking-normal
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
    ">
      <span>SKILLS</span>
      <span>TECHNOLOGIES</span>
    </div> */}

    <CoverTitle lines={t.raw("coverTitle")} />

    <div className="flex w-screen  justify-between pr-26 pl-26 text-[clamp(1rem,1.5vw,2rem)]">
      <span>{`${"<3"}`}</span>
      <span>{`${":)"}`}</span>
    </div>
  </section>
  );
};

export default TechnologiesCover;