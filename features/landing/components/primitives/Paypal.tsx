"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

const Paypal = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "FR76 1027 8010 8800 0226 3180 179";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 w-full min-h-[500px] lg:min-h-[500px] px-4">
      <div className="max-w-[900px] w-full">
        <div className="flex flex-col justify-center items-center gap-12 min-h-[500px] py-12">
          <h2 className="font-bold text-black text-2xl md:text-3xl text-center px-4">
            თქვენი თანადგომა ჩვენთვის ძალიან მნიშვნელოვანია
          </h2>

          <div className="flex flex-col items-center gap-6 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <Link
              href="https://www.paypal.com/ge/home"
              className="flex items-center gap-2 bg-[#009CDE] hover:bg-[#0082ba] transition-colors duration-300 rounded-lg px-6 py-3 shadow-md"
            >
              <Image
                src="/Images/headerImages/svg/PayPal_Logo.svg"
                alt="paypal"
                width={45}
                height={45}
              />
              <span className="text-white font-semibold text-lg">PayPal</span>
            </Link>

            <div
              onClick={handleCopy}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg p-3 w-full group"
            >
              <p className="font-medium text-gray-700 text-center text-base leading-relaxed flex-1">
                {textToCopy}
              </p>

              <div className="transition-all duration-300">
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                )}
              </div>
            </div>

            {copied && (
              <span className="text-sm text-green-600 font-medium animate-fade-in">
                ✓ დაკოპირდა!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
