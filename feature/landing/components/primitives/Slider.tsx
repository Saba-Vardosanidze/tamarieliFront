'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ProjectApi } from 'feature/landing/api/landingApi';

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

  const { data } = useQuery({
    queryKey: ['project'],
    queryFn: ProjectApi,
  });

  const projects = data || [];

  const sliderCards = [...projects, ...projects];

  const cardWidth = containerWidth / 2;
  const singleSetWidth = cardWidth * projects.length;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
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
      if (newX <= -singleSetWidth) {
        newX = newX + singleSetWidth;
      }
    } else {
      newX += moveBy;
      if (newX >= 0) {
        newX = newX - singleSetWidth;
      }
    }

    x.set(newX);
  });

  useEffect(() => {
    if (direction === 'right' && singleSetWidth > 0) {
      x.set(-singleSetWidth);
    }
  }, [direction, singleSetWidth, x]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="bg-[#E0E0E0E0] py-5">
      <div className="mx-auto px-4 py-8 w-full max-w-[1440px]">
        <div className="mx-auto max-w-7xl">
          {title && (
            <h2 className="mb-8 font-bold text-gray-800 text-3xl text-center">
              {title}
            </h2>
          )}

          <div
            ref={containerRef}
            className="relative overflow-hidden"
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
                    className="flex-shrink-0 px-3"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <div className="group relative shadow-2xl rounded-xl h-[300px] overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                      <Link href={`/projects/${card._id}`}>
                        <Image
                          src={card.projectPicture}
                          alt={card.projectName}
                          fill
                          className="object-center object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="right-0 bottom-0 left-0 absolute p-6 text-white">
                          <h3 className="mb-2 font-bold text-2xl">
                            {card.projectName}
                          </h3>
                          <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                            {card.projectType}
                          </span>
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

            <div className="top-0 bottom-0 left-0 absolute bg-gradient-to-r from-[#E0E0E0E0] to-transparent w-20 pointer-events-none" />
            <div className="top-0 right-0 bottom-0 absolute bg-gradient-to-l from-[#E0E0E0E0] to-transparent w-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
