'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { contactForm } from 'features/landing/api/landingApi';
import { FormSchema, FormSchemaType } from 'features/landing/schema/formSchema';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

const Form = () => {
  const t = useTranslations('ContactForm');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: contactForm,
    onSuccess: () => {
      toast.success(t('submit') + ' successfully!');
    },
    onError: () => toast.error('An error occurred!'),
  });

  const submitForm = (data: FormSchemaType) => {
    mutate(data);
  };

  return (
    <div id="contact" className="bg-[#f4f7fa] py-16 lg:py-24 w-full">
      <div className="mx-auto px-6 sm:px-12 lg:px-20 max-w-[1440px]">
        <div className="flex lg:flex-row flex-col gap-12 lg:gap-20">
          <div className="flex-1 space-y-4 max-w-xl">
            <h3 className="font-semibold text-blue-600 text-sm uppercase tracking-wider">
              {t('title1')}
            </h3>
            <h2 className="font-bold text-[33px] text-gray-900 leading-tight tracking-tight">
              {t('title2')}
            </h2>
            <p className="max-w-md text-gray-600 text-lg leading-relaxed">
              {t('description')}
            </p>
          </div>
          <div className="flex-[1.5] bg-white shadow-blue-900/5 shadow-xl p-8 sm:p-10 rounded-[2rem] w-full">
            <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block px-1 font-medium text-gray-700 text-sm">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    className={`w-full bg-gray-50 px-4 py-3.5 rounded-xl border ${
                      errors.name ? 'border-red-400' : 'border-gray-200'
                    } focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className="px-1 font-medium text-red-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block px-1 font-medium text-gray-700 text-sm">
                    {t('email')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('emailPlaceholder')}
                    className={`w-full bg-gray-50 px-4 py-3.5 rounded-xl border ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    } focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="px-1 font-medium text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block px-1 font-medium text-gray-700 text-sm">
                  {t('message')}
                </label>
                <textarea
                  rows={4}
                  placeholder={t('messagePlaceholder')}
                  className={`w-full bg-gray-50 px-4 py-3.5 rounded-xl border ${
                    errors.message ? 'border-red-400' : 'border-gray-200'
                  } focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none`}
                  {...register('message')}
                />
                {errors.message && (
                  <span className="px-1 font-medium text-red-500 text-xs">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  disabled={isPending}
                  className="group relative flex justify-center items-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 shadow-blue-200 shadow-lg px-8 py-4 rounded-xl w-full sm:w-auto overflow-hidden font-bold text-white active:scale-95 transition-all duration-300 cursor-pointer"
                  type="submit"
                >
                  <span
                    className={`transition-all duration-300 ${isPending ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {t('submit')}
                  </span>

                  {isPending && (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <svg
                        className="w-5 h-5 text-white animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
