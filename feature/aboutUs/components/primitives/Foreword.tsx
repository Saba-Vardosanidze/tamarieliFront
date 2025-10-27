import Image from "next/image";

const Foreword = () => {
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
            წინასიტყვაობა
          </h3>

          <ul className="list-disc list-inside text-[28px] text-[#7B3F00] flex flex-col gap-5">
            <li>
              ასოციაცია თამარიელი დაფუძნებულია ხელოვნების, ლიტერატურის, ქართული
              ცეკვისა და სხვა შემოქმედებითი აქტივობების პოპულარიზაციასა და
              წარმოჩენაზე.
            </li>
            <li>
              ასოციაცია თამარიელი კულტურას, ხელოვნებას, შემოქმედებას და ისტორიას
              მოიაზრებს ინსტრუმენტად, კომუნიკაციისა და კონსტრუქციული კულტურული ა
              კავშირების სამოქალაქო საზოგადოების განვითარებისათვის.
            </li>

            <li>
              ასოციაცია ქმნის ღია, ინკლუზიურ და ინოვაციურ სივრცეს, სადაც
              ტრადიციული და თანამედროვე ხელოვნება ერთმანეთში ინტერფეისურ
              ურთიერთობაშია.
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

export default Foreword;
