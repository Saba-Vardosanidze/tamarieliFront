'use client';

import Image from 'next/image';
import banner from '../../../../public/Images/headerImages/png/realHero.webp';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const HeroSection = () => {
  const locale = useLocale();
  const t = useTranslations('hero');

  return (
    <section className="relative flex items-center bg-[#f4f7fa] py-12 lg:py-0 w-full min-h-screen lg:min-h-[850px] overflow-hidden">
      <div className="mx-auto px-5 sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <div className="flex lg:flex-row flex-col items-center gap-12 lg:gap-20">
          <div className="z-10 flex-1 order-2 lg:order-1 lg:text-left text-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="flex lg:flex-row flex-col gap-[3px] font-extrabold text-gray-900 lg:text-[33px] text-4xl sm:text-6xl leading-[1.2] lg:leading-[1.1] tracking-tighter">
                {t('titleLine1')}
                <br className="hidden sm:block" />
                <span className="text-blue-600">{t('titleHighlight')}</span>
              </h1>

              <p className="mx-auto lg:mx-0 max-w-lg text-gray-500 text-lg sm:text-xl leading-relaxed">
                {t('description')}
              </p>

              <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 pt-4">
                <Link href="#project">
                  <button className="bg-blue-600 hover:bg-blue-700 shadow-blue-200 shadow-lg px-8 py-4 rounded-full font-bold text-white text-base active:scale-95 transition-all cursor-pointer">
                    {t('projects')}
                  </button>
                </Link>

                <Link href={`/${locale}/aboutUs`}>
                  <button className="hover:bg-white hover:shadow-md px-8 py-4 border border-gray-200 rounded-full font-bold text-gray-700 text-base transition-all cursor-pointer">
                    {t('about')}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex-1 order-1 lg:order-2 w-full">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-square sm:aspect-video lg:aspect-square">
              <div className="z-10 relative shadow-2xl border-4 border-white rounded-[2.5rem] sm:rounded-[4rem] w-full h-full overflow-hidden">
                <Image
                  src={banner}
                  alt="Hero Banner"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="-top-10 -right-10 -z-10 absolute bg-blue-200 opacity-40 blur-3xl rounded-full w-48 sm:w-72 h-48 sm:h-72" />
              <div className="-bottom-10 -left-10 -z-10 absolute bg-purple-200 opacity-40 blur-3xl rounded-full w-48 sm:w-72 h-48 sm:h-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
