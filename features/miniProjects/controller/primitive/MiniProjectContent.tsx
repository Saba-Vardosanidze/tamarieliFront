import { LocaleKey, MiniProject } from '@features/miniProjects/type';
import Link from 'next/link';
import {
  FaFilePdf,
  FaFileWord,
  FaFacebook,
  FaInstagram,
  FaExternalLinkAlt,
} from 'react-icons/fa';

type Props = {
  data: MiniProject;
  locale: LocaleKey;
  t: (key: string) => string;
};

const MiniProjectContent = ({ data, locale, t }: Props) => {
  const hasLinks =
    data.pdfLink?.length > 0 ||
    data.wordLink?.length > 0 ||
    data.fbLink?.length > 0 ||
    data.igLink?.length > 0 ||
    data.partnerSiteLink?.length > 0;

  return (
    <section
      className={`gap-8 grid ${hasLinks ? 'lg:grid-cols-3' : 'grid-cols-1'}`}
    >
      <div
        className={`${hasLinks ? 'lg:col-span-2' : 'w-full'} bg-white shadow-sm p-8 border border-gray-100 rounded-2xl`}
      >
        <h3 className="mb-4 font-bold text-gray-900 text-xl">
          {data.projectName[locale]} {t('description')}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {data.projectDescription[locale]}
        </p>
      </div>

      {hasLinks && (
        <aside className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl h-fit">
          <h3 className="mb-6 font-bold text-gray-900 text-lg">
            Resources & Links
          </h3>

          <div className="flex flex-col gap-3">
            {data.pdfLink?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-red-50 p-3 border border-gray-50 rounded-xl font-bold text-red-600 text-sm transition-all"
              >
                <FaFilePdf size={18} />
                <span>PDF {data.pdfLink.length > 1 ? i + 1 : ''}</span>
              </a>
            ))}

            {data.wordLink?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 rounded-xl font-bold text-blue-600 text-sm transition-all"
              >
                <FaFileWord size={18} />
                <span>Word {data.wordLink.length > 1 ? i + 1 : ''}</span>
              </a>
            ))}

            {data.fbLink?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 rounded-xl font-bold text-blue-800 text-sm transition-all"
              >
                <FaFacebook size={18} />
                <span>Facebook</span>
              </a>
            ))}

            {data.igLink?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-pink-50 p-3 border border-gray-50 rounded-xl font-bold text-pink-600 text-sm transition-all"
              >
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
            ))}

            {data.partnerSiteLink?.map((link, i) => (
              <Link
                key={i}
                href={link}
                target="_blank"
                className="flex items-center gap-3 hover:bg-emerald-50 p-3 border border-gray-50 rounded-xl font-bold text-emerald-700 text-sm transition-all"
              >
                <FaExternalLinkAlt size={16} />
                <span>Partner Site</span>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </section>
  );
};

export default MiniProjectContent;
