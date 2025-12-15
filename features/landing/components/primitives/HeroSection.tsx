import { getTranslations } from "next-intl/server";
import tamarieli from "../../../../public/Images/headerImages/png/heroSection.webp";

const HeroSection = async () => {
  const t = await getTranslations("HeroSection");

  return (
    <div className="flex bg-white w-full">
      <div
        className="flex items-center justify-center bg-cover bg-no-repeat bg-center m-auto w-full max-w-[1440px] min-h-[323px] lg:min-h-[515px]"
        style={{ backgroundImage: `url(${tamarieli.src})` }}
      >
        <p className="text-center max-w-[410px] font-[700] text-[#000000] text-[26px] lg:text-[30px] custom-firago-font">
          {t("welcomeText")}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
