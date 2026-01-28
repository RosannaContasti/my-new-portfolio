"use client";
import { useTranslations } from "next-intl";

export default function CRMSirenasPage() {
  const t = useTranslations("ProjectsPage.crmSirenas");
  return (
    <section className="relative flex flex-row shrink-0 w-screen h-screen justify-between bg-white overflow-hidden isolate">
      <div className="flex flex-col  items-start w-1/2 h-full text-[#fcb9c0]">
        <h1
          className="
    relative z-10
    leading-none
    tracking-normal
    text-[clamp(4rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
  "
        >
          CRM
        </h1>

        <h1
          className="
    relative z-10
    leading-none
    tracking-normal
    text-[clamp(4rem,10vw,16rem)]
    md:tracking-[-0.08em]
    lg:tracking-[-0.15em]
  "
        >
          PROYECTO SIRENAS
        </h1>
      </div>

      <span className="m-auto text-4xl font-bold text-center max-w-3xl px-4">
        {t("description")}
      </span>
    </section>
  );
}
