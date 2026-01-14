import Image from 'next/image';

type Props = {
  data: any;
  locale: string;
  t: (key: string) => string;
  statusStyles: Record<string, string>;
};

export default function ProjectHero({ data, locale, t, statusStyles }: Props) {
  return (
    <section className="flex lg:flex-row flex-col gap-4 lg:gap-8 bg-white shadow-xl shadow-zinc-200/50 p-3 border border-zinc-100 rounded-[2rem] overflow-hidden">
      <div className="group relative flex-shrink-0 rounded-[1.5rem] lg:w-1/2 h-[350px] lg:h-[500px] overflow-hidden">
        <Image
          src={data.projectPicture}
          alt={data.projectName[locale || 'en']}
          fill
          priority
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col justify-between p-6 lg:p-10 lg:w-1/2">
        <div className="space-y-4">
          <div>
            <span className="inline-block bg-blue-50 mb-3 px-3 py-1 rounded-lg font-bold text-[10px] text-blue-700 uppercase tracking-[0.15em]">
              {t('projectName')}
            </span>
            <h1 className="font-black text-zinc-900 text-3xl lg:text-5xl leading-[1.1] tracking-tight">
              {data.projectName[locale || 'en']}
            </h1>
          </div>

          <div className="bg-zinc-100 my-8 w-full h-px" />

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <span className="w-28 font-bold text-zinc-400 text-xs uppercase tracking-widest">
                {t('status')}
              </span>
              <span
                className={`px-5 py-2 rounded-full font-extrabold text-[10px] uppercase shadow-sm ${statusStyles[data.projectType]}`}
              >
                {data.projectType}
              </span>
            </div>

            <div className="flex items-start gap-6">
              <span className="pt-1 w-28 font-bold text-zinc-400 text-xs uppercase tracking-widest">
                {t('projectCreator')}
              </span>
              <div className="flex flex-wrap gap-2">
                {data.projectCreator.map((creator: string, i: number) => (
                  <span
                    key={i}
                    className="bg-zinc-50 hover:bg-zinc-100 px-4 py-1.5 border border-zinc-100 rounded-xl font-semibold text-zinc-700 text-sm transition-colors cursor-default"
                  >
                    {creator}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
