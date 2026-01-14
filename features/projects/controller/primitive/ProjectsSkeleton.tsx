export const ProjectsSkeleton = () => (
  <div className="bg-gray-50 pt-[80px] pb-20 min-h-screen animate-pulse">
    <div className="mx-auto mb-6 px-6 max-w-[1200px]">
      <div className="bg-gray-200 rounded w-48 h-4"></div>
    </div>
    <div className="space-y-8 mx-auto px-6 w-full max-w-[1200px]">
      <section className="flex lg:flex-row flex-col gap-10 bg-white shadow-sm p-2 border border-gray-100 rounded-2xl">
        <div className="bg-gray-200 rounded-xl lg:w-1/2 h-[450px]"></div>
        <div className="flex flex-col justify-center gap-6 p-6 lg:w-1/2">
          <div className="space-y-3">
            <div className="bg-gray-200 rounded w-20 h-3"></div>
            <div className="bg-gray-200 rounded w-3/4 h-10"></div>
          </div>
          <div className="space-y-4 py-6 border-gray-50 border-y">
            <div className="flex gap-4">
              <div className="bg-gray-200 rounded w-24 h-4"></div>
              <div className="bg-gray-200 rounded-full w-20 h-6"></div>
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-200 rounded w-24 h-4"></div>
              <div className="bg-gray-200 rounded w-32 h-6"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap-8 grid lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2 bg-white p-8 rounded-2xl h-64">
          <div className="bg-gray-200 rounded w-32 h-6"></div>
          <div className="bg-gray-200 rounded w-full h-4"></div>
          <div className="bg-gray-200 rounded w-full h-4"></div>
          <div className="bg-gray-200 rounded w-2/3 h-4"></div>
        </div>
        <div className="space-y-4 bg-white p-8 rounded-2xl h-64">
          <div className="bg-gray-200 rounded w-32 h-6"></div>
          <div className="bg-gray-200 rounded w-full h-12"></div>
          <div className="bg-gray-200 rounded w-full h-12"></div>
        </div>
      </div>
    </div>
  </div>
);
