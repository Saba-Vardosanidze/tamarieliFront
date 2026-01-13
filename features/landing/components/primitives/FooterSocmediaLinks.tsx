import { FootData } from 'features/landing/data/landingData';
import { SocialLink } from 'features/type';
import Image from 'next/image';
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-[15px]">
      {FootData[0].socmediaLinks.map((eachElement: SocialLink) => (
        <Link
          key={eachElement.id}
          href={eachElement.href}
          className="flex justify-center items-center"
        >
          <div className="flex justify-center items-center bg-blue-100 rounded-[8px] w-[50px] h-[45px]">
            <Image
              src={eachElement.img}
              width={eachElement.width}
              height={eachElement.height}
              alt={eachElement.alt}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
