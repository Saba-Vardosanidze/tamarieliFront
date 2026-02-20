'use client';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Project, ProjectName } from '@features/landing/api/type';
import { useLocale } from 'next-intl';

type Props = {
  project: Project;
  pathName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchedProject = ({ project, pathName, setIsOpen }: Props) => {
  const locale = useLocale() as keyof ProjectName;

  return (
    <div className="mx-auto w-full">
      <div className="group flex sm:flex-row flex-col gap-5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-4 border border-gray-100 rounded-2xl transition-all duration-300">
        <div className="relative rounded-xl w-full sm:w-40 h-40 sm:h-28 overflow-hidden shrink-0">
          <Image
            src={project.projectPicture}
            alt={project.projectName?.[locale || 'en']}
            fill
            className="object-cover transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-between py-0.5 w-full">
          <div className="flex justify-between items-start gap-2 w-full">
            <div className="w-full overflow-hidden">
              <h3 className="mb-1 font-NotoSansGeorgian font-bold text-gray-900 text-base line-clamp-1">
                {project.projectName?.[locale || 'en']}
              </h3>
              <p className="font-NotoSansGeorgian text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
                {project.projectDescription?.[locale || 'en']}
              </p>
            </div>
            <Link
              onClick={() => setIsOpen(false)}
              href={`/${locale}/${pathName}/${project._id}`}
              className="pt-1 text-gray-400 hover:text-blue-600 transition-colors shrink-0"
            >
              <div className="flex justify-center items-center w-[40px] h-[40px]">
                <ExternalLink size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedProject;
