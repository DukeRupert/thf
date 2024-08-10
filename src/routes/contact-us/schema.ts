import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1).max(50),
	email: z.string().email().max(50),
	tel: z.string().max(50).optional(),
	message: z.string().min(40).max(500),
	password: z.string().optional().default(''),
	username: z.string().optional().default('')
});

export type FormSchema = typeof formSchema;
