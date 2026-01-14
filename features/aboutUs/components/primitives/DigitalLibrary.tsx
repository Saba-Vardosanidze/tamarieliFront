'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const DigitalLibrary = () => {
  const t = useTranslations('DigitalLibrary');

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
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-5xl">
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="relative bg-white/50 shadow-sm backdrop-blur-md p-4 border border-white/20 rounded-full">
            <Image
              src="/Images/headerImages/png/ciblus.png"
              alt="Digital Library Logo"
              width={180}
              height={180}
              className="opacity-100 w-24 lg:w-32 h-auto hover:rotate-12 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="font-light text-gray-900 text-3xl md:text-5xl uppercase tracking-[0.25em]">
              {t('title')}
            </h2>
            <p className="font-medium text-gray-600 text-sm md:text-base uppercase tracking-[0.3em]">
              {t('subtitle')}
            </p>
            <div className="bg-gray-400 mx-auto w-16 h-px" />
          </div>

          <div className="space-y-10 w-full">
            <ul className="flex flex-col justify-center items-center space-y-6">
              {[t('point1'), t('point2'), t('point3'), t('point4')].map(
                (point, i) => (
                  <li key={i} className="group flex items-center gap-4">
                    <span className="bg-gray-300 group-hover:bg-gray-900 rounded-full w-2 h-2 transition-colors" />
                    <span className="font-light text-gray-800 text-xl md:text-2xl italic tracking-wide">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalLibrary;
