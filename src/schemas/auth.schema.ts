import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email('Please provide a valid email'),
  password: z.string().min(6, 'Password must be at least 6 or more characters'),
});

export const registerSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z.string({ required_error: 'Email is required' }).email('Please provide a valid email'),
  password: z.string().min(6, 'Password must be at least 6 or more characters'),
});
