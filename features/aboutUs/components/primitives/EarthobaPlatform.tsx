'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutUsSvg from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';

const EarthobaPlatform = () => {
  const t = useTranslations('EarthobaPlatform');

  return (
    <div className="flex justify-center mx-auto w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between py-[100px] w-full max-w-[1440px] gap-10 lg:gap-0">
        

        <div className="hidden lg:flex flex-col justify-between min-h-[700px] gap-4">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="left-image"
            className="rotate-270"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="left-image"
            className="rotate-180"
          />
        </div>

        <div className="flex flex-col justify-center gap-7 w-full text-center lg:text-left">
          <h3 className="font-bold text-[#7B3F00] text-[24px] sm:text-[28px] lg:text-[32px]">
            {t('title')}
          </h3>

          <ul className="flex flex-col gap-4 sm:gap-6 text-[#7B3F00] text-[18px] sm:text-[20px] lg:text-[24px] list-disc list-inside">
            <li>{t('point1')}</li>
            <li>{t('point2')}</li>
            <li>{t('point3')}</li>
            <li>{t('point4')}</li>
          </ul>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full mt-6">
            <div className="flex flex-col flex-1 text-left">
              <h4 className="mb-2 sm:mb-4 font-bold text-[#7B3F00] text-[20px] sm:text-[24px] lg:text-[28px]">
                {t('mainDirectionsTitle')}
              </h4>
              <ul className="text-[#7B3F00] text-[16px] sm:text-[18px] lg:text-[20px] list-disc list-inside space-y-1">
                <li>{t('direction1')}</li>
                <li>{t('direction2')}</li>
                <li>{t('direction3')}</li>
                <li>{t('direction4')}</li>
                <li>{t('direction5')}</li>
                <li>{t('direction6')}</li>
                <li>{t('direction7')}</li>
              </ul>
            </div>

            <div className="flex-1 text-left">
              <h4 className="mb-2 sm:mb-4 font-bold text-[#7B3F00] text-[20px] sm:text-[24px] lg:text-[28px]">
                {t('valuesTitle')}
              </h4>
              <p className="text-[#7B3F00] text-[16px] sm:text-[18px] lg:text-[20px]">
                {t('valuesDescription')}
              </p>
            </div>
          </div>
        </div>

    
        <div className="hidden lg:flex flex-col justify-between min-h-[700px] gap-4">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="right-image"
            className="rotate-0"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="right-image"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default EarthobaPlatform;
