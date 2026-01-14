'use client';

import { useTranslations } from 'next-intl';

const SocialResponsibility = () => {
  const t = useTranslations('SocialResponsibility');
  const points = ['point1', 'point2', 'point3', 'point4'];

  return (
    <section className="relative flex justify-center items-center w-full min-h-[600px] lg:min-h-[1000px] overflow-hidden">
      <div
        className="z-0 absolute inset-0 bg-[url('/Images/headerImages/png/newAboutUsBg.jpeg')] bg-cover bg-no-repeat bg-center"
        aria-hidden="true"
      />

      <div className="z-10 absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      <div className="z-20 relative px-6 py-20 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <header className="space-y-4 mb-16 lg:mb-24 text-center">
            <h3 className="font-light text-gray-900 text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.4em]">
              {t('title')}
            </h3>
            <div className="bg-gray-400 mx-auto w-16 h-px" />
          </header>

          <ul className="flex flex-col space-y-12 w-full">
            {points.map((pointKey, index) => (
              <li
                key={index}
                className="group relative flex flex-col items-center lg:items-start space-y-3"
              >
                {index !== points.length - 1 && (
                  <div className="hidden lg:block top-8 left-[7px] absolute bg-gray-200 group-hover:bg-gray-900 w-px h-16 transition-colors duration-500" />
                )}

                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-white shadow-sm border border-gray-300 group-hover:border-gray-900 rounded-full w-3.5 h-3.5 transition-all duration-300">
                    <div className="bg-gray-300 group-hover:bg-gray-900 rounded-full w-1.5 h-1.5 transition-all duration-300" />
                  </div>

                  <span className="font-bold text-[10px] text-gray-400 uppercase tracking-[0.3em]">
                    0{index + 1}
                  </span>
                </div>

                <div className="lg:pl-8">
                  <p className="font-light text-gray-700 group-hover:text-black text-lg md:text-xl lg:text-left text-center leading-relaxed tracking-wide transition-all duration-300">
                    {t(pointKey)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;
