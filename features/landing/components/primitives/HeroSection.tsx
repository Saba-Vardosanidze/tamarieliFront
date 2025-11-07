import { getTranslations } from 'next-intl/server';
import tamarieli from '../../../../public/Images/headerImages/png/tamarieli.png';

const HeroSection = async () => {
  const t = await getTranslations('HeroSection');

  return (
    <div className="flex justify-center items-center bg-white w-full">
      <div
        className="flex flex-col items-center gap-[40px] bg-cover bg-no-repeat bg-center m-auto w-full max-w-[1440px] min-h-[323px] lg:min-h-[804px]"
        style={{ backgroundImage: `url(${tamarieli.src})` }}
      >
        <div className="relative w-full max-w-[1440px] h-full">
          <div className="top-[80px] lg:top-[163px] left-[16px] lg:left-[102px] absolute flex flex-col gap-[16px] lg:gap-[42px]">
            <p className="w-full max-w-[410px] font-extralight text-[#000000] text-[26px] lg:text-[56px] lg:leading-[75px] tracking-[0%] custom-firago-font">
              {t('welcomeText')}
            </p>
            <p className="flex flex-col w-full max-w-[473px] font-extralight text-[#000000] text-[16px] lg:text-[26px] italic leading-[100%] tracking-[0%] custom-firago-font">
              <span>{t('inspiration')}</span>
              <span>{t('identity')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
