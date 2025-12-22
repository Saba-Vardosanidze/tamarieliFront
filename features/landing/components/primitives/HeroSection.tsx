import { getTranslations } from "next-intl/server";
import FirstImage from "./Tamarieli-svg";
import SecondtImage from "./Earthoba-svg";

const HeroSection = async () => {
  const t = await getTranslations("hello");

  return (
    <div
      className="
        relative
        bg-[url('/Images/headerImages/png/image.png')]
        bg-cover bg-center bg-no-repeat
        w-full
        min-h-[300px] md:min-h-[300px] lg:min-h-[500px]
        flex justify-center
      "
    >
      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-[1440px] h-full">
        {/* IMAGES BLOCK */}
        <div
          className="
            absolute
            top-[50px] lg:top-[100px]
            right-1/2 lg:right-[200px]
            translate-x-1/2 lg:translate-x-0
            flex
            scale-75 md:scale-90 lg:scale-100
          "
        >
          <FirstImage />
          <SecondtImage />
        </div>

        {/* TEXT */}
        <div
          className="
            absolute
            top-[220px] lg:top-[260px]
            left-1/2 lg:left-[400px]
            -translate-x-1/2
            text-center lg:text-left
          "
        >
          <p className="font-bold text-black text-[26px]">{t("sayHello")}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
