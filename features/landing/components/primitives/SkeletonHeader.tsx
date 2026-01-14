export const SkeletonHeader = () => (
  <div className="flex justify-between items-center sm:items-end mx-auto mb-6 sm:mb-10 px-5 sm:px-12 lg:px-20 w-full max-w-[1440px]">
    <div>
      <div className="bg-gray-300 rounded w-48 h-10 sm:h-14 animate-pulse" />
      <div className="bg-gray-300 mt-1.5 rounded-full w-12 h-1.5 animate-pulse" />
    </div>
    <div className="bg-gray-300 rounded-full w-32 h-10 sm:h-11 animate-pulse" />
  </div>
);
