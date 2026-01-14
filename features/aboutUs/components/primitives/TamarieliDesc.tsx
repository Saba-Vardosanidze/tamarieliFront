'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TamarieliDesc = () => {
  const t = useTranslations('TamarieliDesc');

  return (
    <section className="relative flex justify-center items-center py-24 lg:py-32 w-full min-h-screen overflow-hidden">
      {/* მთავარი ფონი */}
      <div className="z-0 absolute inset-0">
        <Image
          src="/Images/headerImages/png/newAboutUsBg.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* თეთრი ნახევრადგამჭვირვალე ფენა ტექსტის კითხვადობისთვის */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-5xl">
        {/* ლოგო */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="relative bg-white/50 shadow-sm backdrop-blur-md p-4 border border-white/20 rounded-full">
            <Image
              src="/Images/headerImages/png/tamarieliLogo.png"
              alt="logo"
              width={180}
              height={180}
              className="opacity-100 w-28 lg:w-40 h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* კონტენტი */}
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="font-light text-gray-900 text-3xl md:text-5xl uppercase tracking-[0.25em]">
              {t('title')}
            </h2>
            <div className="bg-gray-400 mx-auto w-16 h-px" />
          </div>

          <div className="space-y-10 max-w-3xl">
            {/* პარაგრაფი */}
            <p className="drop-shadow-sm font-light text-gray-800 text-xl md:text-2xl italic leading-relaxed">
              "{t('paragraph')}"
            </p>

            {/* სია */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-6 md:gap-12 pt-8">
              {[t('list.inspiration'), t('list.identity')].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/40 shadow-sm backdrop-blur-sm px-6 py-2 border border-white/40 rounded-full"
                >
                  <span className="font-bold text-[8px] text-gray-500 uppercase tracking-widest">
                    ●
                  </span>
                  <span className="font-medium text-gray-900 text-sm md:text-base uppercase tracking-[0.2em]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TamarieliDesc;
