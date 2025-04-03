import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const members = defineCollection({ 
    loader: glob({pattern: "*.md", base: "./src/members"}),
    schema: ({ image }) => z.object({
        name: z.string(),
        image: image(),
        interests: z.array(z.string())
    })
})

export const collections = { members }