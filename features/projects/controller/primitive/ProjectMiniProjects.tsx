import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import defaultProjectPicture from '../../../../public/Images/project/png/photoNotLoaded.webp';
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
    return <p className="text-gray-400 text-center">someting was wrong</p>;
  }

  return (
    <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
      {items.map((mini) => (
        <div
          key={mini._id}
          className="flex flex-col justify-between bg-white px-[10px] py-[10px] rounded-2xl"
        >
          <div className="flex flex-col">
            <div className="relative h-56">
              <Image
                src={mini.projectPicture || defaultProjectPicture}
                alt={mini.projectName[locale]}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col mt-[10px]">
              <h4 className="font-bold text-black text-lg">
                {mini.projectName[locale].length > 50
                  ? mini.projectName[locale].slice(0, 50) + '...'
                  : mini.projectName[locale]}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {mini.projectDescription[locale].length > 100
                  ? mini.projectDescription[locale].slice(0, 100) + '...'
                  : mini.projectDescription[locale]}
              </p>
            </div>
          </div>
          <Link
            href={`/${locale}/miniprojects/${mini._id}`}
            className="flex items-center gap-2 mt-4 text-blue-600"
          >
            {t('views')} <FaChevronRight size={12} />
          </Link>
        </div>
      ))}
    </div>
  );
}
