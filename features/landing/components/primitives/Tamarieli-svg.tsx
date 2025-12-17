import { getTranslations } from "next-intl/server";
import Image from "next/image";

const FirstImage = async () => {
  const t = await getTranslations("asociation");

  return (
    <div className="relative w-[200px] h-[200px]">
      <Image
        src="/images/headerImages/png/siteLogo.png"
        alt="თამარიელის ლოგო"
        width={250}
        height={250}
        className="absolute inset-0 object-contain p-10"
      />

      {/* Curved text BELOW logo */}
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
            {t("tamarieli")}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default FirstImage;
