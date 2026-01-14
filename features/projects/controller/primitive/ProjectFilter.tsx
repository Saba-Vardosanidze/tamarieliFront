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
    <div className="flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onChange(btn.type)}
          className={`px-5 py-2 rounded-full text-xs font-bold hover:bg-black cursor-pointer duration-200 ease-in-out transition-all  ${
            activeType === btn.type
              ? 'bg-black text-white hover:text-white duration-200 ease-in-out transition-all '
              : 'bg-white text-black border border-[#353434] hover:text-white duration-200 ease-in-out transition-all'
          }`}
        >
          {btn.name}
        </button>
      ))}

      {showLibrary && (
        <Link
          href={`/${locale}/books`}
          className="bg-blue-600 px-5 py-2 rounded-full font-bold text-white text-xs"
        >
          {t('digitalLibrary')}
        </Link>
      )}
    </div>
  );
}
