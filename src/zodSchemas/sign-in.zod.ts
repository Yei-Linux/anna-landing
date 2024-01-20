import { z } from 'zod';

export const signInZodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const waitListZodSchema = z.object({
  email: z.string().email(),
  password: z.string().optional(),
});

export const giveMeYourPasswordSchema = z.object({
  password: z.string().min(8),
});
