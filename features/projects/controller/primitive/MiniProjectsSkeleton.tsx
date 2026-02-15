export const MiniProjectsSkeleton = () => {
  return (
    <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white px-[10px] py-[10px] rounded-2xl"
        >
          <div className="flex flex-col">
            <div className="bg-gray-200 rounded-xl w-full h-56 animate-pulse" />

            <div className="flex flex-col space-y-2 mt-[10px]">
              <div className="bg-gray-200 rounded w-3/4 h-5 animate-pulse" />

              <div className="bg-gray-200 rounded w-full h-4 animate-pulse" />
              <div className="bg-gray-200 rounded w-5/6 h-4 animate-pulse" />
            </div>
          </div>

          <div className="bg-gray-200 mt-4 rounded w-24 h-4 animate-pulse" />
        </div>
      ))}
    </div>
  );
};
