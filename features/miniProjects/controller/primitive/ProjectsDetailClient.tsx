'use client';

import { useQuery } from '@tanstack/react-query';
import { MiniProjectById } from 'features/landing/api/landingApi';
import { useLocale, useTranslations } from 'next-intl';
import MiniProjectSkeleton from './MiniProjectSkeleton';
import MiniProjectHeader from './MiniProjectHeader';
import MiniProjectContent from './MiniProjectContent';
import { LocaleKey, MiniProject } from '@features/miniProjects/type';

type Props = {
  id: string;
};

export default function ProjectsDetailClient({ id }: Props) {
  const locale = useLocale() as LocaleKey;
  const t = useTranslations('ProjectsDetail');

  const { data, isLoading, isError } = useQuery<MiniProject>({
    queryKey: ['project', id],
    queryFn: () => MiniProjectById(id),
  });

  if (isLoading) return <MiniProjectSkeleton />;

  if (isError || !data)
    return (
      <div className="flex justify-center items-center min-h-screen font-bold text-red-500">
        {t('error')}
      </div>
    );

  const statusStyles: Record<MiniProject['projectType'], string> = {
    TODO: 'bg-amber-100 text-amber-700 border border-amber-200',
    INPROGRESS: 'bg-blue-100 text-blue-700 border border-blue-200',
    DONE: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    ONGOING: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
  };

  return (
    <div className="bg-gray-50 pt-[80px] pb-20 w-full min-h-screen">
      <div className="space-y-8 mx-auto px-6 px-6 sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <MiniProjectHeader
          data={data}
          locale={locale}
          t={t}
          statusStyles={statusStyles}
        />
        <MiniProjectContent data={data} locale={locale} t={t} />
      </div>
    </div>
  );
}
