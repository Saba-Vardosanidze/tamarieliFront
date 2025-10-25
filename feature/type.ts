export type BurgerMenuIconProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type FooterItem = {
  contactUs: string;
  links: {
    tel?: string;
    mailto?: string;
    address?: string;
    src?: string;
    location?: string;
  }[];
  footerImg: string;
  instagram: string;
  youTube: string;
};
export type FooterLinksProps = Pick<FooterItem, 'contactUs' | 'links'>;
export type SocialLink = {
  id: number;
  href: string;
  img: string;
  alt: string;
  width: number;
  height: number;
};

export type FooterDataProps = {
  socmediaLinks: SocialLink[];
};

export type ParamsProps = {
  params: {
    id: string;
  };
};
