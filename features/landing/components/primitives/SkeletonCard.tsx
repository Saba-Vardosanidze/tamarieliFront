type SkeletonCardProps = {
  cardWidth: number;
};

export const SkeletonCard = ({ cardWidth }: SkeletonCardProps) => (
  <div
    className="flex-shrink-0 px-2 sm:px-4"
    style={{ width: `${cardWidth}px` }}
  >
    <div className="group relative bg-gray-200 rounded-[1.5rem] sm:rounded-[2rem] h-[320px] sm:h-[450px] overflow-hidden animate-pulse">
      <div className="bg-gray-300 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="top-4 sm:top-6 left-4 sm:left-6 absolute">
        <div className="bg-gray-400/40 backdrop-blur-md px-3 py-1 rounded-full w-20 h-6" />
      </div>

      <div className="right-0 bottom-0 left-0 absolute space-y-4 p-5 sm:p-10">
        <div className="bg-gray-400/60 rounded w-4/5 h-8 sm:h-12" />
        <div className="bg-gray-400/40 rounded w-3/5 h-6 sm:h-8" />
      </div>
    </div>
  </div>
);
