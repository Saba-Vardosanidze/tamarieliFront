import Image from 'next/image';

type Props = {
  data: any;
  locale: string;
  t: (key: string) => string;
  statusStyles: Record<string, string>;
};

export default function ProjectHero({ data, locale, t, statusStyles }: Props) {
  return (
    <section className="flex lg:flex-row flex-col gap-10 bg-white shadow-sm p-2 border border-gray-100 rounded-2xl overflow-hidden">
      <div className="group relative flex-shrink-0 rounded-xl lg:w-1/2 h-[450px] overflow-hidden">
        <Image
          src={data.projectPicture}
          alt={data.projectName[locale || 'en']}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-center gap-6 p-6 lg:w-1/2">
        <div>
          <span className="block mb-2 font-bold text-blue-600 text-xs uppercase tracking-wider">
            {t('projectName')}
          </span>

          <h1 className="font-black text-gray-900 text-3xl lg:text-4xl leading-tight">
            {data.projectName[locale || 'en']}
          </h1>
        </div>

        <div className="flex flex-col gap-4 py-6 border-gray-50 border-y">
          <div className="flex items-center gap-4">
            <span className="w-24 font-semibold text-gray-400 text-sm">
              {t('status')}
            </span>

            <span
              className={`px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide ${statusStyles[data.projectType]}`}
            >
              {data.projectType}
            </span>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-24 font-semibold text-gray-400 text-sm">
              {t('projectCreator')}
            </span>

            <div className="flex flex-wrap gap-2">
              {data.projectCreator.map((creator: string, i: number) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded font-medium text-gray-700 text-sm"
                >
                  {creator}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
