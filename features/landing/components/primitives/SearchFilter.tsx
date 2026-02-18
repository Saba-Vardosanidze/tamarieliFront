"use client";

import { SlidersHorizontal } from "lucide-react";
import CountryList from "./FlagsComponent";
import CategorySelect from "./GenreComponent";
import { useTranslations } from "next-intl";
import SearchedProject from "./SearchedProject";

const SearchFilter = () => {
  const t = useTranslations("SearchFilter");
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="max-w-[850px] w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-none rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-center gap-2 text-gray-800">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h2 className="font-bold text-lg sm:text-xl font-NotoSansGeorgian tracking-tight">
            {t("title")}
          </h2>
        </div>

        <div className="w-full max-w-[850px] flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto ">
          <div className="flex flex-col items-start w-full sm:w-auto">
            <p className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-widest px-1">
              {t("countryLabel")}
            </p>
            <div className="w-full sm:w-72">
              <CountryList />
            </div>
          </div>

          <div className="flex flex-col items-start w-full sm:w-auto">
            <p className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-widest px-1">
              {t("genreLabel")}
            </p>
            <div className="w-full sm:w-72">
              <CategorySelect />
            </div>
          </div>
        </div>
        <SearchedProject
          title="პროექტი"
          description="პროექტის აღწერა"
          country="საქართველო"
          category="პროზა"
          image="/Images/headerImages/png/tamarieliLogo.png"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
