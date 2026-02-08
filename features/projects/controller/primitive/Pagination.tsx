import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const buttonStyles =
    'w-10 h-10 rounded-lg transition-all  duration-200 flex items-center justify-center border text-sm font-medium';
  const disabledStyles =
    'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed';
  const navStyles =
    'text-blue-600 cursor-pointer border-blue-200 hover:bg-blue-50 active:scale-95 shadow-sm';
  const activePageStyles =
    'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100';

  const getVisiblePages = () => {
    const range = [];
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="flex justify-center items-center gap-2 my-8 font-sans">
      <button
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
        className={`${buttonStyles} ${isFirstPage ? disabledStyles : navStyles}`}
      >
        <ChevronsLeft size={18} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={`${buttonStyles} ${isFirstPage ? disabledStyles : navStyles}`}
      >
        <ChevronLeft size={18} strokeWidth={2.5} />
      </button>

      <div className="flex items-center gap-2 mx-1">
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${buttonStyles} ${
              currentPage === page ? activePageStyles : navStyles
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage + 1 < totalPages && (
          <span className="px-1 text-blue-300">...</span>
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`${buttonStyles} ${isLastPage ? disabledStyles : navStyles}`}
      >
        <ChevronRight size={18} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={isLastPage}
        className={`${buttonStyles} ${isLastPage ? disabledStyles : navStyles}`}
      >
        <ChevronsRight size={18} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Pagination;
