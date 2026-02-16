import CountryList from "./FlagsComponent";
import CategorySelect from "./GenreComponent";

const SearchFilter = () => {
  return (
    <div className="max-w-[770px] w-full h-[500px]  bg-white shadow-2xl border rounded-xl mt-5 flex ">
      <div className="w-full px-4  flex  justify-between">
        <div>
          <p>Country</p>
          <div>
            <CountryList />
          </div>
        </div>
        <div>
          <p>Genre</p>
          <div>
            <CategorySelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
