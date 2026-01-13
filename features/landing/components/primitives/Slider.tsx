'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ProjectApi } from 'features/landing/api/landingApi';
import { useLocale, useTranslations } from 'next-intl';

type InfiniteSliderProps = {
  title?: string;
  direction?: 'left' | 'right';
  speed?: number;
  enableLinks?: boolean;
};

const InfiniteSlider = ({
  title,
  direction = 'left',
  speed = 50,
  enableLinks = false,
}: InfiniteSliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = useTranslations('SeeAllBtn');

  const { data } = useQuery({
    queryKey: ['project'],
    queryFn: ProjectApi,
  });

  const projects = data || [];
  const sliderCards = [...projects, ...projects];

  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 2;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const cardWidth = containerWidth / cardsPerView;
  const singleSetWidth = cardWidth * projects.length;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setCardsPerView(getCardsPerView());
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused || singleSetWidth === 0) return;

    const moveBy = (delta / 1000) * speed;
    let newX = x.get();

    if (direction === 'left') {
      newX -= moveBy;
      if (newX <= -singleSetWidth) newX += singleSetWidth;
    } else {
      newX += moveBy;
      if (newX >= 0) newX -= singleSetWidth;
    }

    x.set(newX);
  });

  useEffect(() => {
    if (direction === 'right' && singleSetWidth > 0) {
      x.set(-singleSetWidth);
    }
  }, [direction, singleSetWidth, x]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const locale = useLocale();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-6 sm:py-10">
      <div className="flex justify-between items-center mx-auto mb-6 px-4 sm:px-8 lg:px-16 w-full max-w-[1440px]">
        <div className="flex-1"></div>
        <Link
          href="/ka/allProject"
          className="group relative flex justify-center items-center bg-gradient-to-r from-blue-200 hover:from-blue-400 via-blue-300 hover:via-blue-500 to-blue-200 hover:to-blue-400 shadow-md hover:shadow-xl px-6 py-3 rounded-xl h-[44px] overflow-hidden font-semibold text-gray-800 text-sm hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform translate-x-[-200%] group-hover:translate-x-[200%] duration-700"></span>
          <span className="z-10 relative group-hover:text-white transition-colors duration-300">
            {t('text')}
          </span>
        </Link>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full max-w-[1440px]">
        <div className="mx-auto max-w-7xl">
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="flex"
              style={{
                x,
                width: `${cardWidth * sliderCards.length}px`,
              }}
            >
              {sliderCards.map((card, index) => {
                const content = (
                  <div
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <div className="group relative shadow-lg sm:shadow-2xl hover:shadow-blue-500/20 rounded-2xl h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] overflow-hidden hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                      <Link href={`/${locale}/projects/${card._id}`}>
                        <div className="relative w-full h-full">
                          <Image
                            src={card.projectPicture}
                            alt={card.projectName[locale]}
                            fill
                            className="object-center object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="
                              (max-width: 640px) 100vw,
                              (max-width: 1024px) 50vw,
                              50vw
                            "
                            priority={index < 4}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 group-hover:from-blue-500/10 to-purple-500/0 group-hover:to-purple-500/10 transition-all duration-500" />
                        </div>

                        <div className="right-0 bottom-0 left-0 absolute p-4 sm:p-5 md:p-6 lg:p-7 text-white transition-transform translate-y-0 group-hover:translate-y-[-8px] duration-500 transform">
                          <h3 className="mb-2 sm:mb-3 font-bold group-hover:text-blue-300 text-lg sm:text-xl md:text-2xl lg:text-3xl line-clamp-2 tracking-tight transition-colors duration-300">
                            {card.projectName[locale]}
                          </h3>

                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-white/25 group-hover:bg-blue-500/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 group-hover:border-blue-400/40 rounded-full font-medium text-xs sm:text-sm transition-all duration-300">
                              {card.projectType}
                            </span>
                            <div className="bg-gradient-to-r from-transparent via-blue-400 to-transparent w-0 group-hover:w-12 h-0.5 transition-all duration-500"></div>
                          </div>
                        </div>

                        <div className="top-4 right-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-white/20 backdrop-blur-md p-2 border border-white/30 rounded-full">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );

                return enableLinks ? (
                  <Link
                    href={`/projects/${card._id}`}
                    key={`${card._id}-${index}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={`${card._id}-${index}`}>{content}</div>
                );
              })}
            </motion.div>

            <div className="top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent w-16 sm:w-24 lg:w-32 pointer-events-none" />
            <div className="top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-white via-white/80 to-transparent w-16 sm:w-24 lg:w-32 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
