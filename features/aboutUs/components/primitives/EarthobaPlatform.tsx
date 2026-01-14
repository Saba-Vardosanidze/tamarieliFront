'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const EarthobaPlatform = () => {
  const t = useTranslations('EarthobaPlatform');

  return (
    <section className="relative flex justify-center items-center py-24 lg:py-32 w-full min-h-screen overflow-hidden">
      <div className="z-0 absolute inset-0">
        <Image
          src="/Images/headerImages/png/newAboutUsBg.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-6xl">
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="relative bg-white/50 shadow-sm backdrop-blur-md p-5 border border-white/20 rounded-full">
            <Image
              src="/Images/headerImages/png/earthoba.png"
              alt="Earthoba Logo"
              width={180}
              height={180}
              className="w-24 lg:w-36 h-auto hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <header className="space-y-4 text-center">
            <h2 className="font-light text-gray-900 text-3xl md:text-5xl uppercase tracking-[0.25em]">
              {t('title')}
            </h2>
            <p className="font-medium text-gray-600 text-base md:text-lg uppercase tracking-[0.2em]">
              {t('title2')}
            </p>
            <div className="bg-gray-400 mx-auto w-16 h-px" />
          </header>

          <div className="w-full">
            <ul className="flex md:flex-row flex-col justify-center items-center gap-6 md:gap-12 lg:gap-16">
              {[t('point1'), t('point2'), t('point3'), t('point4')].map(
                (point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="bg-gray-400 rounded-full w-1.5 h-1.5" />
                    <span className="font-medium text-gray-800 text-sm md:text-base uppercase tracking-widest">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="gap-12 lg:gap-20 grid md:grid-cols-2 pt-12 border-gray-200/50 border-t w-full">
            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl md:text-left text-center uppercase tracking-wider">
                {t('mainDirectionsTitle')}
              </h4>
              <ul className="gap-3 grid grid-cols-1">
                {[
                  t('direction1'),
                  t('direction2'),
                  t('direction3'),
                  t('direction4'),
                  t('direction5'),
                  t('direction6'),
                  t('direction7'),
                ].map((dir, i) => (
                  <li key={i} className="group flex items-center gap-3">
                    <div className="bg-gray-300 group-hover:bg-gray-900 w-1.5 h-px transition-all" />
                    <span className="font-light text-gray-700 group-hover:text-black text-base lg:text-lg italic leading-relaxed transition-colors">
                      {dir}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl md:text-left text-center uppercase tracking-wider">
                {t('valuesTitle')}
              </h4>
              <div className="relative">
                <span className="-top-4 -left-4 absolute opacity-50 font-serif text-gray-200 text-4xl select-none">
                  “
                </span>
                <p className="pl-4 border-gray-100 border-l-2 font-light text-gray-700 text-lg lg:text-xl italic leading-relaxed">
                  {t('valuesDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthobaPlatform;
