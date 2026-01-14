'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';

import { ProjectApi } from 'features/landing/api/landingApi';
import { SkeletonHeader } from './SkeletonHeader';
import { SkeletonCard } from './SkeletonCard';
import { ProjectCard } from './ProjectCard';
import { InfiniteSliderProps, Project } from '../type';
import Link from 'next/link';

const InfiniteSlider = ({
  title,
  direction = 'left',
  speed = 50,
  enableLinks = true,
}: InfiniteSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = useTranslations('SeeAllBtn');
  const locale = useLocale();

  const { data, isLoading } = useQuery<Project[]>({
    queryKey: ['project'],
    queryFn: ProjectApi,
  });

  const projects = data ?? [];
  const sliderCards = [...projects, ...projects];

  const getCardsPerView = (): number => {
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

  useAnimationFrame((_, delta) => {
    if (isPaused || isLoading || singleSetWidth === 0) return;

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

  if (isLoading) {
    return (
      <div id="project" className="bg-[#f4f7fa] py-10 sm:py-20 overflow-hidden">
        <SkeletonHeader />
        <div className="relative w-full">
          <div ref={containerRef} className="relative">
            <div className="flex">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} cardWidth={cardWidth} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="project" className="bg-[#f4f7fa] py-10 sm:py-20 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center sm:items-end mx-auto mb-6 sm:mb-10 px-5 sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <div>
          <h2 className="font-bold text-gray-900 text-2xl sm:text-4xl tracking-tight">
            {title || 'Projects'}
          </h2>
          <div className="bg-blue-600 mt-1.5 rounded-full w-8 sm:w-12 h-1 sm:h-1.5" />
        </div>

        <Link
          href={`/${locale}/allProject`}
          className="group flex items-center gap-1.5 bg-white hover:bg-gray-50 shadow-sm px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-200 rounded-full transition-all"
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
            style={{ x, width: `${cardWidth * sliderCards.length}px` }}
          >
            {sliderCards.map((project, index) => (
              <ProjectCard
                key={`${project._id}-${index}`}
                project={project}
                locale={locale}
                cardWidth={cardWidth}
                enableLinks={enableLinks}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        <div className="hidden sm:block top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-[#f4f7fa] to-transparent w-20 pointer-events-none" />
        <div className="hidden sm:block top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-[#f4f7fa] to-transparent w-20 pointer-events-none" />
      </div>
    </div>
  );
};

export default InfiniteSlider;
