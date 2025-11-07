'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutUsSvg from '../../../../public/Images/headerImages/svg/aboutUsSvg.svg';

const TamarieliDesc = () => {
  const t = useTranslations('TamarieliDesc');

  return (
    <div className="flex justify-center mx-auto py-[15px] lg:py-[15px] md:py-8 sm:py-6 py-4 w-full lg:min-h-[700px] md:min-h-[500px] min-h-auto">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-stretch w-full max-w-[1440px] lg:px-0 md:px-6 px-4">
        
      
        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px] md:min-h-[500px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-270 lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px]"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={300}
            alt="Decorative element"
            className="rotate-180 lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px]"
          />
        </div>


        <div className="flex flex-col justify-center items-center lg:gap-7 md:gap-5 gap-4 mx-auto lg:px-4 md:px-3 px-2 w-full text-center">
          <h3 className="font-bold text-[#7B3F00] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
            {t('title')}
          </h3>

          <ul className="text-[#7B3F00] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] list-disc list-inside">
            <li>{t('list.inspiration')}</li>
            <li>{t('list.identity')}</li>
          </ul>

          <p className="lg:mt-5 md:mt-4 mt-3 max-w-[900px] text-[#7B3F00] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] lg:leading-normal md:leading-relaxed leading-relaxed">
            {t('paragraph')}
          </p>
        </div>


        <div className="lg:flex hidden flex-col justify-between lg:min-h-[700px] md:min-h-[500px]">
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-0 lg:w-[300px] lg:h-[200px] md:w-[200px] md:h-[150px]"
          />
          <Image
            src={aboutUsSvg}
            width={300}
            height={200}
            alt="Decorative element"
            className="rotate-90 lg:w-[300px] lg:h-[200px] md:w-[200px] md:h-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TamarieliDesc;