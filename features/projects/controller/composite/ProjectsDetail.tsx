'use client';

import { useQuery } from '@tanstack/react-query';
import { ProjectById } from 'features/landing/api/landingApi';
import { Buttons } from 'features/projects/data/projectData';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

type Props = {
  id: string;
};

export default function ProjectsDetail({ id }: Props) {
  const locale = useLocale();
  const t = useTranslations('ProjectsDetail');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const type = searchParams.get('type') || '';
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', id, type],
    queryFn: () => ProjectById(id, type),
  });
  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', type);
    router.push(`${pathname}?${params.toString()}`);
  };
  if (isLoading)
    return <p className="mt-10 text-gray-500 text-center">{t('loading')}</p>;
  if (isError)
    return <p className="mt-10 text-red-500 text-center">{t('error')}</p>;

  const statusStyles: Record<string, string> = {
    TODO: 'bg-yellow-100 text-yellow-800 border-b border-yellow-400',
    INPROGRESS: 'bg-blue-100 text-blue-800 border-b border-blue-400',
    DONE: 'bg-green-100 text-green-800 border-b border-green-400',
  };

  return (
    <div className="flex flex-col mt-[60px] w-full">
      <div className="mx-auto p-6 w-full max-w-[1200px]">
        <div className="flex lg:flex-row flex-col gap-8 bg-white shadow-lg p-6 rounded-xl">
          <div className="relative flex-shrink-0 rounded-lg w-full lg:w-1/2 h-[400px] overflow-hidden">
            <Image
              src={data.projectPicture}
              alt={data.projectName[locale || 'en']}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <p className="font-medium text-[18px] text-gray-500">
              {t('projectName')}
              <span className="font-black text-black">
                {data.projectName[locale || 'en']}
              </span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-500">{t('status')}</span>
              <span
                className={`px-3 py-1 rounded-full font-semibold text-sm ${
                  statusStyles[data.projectType] || ''
                }`}
              >
                {data.projectType}
              </span>
            </div>
            <p className="font-medium text-[18px] text-gray-500">
              {t('projectCreator')}
              {data.projectCreator.map((creator: string, i: number) => (
                <span key={i} className="mr-1 text-black">
                  {creator}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto p-6 w-full max-w-[1200px]">
        <div className="flex flex-col gap-8 bg-white shadow-lg p-6 rounded-xl">
          <p className="font-black text-[24px] text-black">
            {t('description')}
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            {data.projectDescription[locale || 'en']}
          </p>
          <div className="flex flex-col gap-[20px]">
            {data.pdfLink && (
              <div className="flex items-center gap-[5px]">
                <FaFilePdf className="text-blue-500" />
                <Link href={data.pdfLink}>
                  <p className="text-[11px] text-blue-500">show PDF</p>
                </Link>
              </div>
            )}
            {data.wordLink && (
              <div className="flex gap-[10px]">
                <FaFileWord className="text-blue-500" />
                <Link href={data.wordLink}>
                  <p className="text-[11px] text-blue-500">show WORD</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {data.miniProjects && (
        <div className="space-y-[50px] mx-auto mt-10 p-6 w-full max-w-[1200px]">
          <div className="flex lg:flex-row flex-col justify-between w-full">
            <p className="mb-6 font-black text-[24px] text-black">
              <span>{data.projectName['en']} </span>
              {t('project')}
            </p>
            <div className="flex gap-[10px]">
              {Buttons.map((button) => (
                <button
                  onClick={() => handleTypeChange(button.type)}
                  className={`px-[10px] h-[40px] cursor-pointer rounded-[10px] text-[12px] ${button.class}`}
                  key={button.id}
                >
                  {button.name}
                </button>
              ))}
              {data._id === '690cc1799a4451b6543a13e3' && (
                <Link
                  href={`/${locale || 'en'}/books`}
                  className="flex justify-center items-center bg-white px-[10px] border-black border-b rounded-[10px] h-[40px] text-[11px] text-black lg:text-[16px]"
                >
                  {t('digitalLibrary')}
                </Link>
              )}
            </div>
          </div>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.miniProjects.map((mini: any) => (
              <div
                key={mini._id}
                className="flex flex-col gap-4 bg-white shadow-lg p-4 rounded-xl"
              >
                <div className="relative rounded-lg w-full h-48 overflow-hidden">
                  <Image
                    src={mini.projectPicture}
                    alt={mini.projectName[locale || 'en']}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-bold text-black text-lg">
                  {mini.projectName[locale || 'en']}
                </p>
                <p className="text-gray-700 text-sm">
                  {mini.projectDescription.length > 200
                    ? mini.projectDescription.slice(0, 200) + '...'
                    : mini.projectDescription[locale || 'en']}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`self-start px-3 py-1 rounded-full font-semibold text-sm ${
                      statusStyles[mini.projectType] || ''
                    }`}
                  >
                    {mini.projectType}
                  </span>
                  <Link
                    href={`/${locale}/miniprojects/${mini._id}`}
                    className="text-[14px] text-black cursor-pointer"
                  >
                    {t('views')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
