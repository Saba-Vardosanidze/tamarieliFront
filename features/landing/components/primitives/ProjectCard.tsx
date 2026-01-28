import Image from "next/image";
import Link from "next/link";
import { Project } from "../type";
import { useTranslations } from "next-intl";

type ProjectCardProps = {
  project: Project;
  locale: string;
  cardWidth: number;
  enableLinks: boolean;
  index: number;
};

export const ProjectCard = ({
  project,
  locale,
  cardWidth,
  enableLinks,
  index,
}: ProjectCardProps) => {
  const t = useTranslations("See");

  const cardContent = (
    <div className="group relative bg-gray-200 rounded-[1.5rem] sm:rounded-[2rem] h-[320px] sm:h-[450px] overflow-hidden transition-all duration-500">
      <div className="relative w-full h-full">
        <Image
          src={project.projectPicture}
          alt={project.projectName[locale] || ""}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="top-4 sm:top-6 left-4 sm:left-6 absolute">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 border border-white/30 rounded-full font-medium text-[10px] text-white sm:text-xs uppercase tracking-wider">
            {project.projectType}
          </span>
        </div>
      </div>

      <div className="right-0 bottom-0 left-0 absolute p-5 sm:p-10 text-white">
        <h3 className="mb-2 sm:mb-4 font-bold text-xl sm:text-4xl line-clamp-2 leading-snug tracking-tight">
          {project.projectName[locale]}
        </h3>
        <div className="hidden sm:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
          <span className="font-medium text-blue-400 text-sm">
            {t("title")}
          </span>
          <div className="bg-blue-400 w-8 h-[1px]" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex-shrink-0 px-2 sm:px-4"
      style={{ width: `${cardWidth}px` }}
    >
      {enableLinks ? (
        <Link href={`/${locale}/projects/${project._id}`} className="block">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};
