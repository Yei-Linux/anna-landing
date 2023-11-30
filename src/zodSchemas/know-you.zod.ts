import { z } from 'zod';

export const knowYouSchema = z.object({
  fullName: z.string(),
  phone: z.string().min(8),
});
