'use client';

import Image from 'next/image';
import banner from '../../../../public/Images/headerImages/png/realHero.webp';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-[#fcfcfc] pt-10 sm:pt-0 w-full min-h-[500px] lg:min-h-[850px] overflow-hidden">
      <div className="mx-auto px-6 sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <div className="flex lg:flex-row flex-col items-center gap-12 lg:gap-20">
          <div className="z-10 flex-1 lg:text-left text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-extrabold text-gray-900 text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tighter">
                Modern <span className="text-blue-600">Spaces</span> <br />
                Built Better.
              </h1>
              <p className="mx-auto lg:mx-0 max-w-lg text-gray-500 text-lg sm:text-xl">
                ჩვენ ვქმნით პროექტებს, რომლებიც აერთიანებს ინოვაციას, ხარისხს და
                დახვეწილ დიზაინს.
              </p>

              <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 shadow-blue-200 shadow-xl px-8 py-4 rounded-full font-bold text-white active:scale-95 transition-all">
                  დაათვალიერე პროექტები
                </button>
                <button className="hover:bg-white hover:shadow-md px-8 py-4 border border-gray-200 rounded-full font-bold text-gray-700 transition-all">
                  ჩვენს შესახებ
                </button>
              </div>
            </motion.div>
          </div>

          <div className="relative flex-1 w-full h-[400px] sm:h-[500px] lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <div className="z-10 relative shadow-2xl rounded-[2.5rem] sm:rounded-[4rem] w-full h-full overflow-hidden">
                <Image
                  src={banner}
                  alt="Hero Banner"
                  fill
                  priority
                  className="object-center object-cover hover:scale-105 transition-transform duration-1000 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
              </div>

              <div className="-top-10 -right-10 -z-10 absolute bg-blue-100 opacity-60 blur-3xl rounded-full w-64 h-64" />
              <div className="-bottom-10 -left-10 -z-10 absolute bg-purple-100 opacity-60 blur-3xl rounded-full w-64 h-64" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="hidden sm:block -right-6 -bottom-6 sm:bottom-12 sm:-left-12 z-20 absolute bg-white/80 shadow-xl backdrop-blur-lg p-6 border border-white/20 rounded-2xl"
              >
                <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">
                  Completed Projects
                </p>
                <p className="font-black text-gray-900 text-3xl">150+</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
