import { FooterLinksProps } from "feature/type";

const FooterLinks = ({ contactUs, links }: FooterLinksProps) => {
  return (
    <div>
      <p className="mb-6 sm:mb-8 lg:mb-[45px] text-[20px] sm:text-[22px] lg:text-[26px] font-medium text-[#000000]">
        {contactUs}
      </p>
      {links.map((link, id) => (
        <div
          key={id}
          className="mb-4 sm:mb-5 lg:mb-5 max-w-[458px] text-[#000000]"
        >
          <a
            href={`tel:${link.tel}`}
            className="font-light text-[16px] sm:text-[18px] lg:text-[22px] block hover:text-gray-700 transition-colors"
          >
            {link.tel}
          </a>
          <a
            href={`mailto:${link.mailto}`}
            className="font-light text-[16px] sm:text-[18px] lg:text-[22px] block hover:text-gray-700 transition-colors"
          >
            {link.mailto}
          </a>
          <p className="font-light text-[16px] sm:text-[18px] lg:text-[22px]">
            {link.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
