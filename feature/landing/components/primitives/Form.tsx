'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { contactForm } from 'feature/landing/api/landingApi';
import { FormSchema, FormSchemaType } from 'feature/landing/schema/formSchema';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Form = () => {
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
      toast.success('მონაცემები წარმატებით გაიგზავნა!');
    },
    onError: () => {
      toast.error('დაფიქსირდა შეცდომა!');
    },
  });
  const submitForm = (data: FormSchemaType) => {
    mutate(data);
  };
  return (
    <div className="flex flex-wrap justify-center items-center bg-[#E0E0E0] mx-auto w-full min-h-[500px] lg:min-h-[700px]">
      <div className="flex flex-col gap-5 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-[1440px]">
        <div>
          <h3 className="text-[#000000] text-[30px]">შეტყობინება</h3>
          <h3 className="text-[#000000] text-[30px]">ასოციაცია თამარიელი</h3>
          <p className="text-[#1a1b1f]">შეგიძლიათ გამოგვიგზავნოთ შეტყობინება</p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col flex-wrap gap-5 w-full max-w-[1100px]"
        >
          <div className="flex items-center gap-6 w-full max-w-[1100px]">
            <div className="w-full max-w-[384px]">
              <p className="text-[#000000]">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#ffffff] px-2 py-3 border border-[#aaaa] outline-none w-full max-w-[384px] text-[#1a1b1f]"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full max-w-[384px]">
              <p className="text-[#000000]">Email Adress</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white px-2 py-3 border border-[#aaa] outline-none w-full max-w-[384px] text-[#1a1b1f]"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <p className="text-[#000000]">Message</p>
            <textarea
              className="bg-white px-2 py-3 border border-[#aaa] outline-none w-full max-w-[792px] text-[#1a1b1f]"
              placeholder="Enter your message"
              {...register('message')}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
          <button
            className="flex justify-center bg-[#000000] px-2 py-3 w-[109px] cursor-pointer"
            type="submit"
          >
            {isPending ? 'იგზავნება...' : 'გაგზავნე'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
