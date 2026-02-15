import { getMiniProjectByProjectId } from '@features/landing/api/landingApi';
import { MiniProject } from '@features/type';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  id: string;
  locale: string;
  t: (key: string) => string;
};

export default function ProjectMiniProjects({ id, locale, t }: Props) {
  const { data, isLoading, isError } = useQuery<MiniProject[]>({
    queryKey: ['project', id],
    queryFn: () => getMiniProjectByProjectId(id),
  });

  const lang = locale as 'en' | 'fr' | 'ka';

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!data || data.length === 0) {
    return <p className="text-gray-400 text-center">Something was wrong</p>;
  }

  return (
    <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
      {data.map((eachElement) => (
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
                  ? eachElement.projectDescription[lang].slice(0, 100) + '...'
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
  );
}
