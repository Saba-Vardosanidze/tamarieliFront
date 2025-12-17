import { getTranslations } from "next-intl/server";
import FirstImage from "./Tamarieli-svg";
import SecondtImage from "./Earthoba-svg";

const HeroSection = async () => {
  const t = await getTranslations("hello");

  return (
    <div
      className="
        relative
        w-full
        bg-white
        bg-[url('/images/headerImages/png/image.png')]
        bg-cover
        bg-center
        bg-no-repeat
        min-h-[300px]
        md:min-h-[300px]
        lg:min-h-[500px]
      "
    >
      <div
        className="
          absolute
          top-[50px]
          right-0
          flex
          scale-75
          md:scale-90
          lg:scale-100

          lg:right-[200px]
          lg:top-[100px]
        "
      >
        <SecondtImage />
        <FirstImage />
      </div>

      <div
        className="
          absolute
          top-[220px]
          left-1/2
          -translate-x-1/2
          text-center

          lg:left-[570px]
          lg:top-[260px]
          lg:text-left
          
        "
      >
        <p className="text-[#000000] font-bold text-[26px]">{t("sayHello")}</p>
      </div>
    </div>
  );
};

export default HeroSection;
