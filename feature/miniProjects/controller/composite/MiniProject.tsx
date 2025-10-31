'use client';

import { useQuery } from '@tanstack/react-query';
import { MiniProjectById } from 'feature/landing/api/landingApi';
import Image from 'next/image';

type Props = {
  id: string;
};

export default function ProjectsDetail({ id }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', id],
    queryFn: () => MiniProjectById(id),
  });

  if (isLoading)
    return (
      <p className="mt-10 text-gray-500 text-center">Loading project...</p>
    );
  if (isError)
    return (
      <p className="mt-10 text-red-500 text-center">Error loading project</p>
    );

  const statusStyles: Record<string, string> = {
    'TO DO': 'bg-yellow-100 text-yellow-800 border border-yellow-400',
    'IN PROGRESS': 'bg-blue-100 text-blue-800 border border-blue-400',
    DONE: 'bg-green-100 text-green-800 border border-green-400',
  };

  return (
    <div className="flex flex-col mt-[60px] w-full">
      <div className="mx-auto p-6 w-full max-w-[1200px]">
        <div className="flex lg:flex-row flex-col gap-8 bg-white shadow-lg p-6 rounded-xl">
          <div className="relative flex-shrink-0 rounded-lg w-full lg:w-1/2 h-[400px] overflow-hidden">
            <Image
              src={data.projectPicture}
              alt={data.projectName['en']}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <p className="font-medium text-[18px] text-gray-500">
              Project Name:{' '}
              <span className="font-black text-black">
                {data.projectName['en']}
              </span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-500">Status:</span>
              <span
                className={`px-3 py-1 rounded-full font-semibold text-sm ${
                  statusStyles[data.projectType] || ''
                }`}
              >
                {data.projectType}
              </span>
            </div>
            <p className="font-medium text-[18px] text-gray-500">
              Project creator:{' '}
              {data.projectCreator.map((creator, i) => (
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
            {data.projectName['en']} Description
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            {data.projectDescription['en']}
          </p>
        </div>
      </div>
    </div>
  );
}
