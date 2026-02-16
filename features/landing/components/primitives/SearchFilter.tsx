import CountryList from "./FlagsComponent";

const SearchFilter = () => {
  return (
    <div className="max-w-[770px] w-full h-[500px]  bg-white shadow-2xl border rounded-xl mt-5 flex ">
      <div className="w-full px-4  flex flex-col justify-between">
        <div>
          <p>Genre</p>
          <ul>
            <CountryList />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
