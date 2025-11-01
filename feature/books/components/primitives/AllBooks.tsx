'use client';
import { useQuery } from '@tanstack/react-query';
import { BooksApi } from 'feature/landing/api/landingApi';
import Image from 'next/image';
import BookEnams from './BookEnams';
import Link from 'next/link';

const AllBooks = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['book'],
    queryFn: () => BooksApi(),
  });
  if (isLoading) return <p>Loading project...</p>;
  if (isError) return <p>Error loading project</p>;
  return (
    <div className="flex py-[50px] w-full max-w-[1440px] h-full">
      <BookEnams />
      <div className="flex flex-wrap justify-center gap-[31px] m-auto px-[15px] w-full max-w-[1140px]">
        {data.getAllBooks.map((book) => (
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
              <p className="font-medium text-[#36454F]">{book.title['ka']}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
