import { z } from 'zod';
import { signInZodSchema } from '../zodSchemas/sign-in.zod';
import { knowYouSchema } from '../zodSchemas/know-you.zod';

export type TSignInForm = z.infer<typeof signInZodSchema>;
export type TKnowYouForm = z.infer<typeof knowYouSchema>;
