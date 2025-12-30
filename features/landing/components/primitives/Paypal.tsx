'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Copy, Check } from 'lucide-react';

const Paypal = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'FR76 1027 8010 8800 0226 3180 179';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex justify-center items-start bg-[#E0E0E0] px-6 py-20 w-full">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1200px]">
        <h2 className="font-medium text-[21px] text-gray-900 md:text-4xl text-center">
          თქვენი თანადგომა ჩვენთვის ძალიან მნიშვნელოვანია
        </h2>

        <div className="flex flex-col items-center gap-8 w-full max-w-2xl">
          <Link
            href="https://www.paypal.com/ge/home"
            className="flex justify-center items-center gap-4 bg-[#0070BA] hover:bg-[#005ea6] shadow-md px-8 py-4 rounded-lg w-full transition-colors"
          >
            <Image
              src="/Images/headerImages/svg/PayPal_Logo.svg"
              alt="paypal"
              width={50}
              height={50}
            />
            <span className="font-semibold text-white text-lg md:text-xl">
              PayPal
            </span>
          </Link>

          <div className="flex items-center gap-4 my-2 w-full">
            <div className="flex-1 border-gray-500 border-t"></div>
            <span className="font-medium text-gray-700 text-sm">ან</span>
            <div className="flex-1 border-gray-500 border-t"></div>
          </div>

          <div className="flex flex-col gap-4 bg-white shadow-md p-8 rounded-xl w-full">
            <p className="font-medium text-gray-700 text-sm text-center">
              საბანკო გადარიცხვა
            </p>

            <div
              onClick={handleCopy}
              className="flex items-center gap-4 hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              <p className="flex-1 font-mono text-[14px] text-gray-900 md:text-lg text-center">
                {textToCopy}
              </p>

              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </div>

            {copied && (
              <p className="font-medium text-green-600 text-sm text-center">
                დაკოპირდა
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
