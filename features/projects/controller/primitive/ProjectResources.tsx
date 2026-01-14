import Link from 'next/link';
import { FaFilePdf, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  pdf?: string;
  fb?: string;
  site?: string;
};

export default function ProjectResources({ pdf, fb, site }: Props) {
  return (
    <div className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl h-fit">
      <h3 className="mb-6 font-bold text-gray-900 text-lg">
        Resources & Links
      </h3>

      <div className="flex flex-col gap-3">
        {pdf && (
          <Link
            href={pdf}
            className="group flex items-center gap-3 hover:bg-red-50 p-3 border border-gray-50 hover:border-red-100 rounded-xl text-red-600 transition-all"
          >
            <FaFilePdf size={20} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              Download PDF
            </span>
          </Link>
        )}

        {fb && (
          <Link
            href={fb}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-blue-50 p-3 border border-gray-50 hover:border-blue-100 rounded-xl text-blue-700 transition-all"
          >
            <FaFacebook size={20} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              Facebook Page
            </span>
          </Link>
        )}

        {site && (
          <Link
            href={site}
            target="_blank"
            className="group flex items-center gap-3 hover:bg-emerald-50 p-3 border border-gray-50 hover:border-emerald-100 rounded-xl text-emerald-700 transition-all"
          >
            <FaExternalLinkAlt size={18} />
            <span className="font-bold text-sm uppercase transition-transform group-hover:translate-x-1">
              Official Website
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
