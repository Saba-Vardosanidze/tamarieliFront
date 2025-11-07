'use client';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import aboutUs from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';
import tamarieliLogo from '../../../../public/Images/headerImages/png/tamarieliLogo.png';
import earthoba from '../../../../public/Images/headerImages/png/ertoba.png';
import ciblus from '../../../../public/Images/headerImages/png/ciblus.png';

const InovateProjects = () => {
  const t = useTranslations('InovateProjects');

  return (
    <div className="flex justify-center mx-auto w-full">
      <div className="flex justify-between w-full max-w-[1440px]">
        <div className="flex flex-col justify-between min-h-[700px]">
          <Image
            src={aboutUs}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-270"
          />
          <Image
            src={aboutUs}
            width={300}
            height={300}
            alt="about-us"
            className="rotate-180"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-7 mx-auto px-4 py-[20px] w-full text-center">
          <h3 className="font-bold text-[#7B3F00] text-[32px]">{t('title')}</h3>

          <div className="flex justify-center items-center gap-5 w-full">
            <Image
              src={tamarieliLogo}
              width={150}
              height={150}
              alt="tamarieliLogo"
            />
            <Image src={earthoba} width={150} height={150} alt="earthobaLogo" />
            <Image src={ciblus} width={150} height={150} alt="ciblusLogo" />
          </div>

          <p className="font-[600] text-[#7B3F00] text-[22px]">
            {t('support')}
          </p>

          <ul className="flex flex-col gap-6 text-[#7B3F00] text-[24px] list-disc list-inside">
            <li>{t('point1')}</li>
            <li>{t('point2')}</li>
            <li>{t('point3')}</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between min-h-[700px]">
          <Image
            src={aboutUs}
            width={300}
            height={200}
            alt="about-us"
            className="rotate-0"
          />
          <Image
            src={aboutUs}
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

export default InovateProjects;
