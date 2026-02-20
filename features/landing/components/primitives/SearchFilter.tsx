'use client';
import { SlidersHorizontal } from 'lucide-react';
import CountryList from './FlagsComponent';
import CategorySelect from './GenreComponent';
import { useTranslations } from 'next-intl';
import SearchedProject from './SearchedProject';
import { SearchApi } from '@features/landing/api/landingApi';
import { useQuery } from '@tanstack/react-query';

type SearchFilterProps = {
  projectName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchFilter = ({ projectName, setIsOpen }: SearchFilterProps) => {
  const t = useTranslations('SearchFilter');

  const { data: results, isLoading: loading } = useQuery({
    queryKey: ['search-projects', projectName],
    queryFn: () => SearchApi({ projectName }),
    enabled: !!projectName,
    staleTime: 1000 * 60,
  });

  return (
    <div className="flex justify-center items-center mt-4 w-full">
      <div className="flex flex-col gap-6 sm:gap-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 sm:p-8 border-none rounded-2xl w-full max-w-[850px]">
        <div className="flex justify-center items-center gap-2 text-gray-800">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h2 className="font-NotoSansGeorgian font-bold text-lg sm:text-xl tracking-tight">
            {t('title')}
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto w-full max-w-[850px]">
          <div className="flex flex-col items-start w-full sm:w-auto">
            <p className="mb-2 px-1 font-bold text-[11px] text-gray-400 uppercase tracking-widest">
              {t('countryLabel')}
            </p>
            <div className="w-full sm:w-72">
              <CountryList />
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-auto">
            <p className="mb-2 px-1 font-bold text-[11px] text-gray-400 uppercase tracking-widest">
              {t('genreLabel')}
            </p>
            <div className="w-full sm:w-72">
              <CategorySelect />
            </div>
          </div>
        </div>

        {loading && (
          <p className="text-gray-400 text-sm text-center">იძებნება...</p>
        )}

        {!loading && results && results.total === 0 && (
          <p className="font-NotoSansGeorgian text-gray-400 text-sm text-center">
            პროექტი ვერ მოიძებნა
          </p>
        )}

        {!loading && results && results.total > 0 && (
          <div className="flex flex-col gap-4 rounded-2xl max-h-[300px] overflow-hidden overflow-y-auto custom-scrollbar">
            {results.data.projects.map((project) => (
              <SearchedProject
                key={project._id}
                project={project}
                setIsOpen={setIsOpen}
                pathName={'projects'}
              />
            ))}
            {results.data.miniProjects.map((project) => (
              <SearchedProject
                key={project._id}
                project={project}
                setIsOpen={setIsOpen}
                pathName={'miniprojects'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
