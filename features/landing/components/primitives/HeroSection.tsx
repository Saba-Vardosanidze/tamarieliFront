import { getTranslations } from "next-intl/server";
import FirstImage from "./Tamarieli-svg";
import SecondtImage from "./Earthoba-svg";

const HeroSection = async () => {
  const t = await getTranslations("hello");

  return (
    <div
      className="
    w-full
    bg-[url('/Images/headerImages/png/new-hero.jpeg')]
    bg-no-repeat
    bg-center
    bg-[length:100%_auto]
    aspect-[19/9]
  "
    ></div>
  );
};

export default HeroSection;
