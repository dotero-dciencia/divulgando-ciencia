// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const articles = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    borrador: z.boolean().optional(),
    titulo: z.string(),
    ciencia: z.string(),
    portadaAlt: z.string(),
    // descripcion: z.string().optional(),
    autor: reference('authors'),
    fecha: z.date().optional()
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    redes: z.object({
      x: z.string().optional(),
      instagram: z.string().optional(),
      youtube: z.string().optional(),
      tiktok: z.string().optional(),
      github: z.string().optional()
    }).optional(),
  })
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = { articles, authors };