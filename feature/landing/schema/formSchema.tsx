import { z } from 'zod';

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be at most 50 characters' }),

  email: z.string().email({ message: 'Invalid email address' }),

  message: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters' })
    .max(500, { message: 'Message must be at most 500 characters' }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
