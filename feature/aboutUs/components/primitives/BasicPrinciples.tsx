import Image from "next/image";

const BasicPrinciples = () => {
  return (
    <div
      className="flex justify-center  w-full min-h-[700px] 
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
            ძირითადი პრინციპები
          </h3>

          <ul className="list-disc list-inside text-[24px] text-[#7B3F00] flex flex-col gap-6">
            <li>ინკლუზიურობა: ყველასთვის ხელმისაწვდომობა.</li>
            <li>კომუნიკაცია: გამოცდილების, ცოდნისა და ხედვების გაზიარება</li>
            <li>
              ინტერაქცია: პირადი და გუნდური შემოქმედებითი პროცესების ხელშეწყობა.
            </li>
            <li>
              ნაყოფიერი კულტურული ურთიერთქმედება: შემოქმედებითი თანამშრომლობა,
              რომელიც აძლიერებს კულტურებს შორის ურთიერთგაგებას.
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

export default BasicPrinciples;
