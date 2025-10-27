import Image from "next/image";

const SocialResponsibility = () => {
  return (
    <div
      className="flex justify-center  w-full min-h-[700px] bg-[linear-gradient(181deg,rgba(241,220,207,1)_0%,rgba(243,235,224,0)_100%)]
 mx-auto"
    >
      <div className="max-w-[1440px] w-full flex justify-between">
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

        <div className="w-full  flex flex-col items-center justify-center text-center mx-auto gap-7 px-4">
          <h3 className="text-[32px] text-[#7B3F00] font-bold">
            საზოგადოებრივი პასუხისმგებლობა
          </h3>

          <ul className="list-disc list-inside text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>
              ადგილობრივი თემების მოზიდვა და დაინტერესება შემოქმედებით
              აქტივობებით
            </li>
            <li>
              ხელოვნება როგორც თავის გამოხატვის, საზოგადოებრივი ჩართულობისა და
              ინტეგრაციის ინსტრუმენტი
            </li>
            <li>
              ღია სივრცე ევროპელი მოქალაქეებისა და საერთაშორისო
              პარტნიორებისთვის.
            </li>
            <li>
              საჯარო დიპლომატიისა და კონსტრუქციული კულტურული ურთიერთობების
              მხარდაჭერა
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

export default SocialResponsibility;
