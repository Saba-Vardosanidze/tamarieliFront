export type Project = {
  _id: string;
  projectName: Record<string, string>;
  projectPicture: string;
  projectType: string;
};

export type InfiniteSliderProps = {
  title?: string;
  direction?: 'left' | 'right';
  speed?: number;
  enableLinks?: boolean;
};
