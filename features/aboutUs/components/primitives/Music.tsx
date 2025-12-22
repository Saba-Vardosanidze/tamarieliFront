"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Music = () => {
  const t = useTranslations("music");

  return (
    <div
      className=" relative flex justify-center mx-auto
        w-full
         lg:min-h-[1000px] md:min-h-[500px] min-h-[400px]
        bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')]
        bg-cover bg-center bg-no-repeat"
    >
      <div
        className="
     absolute
          lg:block
         right-0 top-0
          lg:right-[50px] lg:top-[150px]
  "
      >
        <Image
          src="/Images/headerImages/png/music.png"
          alt="logo"
          width={150}
          height={150}
          className="
  
        w-[70px] h-[70px]
            lg:w-[100px] lg:h-[100px]
    "
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 lg:py-5 md:py-8 py-6 w-full text-center">
          <div className="flex flex-col lg:gap-3 md:gap-2 gap-2 w-full">
            <h3 className="font-bold text-[#000000] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[15px]">
              {t("title")}
            </h3>
          </div>

          <p className="text-[#000000] lg:text-[18px] md:text-[24px] sm:text-[20px] text-[18px] ">
            {t("desc1")}
          </p>
          <p className="text-[#000000] lg:text-[18px] md:text-[24px] sm:text-[20px] text-[18px] ">
            {t("desc2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;
