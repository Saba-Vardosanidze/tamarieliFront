import Image from "next/image";

const FirstImage = () => {
  return (
    <div className="relative w-[300px] h-[300px]">
      <Image
        src="/images/headerImages/png/siteLogo.png"
        alt="თამარიელის ლოგო"
        width={300}
        height={300}
        className="absolute inset-0 object-contain p-10"
      />

      {/* Curved text BELOW logo */}
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 pointer-events-none"
      >
        <defs>
          <path id="bottomArc" d="M 50 100 A 200 300 1 0 0 280 150" />
        </defs>

        <text
          fill="#1f2937"
          fontSize="16"
          fontWeight="600"
          fontFamily="Georgia, 'Times New Roman', serif"
          dominantBaseline="hanging"
          transform="translate(0, 100)"
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            ასოციაცია თამარიელი
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default FirstImage;
