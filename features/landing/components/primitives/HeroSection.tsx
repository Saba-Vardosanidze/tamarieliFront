import { getTranslations } from "next-intl/server";
import tamarieli from "../../../../public/Images/headerImages/png/heroSection.webp";
import Image from "next/image";
import FirstImage from "./Tamarieli-svg";

const HeroSection = async () => {
  const t = await getTranslations("HeroSection");

  return (
    <div
      className=" relative flex bg-white w-full bg-[url('/images/headerImages/png/new-hero-banner.jpeg')]
        bg-cover bg-center bg-no-repeat lg:min-h-[600px] md:min-h-[500px] min-h-[400px]"
    >
      <div
        className="absolute
       
          lg:right-[200px] lg:top-[150px] flex top-[150px] right-0"
      >
        {/* <Image
          src="/images/headerImages/png/siteLogo.png"
          alt="logo"
          width={150}
          height={150}
          className="
                  w-[100px] h-[100px]
                  lg:w-[150px] lg:h-[150px]
                "
        /> */}

        <FirstImage />

        <Image
          src="/images/headerImages/png/earthoba.png"
          alt="logo"
          width={150}
          height={150}
          className="
       w-[100px] h-[100px]
            lg:w-[150px] lg:h-[150px]
          "
        />
      </div>

      {/* <p className="text-center max-w-[410px] font-[700] text-[#000000] text-[26px] lg:text-[30px] custom-firago-font">
        {t("welcomeText")}
      </p> */}
    </div>
  );
};

export default HeroSection;
