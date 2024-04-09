import { z } from 'zod';

import { loginSchema, registerSchema } from '@/schemas/auth.schema';
import { createPostSchema } from '@/schemas/posts.schema';

// Auth
export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

// Post
export type CreatePostFormValues = z.infer<typeof createPostSchema>;
