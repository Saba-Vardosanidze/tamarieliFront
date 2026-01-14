'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const CinemaSounds = () => {
  const t = useTranslations('cinemaPlatform');

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
              src="/Images/headerImages/png/cinemaPlatform.png"
              alt="Cinema Platform Logo"
              width={180}
              height={180}
              className="opacity-100 w-24 lg:w-32 h-auto hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="font-light text-gray-900 text-3xl md:text-5xl uppercase tracking-[0.25em]">
              {t('title')} — {t('name')}
            </h2>
            <div className="bg-gray-400 mx-auto w-16 h-px" />
          </div>

          <div className="space-y-8 max-w-4xl">
            <p className="font-light text-gray-800 hover:text-black text-xl md:text-2xl italic leading-relaxed tracking-wide transition-colors duration-300">
              {t('description')}
            </p>
            <p className="font-light text-gray-800 text-xl md:text-2xl italic leading-relaxed tracking-wide">
              {t('mission')}
            </p>
            <p className="font-light text-gray-800 text-xl md:text-2xl italic leading-relaxed tracking-wide">
              {t('support')}
            </p>
            <p className="font-light text-gray-800 text-xl md:text-2xl italic leading-relaxed tracking-wide">
              {t('philosophy')}
            </p>
            <p className="font-light text-gray-800 text-xl md:text-2xl italic leading-relaxed tracking-wide">
              {t('space')}
            </p>

            <div className="pt-8">
              <p className="inline-block pt-8 border-gray-200 border-t font-medium text-gray-900 text-2xl md:text-3xl uppercase tracking-widest">
                {t('tagline')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemaSounds;
