import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
	}),
});

const teamCollection = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		role: z.string(),
		bio: z.string(),
		order: z.number(),
	}),
});

const galleryCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		category: z.enum(['Excavation', 'Cleaning', 'Repair', 'Maintenance', 'Renovation', 'Inspection']),
		description: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	'services': servicesCollection,
	'team': teamCollection,
	'gallery': galleryCollection,
};
