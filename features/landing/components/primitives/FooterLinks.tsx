import { FooterLinksProps } from 'features/type';

const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <div>
      {links.map((link, id) => (
        <div
          key={id}
          className="mb-4 sm:mb-5 lg:mb-5 max-w-[458px] text-[#000000]"
        >
          <a
            href={`tel:${link.tel}`}
            className="block font-light text-[16px] sm:text-[18px] hover:text-blue-600 transition-colors"
          >
            {link.tel}
          </a>
          <a
            href={`mailto:${link.mailto}`}
            className="block font-light text-[16px] sm:text-[18px] hover:text-blue-600 transition-colors"
          >
            {link.mailto}
          </a>
          <p className="font-light text-[16px] sm:text-[18px]">
            {link.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
