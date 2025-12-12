'use client';
import { ProjectApi } from '@features/landing/api/landingApi';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const AllProject = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project'],
    queryFn: ProjectApi,
  });
  const locale = useLocale();
  const projects = data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="text-slate-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="text-red-600 text-lg">Error loading projects</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-2 font-bold text-slate-900 text-4xl sm:text-5xl">
            Projects
          </h1>
          <p className="text-slate-600 text-lg">Explore our latest work</p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {projects.map((card) => (
            <Link
              key={card._id}
              href={`/${locale}/projects/${card._id}`}
              className="group block"
            >
              <article className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300">
                <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                  <Image
                    src={card.projectPicture}
                    alt={card.projectName[locale]}
                    fill
                    className="group-hover:opacity-90 object-cover transition-opacity duration-300"
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
                    {card.projectName[locale]}
                  </h2>

                  <p className="font-medium text-blue-600 text-sm group-hover:underline">
                    View details →
                  </p>
                </div>
              </article>
            </Link>
          ))}
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
