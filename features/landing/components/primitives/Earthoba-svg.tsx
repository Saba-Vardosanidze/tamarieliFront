import { getTranslations } from "next-intl/server";
import Image from "next/image";

const SecondtImage = async () => {
  const t = await getTranslations("earthoba");

  return (
    <div className="relative  w-[200px] h-[200px]">
      <Image
        src="/images/headerImages/png/earthoba.png"
        alt="თამარიელის ლოგო"
        width={250}
        height={250}
        className="absolute inset-0 object-contain p-10 "
      />

      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 pointer-events-none"
      >
        <defs>
          <path id="bottomArc" d="M 50 100 A 200 300 1 0 0 280 100" />
        </defs>

        <text
          fill="#1f2937"
          fontSize="14"
          fontWeight="900"
          fontFamily="Georgia, 'Times New Roman', serif"
          dominantBaseline="hanging"
          transform="translate(-20, 80)"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            {t("platform")}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default SecondtImage;
