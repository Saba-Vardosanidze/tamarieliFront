import { useQuery } from "@tanstack/react-query";
import { BookEnamsApi } from "features/landing/api/landingApi";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

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
  lang?: string;
}

const BookEnams = ({ onFilterChange }: BookEnamsProps) => {
  const locale = useLocale();

  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("BookEnums");

  const { data, isLoading, isError } = useQuery<BookEnumsData>({
    queryKey: ["booksEnams"],
    queryFn: BookEnamsApi,
  });

  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedSubGenre, setSelectedSubGenre] = useState<string>("");
  const [selectedMovement, setSelectedMovement] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [selectedAgeCategory, setSelectedAgeCategory] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const lang = locale || "en";

  useEffect(() => {
    setSelectedGenre(searchParams.get("genre") || "");
    setSelectedSubGenre(searchParams.get("subGenre") || "");
    setSelectedMovement(searchParams.get("literaryMovement") || "");
    setSelectedTheme(searchParams.get("themes") || "");
    setSelectedAuthor(searchParams.get("author") || "");
    setSelectedAgeCategory(searchParams.get("ageCategory") || "");
  }, [searchParams]);

  // ენის ცვლილების დროს ფილტრების განახლება
  useEffect(() => {
    const currentFilters: FilterParams = {
      genre: selectedGenre,
      subGenre: selectedSubGenre,
      literaryMovement: selectedMovement,
      themes: selectedTheme,
      author: selectedAuthor,
      ageCategory: selectedAgeCategory,
      lang: lang,
    };

    // მხოლოდ იმ შემთხვევაში, თუ რომელიმე ფილტრი არჩეულია
    if (
      selectedGenre ||
      selectedSubGenre ||
      selectedMovement ||
      selectedTheme ||
      selectedAuthor ||
      selectedAgeCategory
    ) {
      onFilterChange(currentFilters);
    }
  }, [lang]);

  const updateFilters = (newFilters: FilterParams) => {
    const params = new URLSearchParams();

    // ენის პარამეტრის დამატება
    const filtersWithLang = { ...newFilters, lang };

    Object.entries(filtersWithLang).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : window.location.pathname, {
      scroll: false,
    });

    onFilterChange(filtersWithLang);
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
    setSelectedGenre("");
    setSelectedSubGenre("");
    setSelectedMovement("");
    setSelectedTheme("");
    setSelectedAuthor("");
    setSelectedAgeCategory("");
    router.push(window.location.pathname, { scroll: false });
    onFilterChange({ lang });
  };

  const handleApplyFilters = () => {
    setIsFilterOpen(false);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[200px] text-gray-500 animate-pulse">
        {t("loading")}
      </div>
    );

  if (isError)
    return (
      <div className="font-medium text-red-500 text-center">{t("error")}</div>
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
        <option value="">
          {label} {t("choose")}
        </option>
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

  const activeFiltersCount = [
    selectedGenre,
    selectedSubGenre,
    selectedMovement,
    selectedTheme,
    selectedAuthor,
    selectedAgeCategory,
  ].filter(Boolean).length;

  return (
    <>
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-md px-6 py-3 rounded-xl w-full font-medium text-white transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          {t("filter")}
          {activeFiltersCount > 0 && (
            <span className="bg-white px-2 py-0.5 rounded-full font-bold text-indigo-600 text-sm">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {isFilterOpen && (
        <div className="lg:hidden z-50 fixed inset-0">
          <div className="bottom-0 absolute inset-x-0 bg-white shadow-2xl rounded-t-3xl max-h-[85vh] overflow-y-auto animate-slide-up">
            <div className="top-0 z-10 sticky bg-white shadow-sm px-6 py-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-900 text-xl">
                  {t("filterBooks")}
                </h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-4 p-6">
              {renderSelect(
                "ჟანრი",
                selectedGenre,
                handleGenreChange,
                data.genres.main[lang]
              )}
              {renderSelect(
                "ქვეჟანრი",
                selectedSubGenre,
                handleSubGenreChange,
                data.genres.sub[lang]
              )}
              {renderSelect(
                "მიმდინარეობა",
                selectedMovement,
                handleMovementChange,
                data.literaryMovements[lang]
              )}
              {renderSelect(
                "თემა",
                selectedTheme,
                handleThemeChange,
                data.themes[lang]
              )}
              {renderSelect(
                "ავტორი",
                selectedAuthor,
                handleAuthorChange,
                data.authors[lang]
              )}
              {renderSelect(
                "ასაკობრივი კატეგორია",
                selectedAgeCategory,
                handleAgeCategoryChange,
                data.ageCategories[lang]
              )}
            </div>

            <div className="bottom-0 z-10 sticky bg-white shadow-2xl px-6 py-4 border-t">
              <div className="gap-3 grid grid-cols-2">
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="hover:bg-gray-50 px-4 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 transition-colors duration-200"
                  >
                    გასუფთავება
                  </button>
                )}
                <button
                  onClick={handleApplyFilters}
                  className={`bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-xl font-medium text-white transition-colors duration-200 ${
                    !hasActiveFilters ? "col-span-2" : ""
                  }`}
                >
                  გამოყენება
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* დესკტოპ ვერსია */}
      <div className="hidden lg:block relative space-y-5 bg-white shadow-md mx-auto p-6 rounded-[12px] w-full max-w-[400px] min-h-full">
        <h2 className="mb-4 font-semibold text-black text-2xl text-center">
          {t("filterBooks")}
        </h2>

        {renderSelect(
          t("genre"),
          selectedGenre,
          handleGenreChange,
          data.genres.main[lang]
        )}
        {renderSelect(
          t("subGenre"),
          selectedSubGenre,
          handleSubGenreChange,
          data.genres.sub[lang]
        )}
        {renderSelect(
          t("movement"),
          selectedMovement,
          handleMovementChange,
          data.literaryMovements[lang]
        )}
        {renderSelect(
          t("theme"),
          selectedTheme,
          handleThemeChange,
          data.themes[lang]
        )}
        {renderSelect(
          t("author"),
          selectedAuthor,
          handleAuthorChange,
          data.authors[lang]
        )}
        {renderSelect(
          t("ageCategory"),
          selectedAgeCategory,
          handleAgeCategoryChange,
          data.ageCategories[lang]
        )}

        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="bg-red-500 hover:bg-red-600 shadow-sm hover:shadow-md px-4 py-3 rounded-xl w-full font-medium text-white transition-colors duration-200"
          >
            {t("clearFilter")}
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default BookEnams;
