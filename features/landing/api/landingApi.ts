import { MiniProject, MiniProjectResponse } from '@features/type';
import { FormSchemaType } from '../schema/formSchema';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const GoogleFormURL = process.env.NEXT_PUBLIC_REGISTRATION_GOOGLEFORM;

export const ProjectApi = async () => {
  const res = await fetch(`${baseUrl}/project`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const ProjectWithPagination = async (page = 1) => {
  const res = await fetch(`${baseUrl}/project?page=${page}&limit=4`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const ProjectById = async (id: string, type: string) => {
  const res = await fetch(`${baseUrl}/project/${id}?type=${type}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const getMiniProjectByProjectId = async (
  id: string,
  page: number
): Promise<MiniProjectResponse> => {
  const res = await fetch(
    `${baseUrl}/projects/${id}/mini-projects?page=${page}&limit=3`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const json: MiniProjectResponse = await res.json();
  return json;
};

export const MiniProjectById = async (id: string) => {
  const res = await fetch(`${baseUrl}/mini-project/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const contactForm = async (
  formData: FormSchemaType
): Promise<boolean> => {
  try {
    const body = new URLSearchParams();
    body.append('entry.459058498', formData.name);
    body.append('entry.625579071', formData.email);
    body.append('entry.562354251', formData.message);

    await fetch(GoogleFormURL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      mode: 'no-cors',
    });

    return true;
  } catch (error) {
    console.error('server error:', error);
    return false;
  }
};

interface BookFilters {
  genre?: string;
  subGenre?: string;
  literaryMovement?: string;
  themes?: string;
  author?: string;
  ageCategory?: string;
  lang?: string;
}

export const BooksApi = async (filters: BookFilters = {}) => {
  const params = new URLSearchParams();

  params.append('lang', filters.lang || 'ka');

  if (filters.genre) params.append('genre', filters.genre);
  if (filters.subGenre) params.append('subGenre', filters.subGenre);
  if (filters.literaryMovement)
    params.append('literaryMovement', filters.literaryMovement);
  if (filters.themes) params.append('themes', filters.themes);
  if (filters.author) params.append('author', filters.author);
  if (filters.ageCategory) params.append('ageCategory', filters.ageCategory);

  const queryString = params.toString();
  const url = `${baseUrl}/books${queryString ? `?${queryString}` : ''}`;

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const BookEnamsApi = async () => {
  const res = await fetch(`${baseUrl}/books/enums`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};
