export type ProjectName = {
  ka: string;
  en: string;
  fr: string;
};

export type ProjectDescription = {
  ka: string;
  en: string;
  fr: string;
};

export type Country =
  | 'georgia'
  | 'austria'
  | 'belgium'
  | 'bulgaria'
  | 'croatia'
  | 'cyprus'
  | 'czech_republic'
  | 'denmark'
  | 'estonia'
  | 'finland'
  | 'france'
  | 'germany'
  | 'greece'
  | 'hungary'
  | 'ireland'
  | 'italy'
  | 'latvia'
  | 'lithuania'
  | 'luxembourg'
  | 'malta'
  | 'netherlands'
  | 'poland'
  | 'portugal'
  | 'romania'
  | 'slovakia'
  | 'slovenia'
  | 'spain'
  | 'sweden'
  | 'england'
  | 'united_states'
  | 'ukraine';

export type ProjectCategory =
  | 'culture-art'
  | 'literature-library'
  | 'music-sound'
  | 'cinema-visual-arts'
  | 'dance-movement'
  | 'education-innovation'
  | 'diaspora-civic-platforms'
  | 'media-voice';

export type ProjectType = 'TODO' | 'INPROGRESS' | 'DONE' | 'ONGOING';

export type SearchParams = {
  projectName?: string;
  country?: Country;
  projectCategory?: ProjectCategory;
};

export type Project = {
  _id: string;
  projectName: ProjectName;
  projectDescription: ProjectDescription;
  projectCreator: string[];
  country: Country;
  projectCategory: ProjectCategory;
  projectType: ProjectType;
  projectPicture: string;
  pdfLink?: string[];
  wordLink?: string[];
  fbLink?: string[];
  igLink?: string[];
  partnerSiteLink?: string[];
  createdAt: string;
  updatedAt: string;
};

export type MiniProject = Project & {
  parentProject: string;
};

export type SearchResponse = {
  status: string;
  total: number;
  data: {
    projects: Project[];
    miniProjects: MiniProject[];
  };
};
