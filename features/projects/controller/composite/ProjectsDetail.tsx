'use client';

import { useQuery } from '@tanstack/react-query';
import { ProjectById } from 'features/landing/api/landingApi';
import { Buttons } from 'features/projects/data/projectData';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import ProjectBreadcrumb from '../primitive/ProjectBreadcrumb';
import ProjectHero from '../primitive/ProjectHero';
import ProjectDescription from '../primitive/ProjectDescription';
import ProjectResources from '../primitive/ProjectResources';
import ProjectFilter from '../primitive/ProjectFilter';
import ProjectMiniProjects from '../primitive/ProjectMiniProjects';
import { ProjectsSkeleton } from '../primitive/ProjectsSkeleton';

type Props = {
  id: string;
};

export default function ProjectsDetail({ id }: Props) {
  const locale = useLocale();
  const t = useTranslations('ProjectsDetail');

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const type = params.get('type') || '';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', id, type],
    queryFn: () => ProjectById(id, type),
  });

  const statusStyles: Record<string, string> = {
    TODO: 'bg-amber-100 text-amber-700 border border-amber-200',
    INPROGRESS: 'bg-blue-100 text-blue-700 border border-blue-200',
    DONE: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    ONGOING: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
  };

  const handleTypeChange = (type: string) => {
    const p = new URLSearchParams(params.toString());
    p.set('type', type);
    router.push(`${pathname}?${p.toString()}`, { scroll: false });
  };

  if (isLoading) return <ProjectsSkeleton />;

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center min-h-screen font-bold text-red-500">
        {t('error')}
      </div>
    );
  }

  return (
    <div className="bg-[#f4f7fa] px-6 lg:px-[0px] pt-[80px] pb-20 min-h-screen">
      <div className="mx-auto mb-6 sm:px-12 lg:px-20 max-w-[1440px]">
        <ProjectBreadcrumb title={data.projectName?.[locale || 'en']} />
      </div>

      <div className="space-y-8 mx-auto sm:px-12 lg:px-20 w-full max-w-[1440px]">
        <ProjectHero
          data={data}
          locale={locale}
          t={t}
          statusStyles={statusStyles}
        />

        <section className="gap-8 grid lg:grid-cols-3">
          <ProjectDescription
            title={t('description')}
            description={data.projectDescription?.[locale || 'en']}
          />

          <ProjectResources
            pdf={data.pdfLink}
            fb={data.fbLink}
            site={data.partnerSiteLink}
            word={data.wordLink}
          />
        </section>

        <ProjectFilter
          buttons={Buttons}
          activeType={type}
          onChange={handleTypeChange}
          showLibrary={data._id === '690cc1799a4451b6543a13e3'}
          locale={locale}
          t={t}
        />

        <ProjectMiniProjects
          items={data.miniProjects}
          locale={locale}
          t={t}
          statusStyles={statusStyles}
        />
      </div>
    </div>
  );
}
