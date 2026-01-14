'use client';

import { useTranslations } from 'next-intl';

const Targets = () => {
  const t = useTranslations('Targets');

  const points = ['point1', 'point2', 'point3', 'point4', 'point5'];

  return (
    <section className="relative flex justify-center items-center w-full min-h-[600px] lg:min-h-[900px] overflow-hidden">
      <div
        className="z-0 absolute inset-0 bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')] bg-cover bg-no-repeat bg-center"
        aria-hidden="true"
      />

      <div className="z-10 absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      <div className="z-20 relative px-6 py-20 w-full max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="space-y-4 mb-16 lg:mb-24 text-center">
            <h3 className="font-light text-gray-900 text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.4em]">
              {t('title')}
            </h3>
            <div className="bg-gray-400 mx-auto w-20 h-px" />
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <div className="gap-y-16 grid grid-cols-1">
              {points.map((pointKey, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center space-y-4 text-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-200 group-hover:bg-gray-900 w-10 h-px transition-all duration-500" />
                    <span className="font-medium text-[10px] text-gray-400 group-hover:text-gray-900 uppercase tracking-[0.4em] transition-colors">
                      Target 0{index + 1}
                    </span>
                    <div className="bg-gray-200 group-hover:bg-gray-900 w-10 h-px transition-all duration-500" />
                  </div>

                  <p className="max-w-2xl font-light text-gray-700 group-hover:text-black text-xl md:text-2xl leading-relaxed tracking-wide transition-all duration-300">
                    {t(pointKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Targets;
