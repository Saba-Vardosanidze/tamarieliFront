'use client';

import { FooterItems } from 'features/landing/data/landingData';
import Image from 'next/image';
import FooterLinks from './FooterLinks';
import SocialIcons from './FooterSocmediaLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] mt-20 sm:mt-32 pt-16 pb-8 border-gray-100 border-t w-full">
      <div className="mx-auto px-6 sm:px-12 lg:px-20 max-w-[1440px]">
        <div className="flex lg:flex-row flex-col justify-between items-start gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="flex flex-col gap-6">
              {FooterItems.map((item, index) => (
                <FooterLinks
                  key={index}
                  contactUs={item.contactUs}
                  links={item.links}
                />
              ))}
            </div>

            <div className="pt-4">
              <SocialIcons />
            </div>
          </div>

          <div className="relative w-full lg:w-[450px] xl:w-[500px]">
            <div className="group relative shadow-2xl shadow-gray-200 rounded-[2rem] overflow-hidden">
              <Image
                src="/Images/headerImages/png/new-hero.jpeg"
                width={600}
                height={400}
                alt="Tamarieli Project"
                className="w-full h-[250px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="top-1/2 right-0 -z-10 absolute bg-blue-50/50 blur-3xl rounded-full w-64 h-64 -translate-y-1/2" />
          </div>
        </div>

        <div className="mt-16 sm:mt-24 pt-8 border-gray-200/60 border-t">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            <p className="font-medium text-gray-500 text-sm text-center tracking-wide">
              © {currentYear}{' '}
              <span className="font-bold text-gray-900 tracking-tighter">
                TAMARIELI
              </span>
              . All Rights Reserved
            </p>

            <div className="flex items-center gap-6 font-medium text-gray-400 text-xs uppercase tracking-widest">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-blue-600 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
