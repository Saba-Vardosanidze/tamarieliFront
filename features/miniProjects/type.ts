export type LocaleKey = 'en' | 'ka';

export type MiniProject = {
  projectPicture: string;
  projectName: Record<LocaleKey, string>;
  projectDescription: Record<LocaleKey, string>;
  projectType: 'TODO' | 'INPROGRESS' | 'DONE' | 'ONGOING';
  projectCreator: string[];
  pdfLink?: string;
  wordLink?: string;
  fbLink?: string;
  igLink?: string;
  partnerSiteLink?: string;
};
