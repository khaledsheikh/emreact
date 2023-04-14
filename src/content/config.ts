// 1. Import utilities from `astro:content`
import { z,defineCollection } from 'astro:content';
// 2. Define your collection(s)
const servicesCollection = defineCollection({ 
  // The name of your collection
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),

    
  }),
});

const aboutCollection = defineCollection({ 
  // The name of your collection
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),

    
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'services': servicesCollection,
  'about': servicesCollection,
};