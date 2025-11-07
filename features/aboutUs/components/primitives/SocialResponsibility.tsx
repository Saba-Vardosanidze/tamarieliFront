'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutUsSvg from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';

const SocialResponsibility = () => {
  const t = useTranslations('SocialResponsibility');

  return (
    <div className="flex justify-center mx-auto w-full min-h-[700px]">
      <div className="flex justify-between w-full max-w-[1440px]">
        <div className="flex flex-col justify-between min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="sfs"
            className="rotate-270"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="sfs"
            className="rotate-180"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-7 mx-auto px-4 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] text-[32px]">{t('title')}</h3>

          <ul className="flex flex-col gap-6 text-[#7B3F00] text-[24px] list-disc list-inside">
            <li>{t('point1')}</li>
            <li>{t('point2')}</li>
            <li>{t('point3')}</li>
            <li>{t('point4')}</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="sfs"
            className="rotate-0"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="sfs"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibility;
