'use client';

import { useState } from 'react';
import { getMiniProjectByProjectId } from '@features/landing/api/landingApi';
import { MiniProjectResponse } from '@features/type';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Pagination from './Pagination';
import { MiniProjectsSkeleton } from './MiniProjectsSkeleton';

type Props = {
  id: string;
  locale: string;
  t: (key: string) => string;
};

export default function ProjectMiniProjects({ id, locale, t }: Props) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery<MiniProjectResponse>({
    queryKey: ['project', id, page],
    queryFn: () => getMiniProjectByProjectId(id, page),
  });

  const miniProjects = data?.data;
  const pagination = data?.pagination;

  const lang = locale as 'en' | 'fr' | 'ka';

  if (isError) return <p>Error...</p>;

  return (
    <div className="flex flex-col gap-[20px]">
      {isLoading ? (
        <MiniProjectsSkeleton />
      ) : !miniProjects || miniProjects.length === 0 ? (
        <div>Something was wrong</div>
      ) : (
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((eachElement) => (
            <div
              key={eachElement._id}
              className="flex flex-col justify-between bg-white px-[10px] py-[10px] rounded-2xl"
            >
              <div className="flex flex-col">
                <div className="relative h-56">
                  <Image
                    src={eachElement.projectPicture}
                    alt={eachElement.projectName[lang]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col mt-[10px]">
                  <h4 className="font-bold text-black text-lg">
                    {eachElement.projectName[lang].length > 50
                      ? eachElement.projectName[lang].slice(0, 50) + '...'
                      : eachElement.projectName[lang]}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {eachElement.projectDescription[lang].length > 100
                      ? eachElement.projectDescription[lang].slice(0, 100) +
                        '...'
                      : eachElement.projectDescription[lang]}
                  </p>
                </div>
              </div>
              <Link
                href={`/${locale}/miniprojects/${eachElement._id}`}
                className="flex items-center gap-2 mt-4 text-blue-600"
              >
                {t('views')} <FaChevronRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      )}
      {pagination && (
        <Pagination
          currentPage={page}
          totalPages={pagination.totalPages}
          onPageChange={(newPage) => {
            setPage(newPage);
          }}
          hasNext={pagination.hasNext}
          hasPrev={pagination.hasPrev}
          firstPage={pagination.first}
          lastPage={pagination.last}
        />
      )}
    </div>
  );
}
