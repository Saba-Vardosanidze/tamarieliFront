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

export interface LocalizedText {
  ka: string;
  en: string;
  fr: string;
}

export interface MiniProject {
  _id: string;
  parentProject: string;

  projectName: LocalizedText;
  projectDescription: LocalizedText;

  projectCreator: string[];
  projectType: 'INPROGRESS' | 'ONGOING' | 'COMPLETED';

  projectPicture: string;

  createdAt: string;
  updatedAt: string;

  pdfLink: string;
  wordLink: string;

  __v: number;
}

export type Project = {
  _id: string;

  projectName: LocalizedText;
  projectDescription: LocalizedText;

  projectCreator: string[];
  projectType: 'ONGOING' | 'INPROGRESS' | 'COMPLETED';

  projectPicture: string;

  createdAt: string;
  updatedAt: string;

  pdfLink: string;
  wordLink: string;

  miniProjects: MiniProject[];

  __v: number;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
  firstPage: number;
  lastPage: number;
};
