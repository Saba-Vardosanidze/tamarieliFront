import { FormSchemaType } from '../schema/formSchema';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const baseURL = process.env.NEXT_PUBLIC_REGISTRATION_GOOGLEFORM;

export const ProjectApi = async () => {
  const res = await fetch(`${baseUrl}/project`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const ProjectById = async (id: string) => {
  const res = await fetch(`${baseUrl}/project/${id}`, {
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

    await fetch(baseURL, {
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
