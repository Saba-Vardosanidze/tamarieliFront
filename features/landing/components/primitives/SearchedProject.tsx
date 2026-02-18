"use client";

import Image from "next/image";
import { MapPin, Tag, ExternalLink } from "lucide-react";
import Link from "next/link";

const SearchedProject = () => {
  return (
    <div className="w-full  mx-auto">
      <p className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-widest px-1">
        მოძებნილი პროექტი
      </p>

      <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col sm:flex-row gap-5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-4 group">
        <div className="relative w-full sm:w-40 h-40 sm:h-28 rounded-xl overflow-hidden shrink-0">
          <Image
            src="/Images/projects/project1.png"
            alt="პროექტის დასახელება"
            fill
            className="object-cover transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-between py-0.5">
          <div className="flex justify-between items-start gap-2">
            <div className="overflow-hidden">
              <h3 className="font-bold text-base text-gray-900 font-NotoSansGeorgian mb-1 line-clamp-1">
                პროექტის დასახელება
              </h3>
              <p className="text-gray-500 text-[13px] line-clamp-2 font-NotoSansGeorgian leading-relaxed">
                აქ გამოჩნდება პროექტის მოკლე აღწერა, რომელიც მომხმარებელს
                დაეხმარება ძიების შედეგის გაცნობაში.
              </p>
            </div>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors shrink-0 pt-1"
            >
              <ExternalLink size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-[11px] font-medium text-gray-600 font-NotoSansGeorgian">
                საქართველო
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag size={14} className="text-blue-500" />
              <span className="text-[11px] font-medium text-gray-600 font-NotoSansGeorgian">
                ტექნოლოგიები
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedProject;
