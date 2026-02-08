'use client';

import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectWithPagination } from '@features/landing/api/landingApi';
import { Locale } from '@features/i18n/routing';
import { ProjectsResponse } from '@features/landing/components/type';
import Pagination from '@features/projects/controller/primitive/Pagination';
import { useState } from 'react';

const SkeletonCard = () => (
  <div className="bg-slate-50 rounded-2xl h-[450px] animate-pulse">
    <div className="bg-slate-200 rounded-t-2xl h-2/3" />
    <div className="space-y-4 p-6">
      <div className="bg-slate-200 rounded w-1/4 h-6" />
      <div className="bg-slate-200 rounded w-full h-8" />
      <div className="bg-slate-200 rounded w-1/2 h-4" />
    </div>
  </div>
);

const AllProject = () => {
  const t = useTranslations('SeeAllProjects');
  const locale = useLocale() as Locale;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery<ProjectsResponse>({
    queryKey: ['projects', currentPage],
    queryFn: () => ProjectWithPagination(currentPage),
  });

  const projects = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="mx-auto px-4 py-16 max-w-[1440px]">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <p className="font-medium text-red-500 text-xl">
            შეცდომა მონაცემების ჩატვირთვისას
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-blue-600 underline"
          >
            თავიდან სცადეთ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className="mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24 w-full max-w-[1440px]">
        <div className="relative mb-16 pb-8 border-slate-200 border-b">
          <h1 className="mb-4 font-extrabold text-slate-900 text-4xl sm:text-6xl tracking-tight">
            {t('Projects')}
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg sm:text-xl leading-relaxed">
            {t('work')}
          </p>
          <div className="bottom-0 left-0 absolute bg-blue-600 w-24 h-1" />
        </div>
        <div className="min-h-[1170px]">
          <div className="gap-x-8 gap-y-12 grid grid-cols-1 md:grid-cols-2">
            {projects.map((project) => {
              const title =
                project.projectName[locale] ?? project.projectName.en;

              return (
                <Link
                  key={project._id}
                  href={`/${locale}/projects/${project._id}`}
                  className="group relative"
                >
                  <article className="relative flex flex-col bg-white shadow-sm hover:shadow-2xl border border-slate-100 rounded-3xl h-full overflow-hidden transition-all hover:-translate-y-2 duration-500 ease-out transform">
                    <div className="relative h-[300px] sm:h-[380px] overflow-hidden">
                      <Image
                        src={project.projectPicture}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="flex flex-col flex-grow p-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-blue-50 px-4 py-1.5 rounded-full font-semibold text-blue-700 text-xs uppercase tracking-wider">
                          {project.projectType}
                        </span>
                      </div>

                      <h2 className="mb-4 font-bold text-slate-900 group-hover:text-blue-600 text-2xl line-clamp-2 transition-colors duration-300">
                        {title}
                      </h2>

                      <div className="flex items-center mt-auto font-bold text-blue-600 text-sm">
                        <span className="mr-2 uppercase tracking-widest">
                          {t('see')}
                        </span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
        {data && (
          <Pagination
            currentPage={currentPage}
            totalPages={data.pagination?.totalPages ?? 1}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
        {projects.length === 0 && (
          <div className="flex flex-col items-center py-32 text-center">
            <div className="bg-slate-100 mb-4 p-6 rounded-full">
              <svg
                className="w-12 h-12 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="font-medium text-slate-500 text-xl italic">
              პროექტები არ მოიძებნა
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProject;
