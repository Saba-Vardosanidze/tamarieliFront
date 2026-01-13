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
    if (window.innerWidth < 640) return 1.2;
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
    <div className="bg-[#fcfcfc] py-10 sm:py-20 overflow-hidden">
      <div className="flex justify-between items-center sm:items-end mx-auto mb-6 sm:mb-10 px-5 sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <div>
          <h2 className="font-bold text-gray-900 text-2xl sm:text-4xl tracking-tight">
            {title || 'Projects'}
          </h2>
          <div className="bg-blue-600 mt-1.5 rounded-full w-8 sm:w-12 h-1 sm:h-1.5" />
        </div>

        <Link
          href={`/${locale}/allProject`}
          className="group flex items-center gap-1.5 bg-white shadow-sm px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-200 rounded-full transition-all"
        >
          <span className="font-semibold text-gray-700 text-xs sm:text-sm">
            {t('text')}
          </span>
          <svg
            className="w-3.5 h-3.5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      <div className="relative w-full">
        <div
          ref={containerRef}
          className="relative touch-pan-y"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
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
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="group relative bg-gray-200 rounded-[1.5rem] sm:rounded-[2rem] h-[320px] sm:h-[450px] overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.projectPicture}
                        alt={card.projectName[locale]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      <div className="top-4 sm:top-6 left-4 sm:left-6 absolute">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 border border-white/30 rounded-full font-medium text-[10px] text-white sm:text-xs uppercase tracking-wider">
                          {card.projectType}
                        </span>
                      </div>
                    </div>

                    <div className="right-0 bottom-0 left-0 absolute p-5 sm:p-10 text-white">
                      <h3 className="mb-2 sm:mb-4 font-bold text-xl sm:text-4xl line-clamp-2 leading-snug tracking-tight">
                        {card.projectName[locale]}
                      </h3>

                      <div className="hidden sm:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                        <span className="font-medium text-blue-400 text-sm">
                          ნახვა
                        </span>
                        <div className="bg-blue-400 w-8 h-[1px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return enableLinks ? (
                <Link
                  href={`/${locale}/projects/${card._id}`}
                  key={`${card._id}-${index}`}
                  className="block"
                >
                  {content}
                </Link>
              ) : (
                <div key={`${card._id}-${index}`}>{content}</div>
              );
            })}
          </motion.div>
        </div>

        <div className="hidden sm:block top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-[#fcfcfc] to-transparent w-20 pointer-events-none" />
        <div className="hidden sm:block top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-[#fcfcfc] to-transparent w-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default InfiniteSlider;
