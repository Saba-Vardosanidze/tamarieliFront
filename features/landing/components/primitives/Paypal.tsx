'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Copy, Check, Send, CreditCard, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Paypal = () => {
  const t = useTranslations('paypalTexts');

  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedPaypal, setCopiedPaypal] = useState(false);

  const textToCopyBank = 'FR76 1027 8010 8800 0226 3180 179';
  const textToCopyPaypal = 'tamarielitamarieli@gmail.com';

  const handleCopyBank = async () => {
    try {
      await navigator.clipboard.writeText(textToCopyBank);
      setCopiedBank(true);
      setCopiedPaypal(false);
      setTimeout(() => setCopiedBank(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyPaypal = async () => {
    try {
      await navigator.clipboard.writeText(textToCopyPaypal);
      setCopiedPaypal(true);
      setCopiedBank(false);
      setTimeout(() => setCopiedPaypal(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-[#f8fafc] px-6 py-16 sm:py-24 w-full min-h-[600px] overflow-hidden">
      <div className="mx-auto px-6 sm:px-12 lg:px-20 max-w-[1440px]">
        <div className="flex lg:flex-row flex-col items-center gap-16 lg:gap-24">
          <div className="flex flex-col gap-6 order-2 lg:order-1 w-full max-w-xl">
            <div className="space-y-2 mb-4 lg:text-left text-center">
              <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl tracking-tight">
                {t('title')}
              </h2>
              <div className="bg-blue-600 mx-auto lg:mx-0 rounded-full w-12 h-1.5" />
            </div>

            <div className="gap-6 grid grid-cols-1">
              <div className="bg-white shadow-sm hover:shadow-md p-6 sm:p-8 border border-gray-100 rounded-3xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-gray-700">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-sm uppercase tracking-wider">
                    {t('bankTransferTitle')}
                  </span>
                </div>

                <div
                  onClick={handleCopyBank}
                  className="group relative flex justify-between items-center bg-gray-50 hover:bg-blue-50/50 p-4 border border-gray-200 hover:border-blue-200 rounded-2xl transition-all cursor-pointer"
                >
                  <code className="flex-1 font-mono text-gray-800 text-sm sm:text-base break-all sm:break-normal">
                    {textToCopyBank}
                  </code>
                  <div className="ml-4">
                    {copiedBank ? (
                      <Check className="w-5 h-5 text-green-600 animate-in zoom-in" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </div>
                {copiedBank && (
                  <p className="mt-2 font-medium text-green-600 text-xs animate-pulse">
                    {t('copied')}
                  </p>
                )}
              </div>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-gray-200 border-t"></div>
                <span className="flex-shrink px-4 font-medium text-gray-400 text-sm italic">
                  {t('or')}
                </span>
                <div className="flex-grow border-gray-200 border-t"></div>
              </div>

              <div className="bg-white shadow-sm hover:shadow-md p-6 sm:p-8 border border-gray-100 rounded-3xl transition-all">
                <div className="flex items-center gap-3 mb-4 text-gray-700">
                  <Image
                    src="/Images/headerImages/svg/PayPal_Logo.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                  <span className="font-semibold text-sm uppercase tracking-wider">
                    {t('paypalTransferTitle')}
                  </span>
                </div>

                <div className="space-y-4">
                  <div
                    onClick={handleCopyPaypal}
                    className="group flex justify-between items-center bg-gray-50 hover:bg-blue-50/50 p-4 border border-gray-200 hover:border-blue-200 rounded-2xl transition-all cursor-pointer"
                  >
                    <span className="flex-1 font-medium text-gray-800 text-sm sm:text-base truncate">
                      {textToCopyPaypal}
                    </span>
                    <div className="ml-4">
                      {copiedPaypal ? (
                        <Check className="w-5 h-5 text-green-600 animate-in zoom-in" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      )}
                    </div>
                  </div>

                  <Link
                    href="https://www.paypal.com/ge/home"
                    target="_blank"
                    className="flex justify-center items-center gap-2 bg-[#0070BA] hover:bg-[#005ea6] shadow-blue-200/50 shadow-lg px-6 py-4 rounded-2xl w-full font-bold text-white active:scale-[0.98] transition-all"
                  >
                    <span className="text-sm">Pay with PayPal</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                {copiedPaypal && (
                  <p className="mt-2 font-medium text-green-600 text-xs animate-pulse">
                    {t('copied')}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative flex-1 order-1 lg:order-2 w-full">
            <div className="relative flex justify-center items-center gap-4 sm:gap-8 lg:gap-10">
              <div className="bg-white shadow-2xl shadow-gray-200/50 p-6 sm:p-10 rounded-[2.5rem] transition-transform hover:-translate-y-2 duration-500">
                <Image
                  src="/Images/headerImages/png/tamarieliLogo.png"
                  alt="tamarieli logo"
                  width={100}
                  height={100}
                  className="sm:w-[120px] object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-blue-200 rounded-full w-2 h-2 animate-bounce" />
                  <div className="bg-blue-400 rounded-full w-2 h-2 animate-bounce [animation-delay:0.2s]" />
                  <div className="bg-blue-600 rounded-full w-2 h-2 animate-bounce [animation-delay:0.4s]" />
                </div>
                <div className="bg-blue-50 p-3 rounded-full">
                  <Send className="w-6 h-6 text-blue-600 -rotate-12" />
                </div>
              </div>

              <div className="bg-white shadow-2xl shadow-gray-200/50 p-6 sm:p-10 rounded-[2.5rem] transition-transform hover:-translate-y-2 duration-500">
                <Image
                  src="/Images/headerImages/svg/PayPal_Logo.svg"
                  alt="paypal logo"
                  width={80}
                  height={80}
                  className="sm:w-[100px] object-contain"
                />
              </div>
            </div>

            <div className="top-1/2 left-1/2 -z-10 absolute bg-blue-100/50 blur-[100px] rounded-full w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
