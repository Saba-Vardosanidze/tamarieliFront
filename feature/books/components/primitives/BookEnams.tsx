import { useQuery } from '@tanstack/react-query';
import { BookEnamsApi } from 'feature/landing/api/landingApi';
import { useState, ChangeEvent } from 'react';

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

const BookEnams = () => {
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

  const lang = 'ka';

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

  return (
    <div className="relative space-y-5 bg-white shadow-md mx-auto p-6 rounded-[12px] w-full max-w-[400px] min-h-full">
      <h2 className="mb-4 font-semibold text-black text-2xl text-center">
        წიგნის ფილტრაცია
      </h2>

      {renderSelect(
        'ჟანრი',
        selectedGenre,
        (e) => setSelectedGenre(e.target.value),
        data.genres.main[lang]
      )}
      {renderSelect(
        'ქვეჟანრი',
        selectedSubGenre,
        (e) => setSelectedSubGenre(e.target.value),
        data.genres.sub[lang]
      )}
      {renderSelect(
        'მიმდინარეობა',
        selectedMovement,
        (e) => setSelectedMovement(e.target.value),
        data.literaryMovements[lang]
      )}
      {renderSelect(
        'თემა',
        selectedTheme,
        (e) => setSelectedTheme(e.target.value),
        data.themes[lang]
      )}
      {renderSelect(
        'ავტორი',
        selectedAuthor,
        (e) => setSelectedAuthor(e.target.value),
        data.authors[lang]
      )}
      {renderSelect(
        'ასაკობრივი კატეგორია',
        selectedAgeCategory,
        (e) => setSelectedAgeCategory(e.target.value),
        data.ageCategories[lang]
      )}
    </div>
  );
};

export default BookEnams;
