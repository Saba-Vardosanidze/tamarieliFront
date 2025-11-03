"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const TamarieliDesc = () => {
  const t = useTranslations("TamarieliDesc");

  return (
    <div className="flex justify-center py-[15px] w-full min-h-[700px] mx-auto">
      <div className="max-w-[1440px] w-full flex justify-between">
        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="sfs"
            className="rotate-270"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="sfs"
            className="rotate-180"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center mx-auto gap-7 px-4">
          <h3 className="text-[32px] text-[#7B3F00] font-bold">{t("title")}</h3>

          <ul className="list-disc list-inside text-[28px] text-[#7B3F00]">
            <li>{t("list.inspiration")}</li>
            <li>{t("list.identity")}</li>
          </ul>

          <p className="max-w-[900px] text-[28px] text-[#7B3F00] mt-5 leading-normal">
            {t("paragraph")}
          </p>
        </div>

        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="sfs"
            className="rotate-0"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="sfs"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default TamarieliDesc;
