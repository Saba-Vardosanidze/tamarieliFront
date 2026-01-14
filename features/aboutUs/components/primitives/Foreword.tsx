'use client';

import { useTranslations } from 'next-intl';

const Foreword = () => {
  const t = useTranslations('Foreword');

  return (
    <section className="relative flex justify-center items-center w-full min-h-[500px] md:min-h-[600px] lg:min-h-[800px] overflow-hidden">
      <div
        className="z-0 absolute inset-0 bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')] bg-cover bg-no-repeat bg-center"
        aria-hidden="true"
      />

      <div className="z-10 absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

      <div className="z-20 relative px-6 py-16 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-10 lg:space-y-14 text-center">
          <div className="space-y-4">
            <h3 className="font-light text-gray-900 text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.3em]">
              {t('title')}
            </h3>
            <div className="bg-gray-400 mx-auto w-16 h-[1px]" />
          </div>

          <div className="w-full">
            <ul className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-y-6 md:gap-x-12 lg:gap-x-20">
              {[t('point1'), t('point2'), t('point3')].map(
                (point, index, array) => (
                  <li key={index} className="group flex items-center">
                    <div className="flex md:flex-row flex-col items-center gap-4">
                      <span className="font-light text-gray-900 text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] transition-colors duration-300">
                        {point}
                      </span>

                      {index !== array.length - 1 && (
                        <div className="hidden md:block bg-gray-400/50 ml-12 lg:ml-20 w-px h-6" />
                      )}

                      {index !== array.length - 1 && (
                        <div className="md:hidden bg-gray-400 mt-2 rounded-full w-1 h-1" />
                      )}
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="opacity-30 pt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Foreword;
