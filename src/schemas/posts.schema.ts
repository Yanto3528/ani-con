import { z } from 'zod';

export const createPostSchema = z.object({
  coverImage: z.string({ required_error: 'Cover image is required' }),
  title: z.string({ required_error: 'Title is required' }),
  content: z.string({ required_error: 'Content is required' }),
});
