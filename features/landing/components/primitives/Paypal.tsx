"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const Paypal = () => {
  const t = useTranslations("paypalTexts");

  const [copied, setCopied] = useState(false);
  const textToCopy = "FR76 1027 8010 8800 0226 3180 179";
  const textToCopy2 = "tamarielitamarieli@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCopy2 = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy2);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#E0E0E0] px-6 py-20 w-full min-h-[600px]">
      <div className="w-full max-w-[1440px]">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-16 lg:gap-20">
          <div className="flex flex-col gap-8 order-2 lg:order-1 w-full lg:w-[500px]">
            <h2 className="font-medium text-[21px] text-gray-900 text-center">
              {t("title")}
            </h2>

            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col gap-4 bg-white shadow-md p-8 rounded-xl w-full">
                <p className="font-medium text-gray-700 text-sm text-center">
                  {t("bankTransferTitle")}
                </p>

                <div
                  onClick={handleCopy2}
                  className="flex items-center gap-4 hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  <p className="flex-1 font-mono text-[14px] text-gray-900 md:text-lg text-center">
                    {textToCopy}
                  </p>

                  {copied ? (
                    <Check className="flex-shrink-0 w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="flex-shrink-0 w-5 h-5 text-gray-400" />
                  )}
                </div>

                {copied && (
                  <p className="font-medium text-green-600 text-sm text-center">
                    {t("copied")}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 my-2 w-full">
                <div className="flex-1 border-gray-500 border-t"></div>
                <span className="font-medium text-gray-700 text-sm">
                  {t("or")}
                </span>
                <div className="flex-1 border-gray-500 border-t"></div>
              </div>

              <div className="flex flex-col gap-4 bg-white shadow-md p-8 rounded-xl w-full">
                <p className="font-medium text-gray-700 text-sm text-center">
                  {t("paypalTransferTitle")}
                </p>

                <div
                  onClick={handleCopy}
                  className="flex items-center gap-4 hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  <p className="flex-1 font-mono text-[14px] text-gray-900 md:text-lg text-center">
                    {textToCopy2}
                  </p>

                  {copied ? (
                    <Check className="flex-shrink-0 w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="flex-shrink-0 w-5 h-5 text-gray-400" />
                  )}
                </div>

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
                    Paypal
                  </span>
                </Link>

                {copied && (
                  <p className="font-medium text-green-600 text-sm text-center">
                    {t("copied")}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 lg:gap-12 order-1 lg:order-2">
            <div className="flex justify-center items-center bg-white shadow-lg p-8 rounded-2xl">
              <Image
                src="/Images/headerImages/png/tamarieliLogo.png"
                alt="tamarieli logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-gray-400 rounded-full w-2 h-2"></div>
                <div className="bg-gray-400 rounded-full w-2 h-2"></div>
                <div className="bg-gray-400 rounded-full w-2 h-2"></div>
              </div>
              <Send className="w-8 h-8 text-gray-600" />
            </div>

            <div className="flex justify-center items-center bg-white shadow-lg p-8 rounded-2xl">
              <Image
                src="/Images/headerImages/svg/PayPal_Logo.svg"
                alt="paypal logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
