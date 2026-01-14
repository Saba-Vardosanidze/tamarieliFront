import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  items: any[];
  locale: string;
  t: (key: string) => string;
  statusStyles: Record<string, string>;
};

export default function ProjectMiniProjects({
  items,
  locale,
  t,
  statusStyles,
}: Props) {
  if (!items.length) {
    return <p className="text-gray-400 text-center">{t('noResult')}</p>;
  }

  return (
    <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
      {items.map((mini) => (
        <div key={mini._id} className="bg-white rounded-2xl overflow-hidden">
          <div className="relative h-56">
            <Image
              src={mini.projectPicture}
              alt={mini.projectName[locale]}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h4 className="font-bold text-lg">{mini.projectName[locale]}</h4>
            <p className="text-gray-500 text-sm line-clamp-3">
              {mini.projectDescription[locale]}
            </p>

            <Link
              href={`/${locale}/miniprojects/${mini._id}`}
              className="flex items-center gap-2 mt-4 text-blue-600"
            >
              {t('views')} <FaChevronRight size={12} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
