import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type Project = {
  _id: string;
  projectName: Record<string, string>;
  projectPicture: string;
  projectType: string;
};

export type InfiniteSliderProps = {
  title?: string;
  direction?: "left" | "right";
  speed?: number;
  enableLinks?: boolean;
};

export type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type ProjectsResponse = {
  data: Project[];
  pagination?: Pagination;
};
export interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
}
export type ProjectCardProps = {
  title: string;
  description: string;
  country: string;
  category: string;
  image: string;
};
