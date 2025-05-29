import { z } from 'zod';

// Schema for validating login request data
export const loginRequestSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address'),
  password: z.string().nonempty('Password is required'),
});
