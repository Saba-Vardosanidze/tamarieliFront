'use client';
import { useQuery } from '@tanstack/react-query';
import { BooksApi } from 'features/landing/api/landingApi';
import Image from 'next/image';
import BookEnams, { FilterParams } from './BookEnams';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const AllBooks = () => {
  const locale = useLocale();
  const t = useTranslations('AllBooks');
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterParams>({
    lang: locale || 'ka',
  });

  // URL პარამეტრებიდან ფილტრების წაკითხვა
  useEffect(() => {
    const newFilters: FilterParams = {
      lang: locale || 'ka',
    };

    if (searchParams.get('genre'))
      newFilters.genre = searchParams.get('genre')!;
    if (searchParams.get('subGenre'))
      newFilters.subGenre = searchParams.get('subGenre')!;
    if (searchParams.get('literaryMovement'))
      newFilters.literaryMovement = searchParams.get('literaryMovement')!;
    if (searchParams.get('themes'))
      newFilters.themes = searchParams.get('themes')!;
    if (searchParams.get('author'))
      newFilters.author = searchParams.get('author')!;
    if (searchParams.get('ageCategory'))
      newFilters.ageCategory = searchParams.get('ageCategory')!;

    setFilters(newFilters);
  }, [searchParams, locale]);

  // ენის ცვლილებისას ფილტრების განახლება
  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      lang: locale || 'ka',
    }));
  }, [locale]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['book', filters],
    queryFn: () => BooksApi(filters),
  });

  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters({
      ...newFilters,
      lang: locale || 'ka',
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[400px] text-gray-500 text-lg">
        <div className="animate-pulse">{t('loading')}</div>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500 text-lg">
        {t('error')}
      </div>
    );

  return (
    <div className="flex lg:flex-row flex-col py-[50px] w-full max-w-[1440px] h-full">
      <BookEnams onFilterChange={handleFilterChange} />
      <div className="flex flex-col gap-6 m-auto px-[15px] w-full max-w-[1140px]">
        <div className="text-gray-600 text-center">
          {' '}
          <span className="font-semibold text-indigo-600">
            {data.getAllBooks.length}
          </span>{' '}
          {t('book')}
        </div>
        {data.getAllBooks.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px] text-gray-500 text-lg">
            {t('noBooks')}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-start gap-[31px]">
            {data.getAllBooks.map((book: any) => (
              <div
                key={book._id}
                className="flex flex-col gap-[8px] w-[208px] h-[333px]"
              >
                <Link
                  href={book.bookLink}
                  className="shadow-lg border-[1px] hover:border-[#0EA580] rounded-[12px] w-[208px] h-[277px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <Image
                    src={book.coverImage}
                    alt={book.title[locale || 'en']}
                    width={208}
                    height={277}
                  />
                </Link>
                <div className="px-[5px] w-full">
                  <p className="font-medium text-[#36454F]">
                    {book.title[locale || 'en']}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
