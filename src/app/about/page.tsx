
"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutPage");
  return (
    <section className="
      relative
      w-screen
      min-h-screen
      flex
      flex-col
      lg:flex-row
      shrink-0
      bg-white
      overflow-hidden
      isolate
    ">
      {/* Texto */}
      <div className="
        bg-[#1b1b1b]
        w-full
        lg:w-1/2
        min-h-screen
        px-6
        py-12
        flex
        flex-col
        gap-8
        text-white
      ">
        <div
          className="
            relative
            text-[clamp(2.5rem,8vw,16rem)]
            tracking-[-0.04em]
            lg:tracking-[-0.15em]
            leading-none
          "
        >
          <span>{t("greeting")}</span>
          <br />
          <span className="relative inline-block">
            {t("name")}
            <Image
              src="star.png"
              alt=""
              width={160}
              height={160}
              className="
                absolute
                top-1/2
                right-[-1rem]
                lg:right-[-3rem]
                -translate-y-1/2
                z-20
                w-[clamp(2.5rem,10vw,20rem)]
                h-auto
              "
              priority
            />
          </span>
        </div>

        <span className="
          text-[clamp(1rem,3.8vw,1.4rem)]
          leading-relaxed
        ">
          {t("bio")}
        </span>
      </div>

      {/* Imagen */}
      <div className="
        w-full
        lg:w-1/2
        h-[60vh]
        lg:h-screen
        relative
        overflow-hidden
      ">
        <Image
          src="retrato.jpg"
          alt="Rosanna"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
