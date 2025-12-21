"use client";

import { ProjectApi } from "@features/landing/api/landingApi";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Locale = "ka" | "en" | "ru";

type Project = {
  _id: string;
  projectPicture: string;
  projectType: string;
  projectName: {
    ka: string;
    en: string;
    ru?: string;
  };
};

const AllProject = () => {
  const t = useTranslations("SeeAllProjects");
  const locale = useLocale() as Locale;

  const { data, isLoading, isError } = useQuery<Project[]>({
    queryKey: ["project"],
    queryFn: ProjectApi,
  });

  const projects: Project[] = data ?? [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <p className="text-slate-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <p className="text-red-600 text-lg">Error loading projects</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-[1440px] w-full">
        <div className="mb-12">
          <h1 className="mb-2 font-bold text-slate-900 text-4xl sm:text-5xl">
            {t("Projects")}
          </h1>
          <p className="text-slate-600 text-lg">{t("work")}</p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {projects.map((card) => {
            const title = card.projectName[locale] ?? card.projectName.en;

            return (
              <Link
                key={card._id}
                href={`/${locale}/projects/${card._id}`}
                className="group block"
              >
                <article className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300">
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                    <Image
                      src={card.projectPicture}
                      alt={title}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 px-3 py-1 rounded-md font-medium text-blue-700 text-sm">
                        {card.projectType}
                      </span>
                    </div>

                    <h2 className="mb-2 font-bold text-slate-900 text-2xl line-clamp-2">
                      {title}
                    </h2>

                    <p className="font-medium text-blue-600 text-sm group-hover:underline">
                      View details →
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {projects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 text-lg">No projects available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProject;
