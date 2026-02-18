"use client";

import Image from "next/image";
import { MapPin, Tag, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectCardProps } from "../type";

const SearchedProject = ({
  title,
  description,
  country,
  category,
  image,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col  mx-auto ">
      <p className="text-[11px] font-bold text-gray-400 uppercase mb-3 tracking-widest px-1">
        მოძებნილი პროექტი
      </p>

      <div className="w-full bg-white rounded-2xl  shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col sm:flex-row hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group justify-between  px-5 py-5 ">
        <div className="relative w-full sm:w-48 h-48 sm:h-32 rounded-xl overflow-hidden object-contain no-repeat ">
          <Image
            src={image || "/api/placeholder/400/320"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-between  py-1">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-900 font-NotoSansGeorgian mb-1 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <Link
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2 mb-3 font-NotoSansGeorgian leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-xs font-medium text-gray-600 font-NotoSansGeorgian">
                {country}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag size={14} className="text-blue-500" />
              <span className="text-xs font-medium text-gray-600 font-NotoSansGeorgian">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedProject;
