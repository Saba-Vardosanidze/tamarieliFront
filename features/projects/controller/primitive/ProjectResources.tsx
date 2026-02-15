import Link from 'next/link';
import {
  FaFilePdf,
  FaFacebook,
  FaExternalLinkAlt,
  FaFileWord,
} from 'react-icons/fa';

type Props = {
  pdf?: string[];
  fb?: string[];
  site?: string[];
  word?: string[];
};

export default function ProjectResources({ pdf, fb, site, word }: Props) {
  return (
    <div className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl h-fit">
      <h3 className="mb-6 font-bold text-gray-900 text-lg">
        Resources & Links
      </h3>

      <div className="flex flex-col gap-3">
        {pdf?.map((link: string, index: number) => (
          <Link
            key={`pdf-${index}`}
            href={link}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-red-50 p-3 border border-gray-50 hover:border-red-100 rounded-xl text-red-600 transition-all"
          >
            <FaFilePdf size={20} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              show PDF {index + 1}
            </span>
          </Link>
        ))}

        {word?.map((link: string, index: number) => (
          <Link
            key={`pdf-${index}`}
            href={link}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 hover:border-blue-100 rounded-xl text-blue-600 transition-all"
          >
            <FaFileWord size={20} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              show WORD {index + 1}
            </span>
          </Link>
        ))}

        {fb?.map((link: string, index: number) => (
          <Link
            key={`fb-${index}`}
            href={link}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 hover:border-blue-100 rounded-xl text-blue-700 transition-all"
          >
            <FaFacebook size={20} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              show Page
            </span>
          </Link>
        ))}

        {site?.map((link: string, index: number) => (
          <Link
            key={`site-${index}`}
            href={link}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-emerald-50 p-3 border border-gray-50 hover:border-emerald-100 rounded-xl text-emerald-700 transition-all"
          >
            <FaExternalLinkAlt size={18} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              Official Website
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
