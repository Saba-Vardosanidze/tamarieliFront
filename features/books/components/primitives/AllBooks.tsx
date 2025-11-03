'use client';
import { useQuery } from '@tanstack/react-query';
import { BooksApi } from 'features/landing/api/landingApi';
import Image from 'next/image';
import BookEnams, { FilterParams } from './BookEnams';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const AllBooks = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterParams>({});

  useEffect(() => {
    const newFilters: FilterParams = {};
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
  }, [searchParams]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['book', filters],
    queryFn: () => BooksApi(filters),
  });

  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[400px] text-gray-500 text-lg">
        <div className="animate-pulse">იტვირთება წიგნები...</div>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500 text-lg">
        შეცდომა წიგნების ჩატვირთვისას
      </div>
    );

  return (
    <div className="flex py-[50px] w-full max-w-[1440px] h-full">
      <BookEnams onFilterChange={handleFilterChange} />
      <div className="flex flex-col gap-6 m-auto px-[15px] w-full max-w-[1140px]">
        <div className="text-gray-600 text-center">
          ნაპოვნია{' '}
          <span className="font-semibold text-indigo-600">
            {data.getAllBooks.length}
          </span>{' '}
          წიგნი
        </div>
        {data.getAllBooks.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px] text-gray-500 text-lg">
            არ მოიძებნა წიგნები მითითებული ფილტრებით
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
                    alt={book.title['ka']}
                    width={208}
                    height={277}
                  />
                </Link>
                <div className="px-[5px] w-full">
                  <p className="font-medium text-[#36454F]">
                    {book.title['ka']}
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
