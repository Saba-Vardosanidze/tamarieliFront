import { useQuery } from '@tanstack/react-query';
import { BookEnamsApi } from 'features/landing/api/landingApi';
import { useState, ChangeEvent, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

interface BookEnumsData {
  genres: {
    main: Record<string, string[]>;
    sub: Record<string, string[]>;
  };
  literaryMovements: Record<string, string[]>;
  themes: Record<string, string[]>;
  authors: Record<string, string[]>;
  ageCategories: Record<string, string[]>;
}

interface BookEnamsProps {
  onFilterChange: (filters: FilterParams) => void;
}

export interface FilterParams {
  genre?: string;
  subGenre?: string;
  literaryMovement?: string;
  themes?: string;
  author?: string;
  ageCategory?: string;
}

const BookEnams = ({ onFilterChange }: BookEnamsProps) => {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isLoading, isError } = useQuery<BookEnumsData>({
    queryKey: ['booksEnams'],
    queryFn: BookEnamsApi,
  });

  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedSubGenre, setSelectedSubGenre] = useState<string>('');
  const [selectedMovement, setSelectedMovement] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedAgeCategory, setSelectedAgeCategory] = useState<string>('');

  const lang = locale || 'en';

  useEffect(() => {
    setSelectedGenre(searchParams.get('genre') || '');
    setSelectedSubGenre(searchParams.get('subGenre') || '');
    setSelectedMovement(searchParams.get('literaryMovement') || '');
    setSelectedTheme(searchParams.get('themes') || '');
    setSelectedAuthor(searchParams.get('author') || '');
    setSelectedAgeCategory(searchParams.get('ageCategory') || '');
  }, [searchParams]);

  const updateFilters = (newFilters: FilterParams) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : window.location.pathname, {
      scroll: false,
    });

    onFilterChange(newFilters);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedGenre(value);
    updateFilters({
      genre: value,
      subGenre: selectedSubGenre,
      literaryMovement: selectedMovement,
      themes: selectedTheme,
      author: selectedAuthor,
      ageCategory: selectedAgeCategory,
    });
  };

  const handleSubGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubGenre(value);
    updateFilters({
      genre: selectedGenre,
      subGenre: value,
      literaryMovement: selectedMovement,
      themes: selectedTheme,
      author: selectedAuthor,
      ageCategory: selectedAgeCategory,
    });
  };

  const handleMovementChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMovement(value);
    updateFilters({
      genre: selectedGenre,
      subGenre: selectedSubGenre,
      literaryMovement: value,
      themes: selectedTheme,
      author: selectedAuthor,
      ageCategory: selectedAgeCategory,
    });
  };

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTheme(value);
    updateFilters({
      genre: selectedGenre,
      subGenre: selectedSubGenre,
      literaryMovement: selectedMovement,
      themes: value,
      author: selectedAuthor,
      ageCategory: selectedAgeCategory,
    });
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedAuthor(value);
    updateFilters({
      genre: selectedGenre,
      subGenre: selectedSubGenre,
      literaryMovement: selectedMovement,
      themes: selectedTheme,
      author: value,
      ageCategory: selectedAgeCategory,
    });
  };

  const handleAgeCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedAgeCategory(value);
    updateFilters({
      genre: selectedGenre,
      subGenre: selectedSubGenre,
      literaryMovement: selectedMovement,
      themes: selectedTheme,
      author: selectedAuthor,
      ageCategory: value,
    });
  };

  const handleClearFilters = () => {
    setSelectedGenre('');
    setSelectedSubGenre('');
    setSelectedMovement('');
    setSelectedTheme('');
    setSelectedAuthor('');
    setSelectedAgeCategory('');
    router.push(window.location.pathname, { scroll: false });
    onFilterChange({});
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[200px] text-gray-500 animate-pulse">
        იტვირთება...
      </div>
    );

  if (isError)
    return (
      <div className="font-medium text-red-500 text-center">
        შეცდომა მონაცემების ჩატვირთვისას.
      </div>
    );

  const renderSelect = (
    label: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    options: string[]
  ) => (
    <div className="space-y-1">
      <label className="block font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="bg-white shadow-sm p-3 border border-gray-300 focus:border-indigo-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full text-gray-700 transition-all duration-200"
      >
        <option value="">{label} აირჩიე...</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-gray-700">
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  if (!data) return null;

  const hasActiveFilters =
    selectedGenre ||
    selectedSubGenre ||
    selectedMovement ||
    selectedTheme ||
    selectedAuthor ||
    selectedAgeCategory;

  return (
    <div className="relative space-y-5 bg-white shadow-md mx-auto p-6 rounded-[12px] w-full max-w-[400px] min-h-full">
      <h2 className="mb-4 font-semibold text-black text-2xl text-center">
        წიგნის ფილტრაცია
      </h2>

      {renderSelect(
        'ჟანრი',
        selectedGenre,
        handleGenreChange,
        data.genres.main[lang]
      )}
      {renderSelect(
        'ქვეჟანრი',
        selectedSubGenre,
        handleSubGenreChange,
        data.genres.sub[lang]
      )}
      {renderSelect(
        'მიმდინარეობა',
        selectedMovement,
        handleMovementChange,
        data.literaryMovements[lang]
      )}
      {renderSelect(
        'თემა',
        selectedTheme,
        handleThemeChange,
        data.themes[lang]
      )}
      {renderSelect(
        'ავტორი',
        selectedAuthor,
        handleAuthorChange,
        data.authors[lang]
      )}
      {renderSelect(
        'ასაკობრივი კატეგორია',
        selectedAgeCategory,
        handleAgeCategoryChange,
        data.ageCategories[lang]
      )}

      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className="bg-red-500 hover:bg-red-600 shadow-sm hover:shadow-md px-4 py-3 rounded-xl w-full font-medium text-white transition-colors duration-200"
        >
          ფილტრის გასუფთავება
        </button>
      )}
    </div>
  );
};

export default BookEnams;
