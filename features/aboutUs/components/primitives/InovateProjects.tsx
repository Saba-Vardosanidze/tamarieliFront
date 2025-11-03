import Image from "next/image";
import React from "react";

const InovateProjects = () => {
  return (
    <div
      className="flex justify-center  w-full  
 mx-auto "
    >
      <div className="max-w-[1440px] w-full flex justify-between] ">
        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="sfs"
            className="rotate-270"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={300}
            alt="sfs"
            className="rotate-180"
          />
        </div>
        <div className="w-full  flex flex-col items-center justify-center text-center mx-auto gap-7 px-4 py-[20px]">
          <h3 className="text-[32px] text-[#7B3F00] font-bold">
            ინოვაციური პროექტები
          </h3>
          <div className="w-full flex items-center gap-5 justify-center">
            <Image
              src="/images/headerImages/png/tamarieliLogo.png"
              width={150}
              height={150}
              alt="tamarieliLogo"
            />
            <Image
              src="/images/headerImages/png/earthoba.png"
              width={150}
              height={150}
              alt="tamarieliLogo"
            />
            <Image
              src="/images/headerImages/png/ciblus.png"
              width={150}
              height={150}
              alt="tamarieliLogo"
            />
          </div>
          <p className="text-[#7B3F00] text-[22px] font-[600]">
            მიიღე ჩვენი მხარდაჭერა
          </p>

          <ul className="list-disc list-inside text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>
              ასოციაცია „თამარიელი“ ელოდება თქვენს ინოვაციურ პროექტებს კულტურის,
              განათლებისა და ციფრული განვითარების მიმართულებით.
            </li>
            <li>
              როექტების ავტორებს საშუალება ექნებათ, ასოციაციასთან თანამშრომლობით
              მიიღონ თანადაფინანსება, მენტორული მხარდაჭერა და პროექტის
              პოპულარიზაცია. პროექტების ავტორებს საშუალება ექნებათ,
              ასოციაციასთან თანამშრომლობით მიიღონ თანადაფინანსება, მენტორული
              მხარდაჭერა და პროექტის პოპულარიზაცია
            </li>
            <li>
              ჩვენი მიზანია ხელი შევუწყოთ იმ ინიციატივებს, რომლებიც ქართული
              კულტურის, ლიტერატურისა და ცოდნის გავრცელებას ემსახურება
              თანამედროვე ინოვაციური ხედვით.
            </li>
          </ul>
        </div>
        <div className="min-h-[700px] flex flex-col justify-between">
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="sfs"
            className="rotate-0"
          />
          <Image
            src="/images/headerImages/svg/aboutUsSvg.svg"
            width={300}
            height={200}
            alt="sfs"
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default InovateProjects;
