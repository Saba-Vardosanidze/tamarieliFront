'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutUsSvg from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';

const DigitalLibrary = () => {
  const t = useTranslations('DigitalLibrary');

  return (
    <div className="flex justify-center mx-auto w-full">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        

        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-270"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-180"
          />
        </div>


        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 lg:py-5 md:py-8 py-6 w-full text-center">
          <div className="flex flex-col lg:gap-3 md:gap-2 gap-2 w-full">
            <h3 className="font-bold text-[#7B3F00] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
              {t('title')}
            </h3>
            <p className="font-[500] text-[#7B3F00] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px]">
              {t('subtitle')}
            </p>
          </div>

          <ul className="flex flex-col lg:gap-6 md:gap-4 gap-3 text-[#7B3F00] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px]">
            <li>{t('point1')}</li>
            <li>{t('point2')}</li>
            <li>{t('point3')}</li>
            <li>{t('point4')}</li>
          </ul>
        </div>

      
        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-0"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;