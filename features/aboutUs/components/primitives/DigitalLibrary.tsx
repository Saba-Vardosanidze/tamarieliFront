import Image from "next/image";

const DigitalLibrary = () => {
  return (
    <div
      className="flex justify-center  w-full 
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

        <div className="w-full  flex flex-col items-center justify-center text-center mx-auto gap-7 px-4 py-5">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-[32px] text-[#7B3F00] font-bold">
              ციფრული ბიბლიოთეკა „თამარიელი“
            </h3>
            <p className="text-[28px] text-[#7B3F00] font-[500]">
              ქართული კულტურისა და ლიტერატურის გლობალური სახე
            </p>
          </div>

          <ul className="text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>
              „თამარიელის“ ციფრული ბიბლიოთეკა იქმნება იმისათვის, რომ დავიცვათ,
              შევინახოთ და ხელმისაწვდომი გავხადოთ ქართული კულტურისა და
              ლიტერატურის საუნჯე — თანამედროვე ციფრულ ფორმატში,
            </li>
            <li>
              ჩვენი მისიაა, ქართული სიტყვა იქცეს ხიდად ქართველებსა და მსოფლიოს
              შორის. პროექტი მიზნად ისახავს ეროვნული მეხსიერების დაცვას, ქართული
              ლიტერატურის გლობალურ წარმოჩენას, საგანმანათლებლო რესურსების
              შექმნასა და კულტურული დიპლომატიის განმტკიცებას
            </li>
            <li>
              „თამარიელის“ ბიბლიოთეკა იქნება ღია და მეგობრული ციფრული სივრცე,
              სადაც გაერთიანდებიან მკითხველები, მკვლევრები, სტუდენტები და
              მასწავლებლები ერთი მიზნის ირგვლივ — შეინარჩუნონ და გაავრცელონ
              ქართული კულტურული მემკვიდრეობა.
            </li>
            <li>
              ეს არის ხალხის პროექტი — ნდობაზე, ცოდნასა და ღირებულებებზე აგებული
              ციფრული ხიდი წარსულსა და მომავალს შორის, სადაც ქართული სიტყვა
              იცოცხლებს საზღვრებს გარეშე,
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

export default DigitalLibrary;
