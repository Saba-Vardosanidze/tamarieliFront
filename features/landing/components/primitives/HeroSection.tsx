import { getTranslations } from 'next-intl/server';
import FirstImage from './Tamarieli-svg';
import SecondtImage from './Earthoba-svg';

const HeroSection = async () => {
  const t = await getTranslations('hello');

  return (
    <div className="relative bg-[url('/images/headerImages/png/image.png')] bg-white bg-cover bg-no-repeat bg-center w-full min-h-[300px] md:min-h-[300px] lg:min-h-[500px]">
      <div className="top-[50px] lg:top-[100px] right-0 lg:right-[200px] absolute flex scale-75 md:scale-90 lg:scale-100">
        <FirstImage />
        <SecondtImage />
      </div>

      <div className="top-[220px] lg:top-[260px] left-1/2 lg:left-[570px] absolute lg:text-left text-center -translate-x-1/2">
        <p className="font-bold text-[#000000] text-[26px]">{t('sayHello')}</p>
      </div>
    </div>
  );
};

export default HeroSection;
