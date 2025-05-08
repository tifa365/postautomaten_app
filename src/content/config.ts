import { defineCollection, z } from "astro:content";

export const collections = {
  article: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      updated: z.date(),
    }),
  }),
};