'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutUsSvg from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';

const BasicPrinciples = () => {
  const t = useTranslations('BasicPrinciples');

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-0 py-10 w-full">
      <div className="flex lg:flex-row flex-col justify-between gap-10 w-full max-w-[1440px]">
        {/* Left image column */}
        <div className="flex lg:flex-col justify-between items-center lg:items-start gap-10 lg:gap-0 min-h-[400px] lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-270"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-180"
          />
        </div>

        {/* Center content */}
        <div className="flex flex-col flex-1 items-center lg:items-center gap-7 text-center lg:text-center">
          <h3 className="font-bold text-[#7B3F00] text-[28px] sm:text-[32px] md:text-[36px]">
            {t('title')}
          </h3>

          <ul className="flex flex-col gap-4 sm:gap-6 text-[#7B3F00] text-[20px] sm:text-[24px] list-disc list-inside">
            <li>{t('inclusivity')}</li>
            <li>{t('communication')}</li>
            <li>{t('interaction')}</li>
            <li>{t('culturalExchange')}</li>
          </ul>
        </div>

        {/* Right image column */}
        <div className="flex lg:flex-col justify-between items-center lg:items-end gap-10 lg:gap-0 min-h-[400px] lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="about-us"
            className="rotate-0"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="about-us"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicPrinciples;
