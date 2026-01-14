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

const MiniProjectContent = ({ data, locale, t }: Props) => (
  <section className="gap-8 grid lg:grid-cols-3">
    <div className="lg:col-span-2 bg-white shadow-sm p-8 border border-gray-100 rounded-2xl">
      <h3 className="mb-4 font-bold text-gray-900 text-xl">
        {data.projectName[locale]} {t('description')}
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
        {data.projectDescription[locale]}
      </p>
    </div>

    <aside className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl h-fit">
      <h3 className="mb-6 font-bold text-gray-900 text-lg">
        Resources & Links
      </h3>

      <div className="flex flex-col gap-3">
        {data.pdfLink && (
          <Link
            href={data.pdfLink}
            className="group flex items-center gap-3 hover:bg-red-50 p-3 border border-gray-50 rounded-xl font-bold text-red-600 text-sm transition-all"
          >
            <FaFilePdf size={18} />
            <span>show PDF</span>
          </Link>
        )}

        {data.wordLink && (
          <Link
            href={data.wordLink}
            className="group flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 rounded-xl font-bold text-blue-600 text-sm transition-all"
          >
            <FaFileWord size={18} />
            <span>show WORD</span>
          </Link>
        )}

        {data.fbLink && (
          <Link
            href={data.fbLink}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 rounded-xl font-bold text-blue-800 text-sm transition-all"
          >
            <FaFacebook size={18} />
            <span>Open Facebook Page</span>
          </Link>
        )}

        {data.igLink && (
          <Link
            href={data.igLink}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-pink-50 p-3 border border-gray-50 rounded-xl font-bold text-pink-600 text-sm transition-all"
          >
            <FaInstagram size={18} />
            <span>Open Instagram Page</span>
          </Link>
        )}

        {data.partnerSiteLink && (
          <Link
            href={data.partnerSiteLink}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-emerald-50 p-3 border border-gray-50 rounded-xl font-bold text-emerald-700 text-sm transition-all"
          >
            <FaExternalLinkAlt size={16} />
            <span>Open Partner Site</span>
          </Link>
        )}
      </div>
    </aside>
  </section>
);

export default MiniProjectContent;
