import Link from 'next/link';

type Props = {
  buttons: any[];
  activeType: string;
  onChange: (type: string) => void;
  showLibrary: boolean;
  locale: string;
  t: (key: string) => string;
};

export default function ProjectFilter({
  buttons,
  activeType,
  onChange,
  showLibrary,
  locale,
  t,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {buttons.map((btn) => {
        const isActive = activeType === btn.type;

        return (
          <button
            key={btn.id}
            onClick={() => onChange(btn.type)}
            className={`
              px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer tracking-wide
              transition-all duration-300 ease-in-out
              ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-transparent text-zinc-600 border border-zinc-200 hover:border-zinc-900 hover:text-zinc-900'
              }
            `}
          >
            {btn.name}
          </button>
        );
      })}

      {showLibrary && (
        <Link
          href={`/${locale}/books`}
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg ml-auto px-6 py-2.5 rounded-full font-semibold text-white text-xs tracking-wide transition-all duration-300"
        >
          {t('digitalLibrary')}
        </Link>
      )}
    </div>
  );
}
