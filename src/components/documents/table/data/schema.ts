import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const documentsSchema = z.object({
  id: z.string(),
  created: z.string(),
  title: z.string(),
  recipient: z.string(),
  status: z.string(),
  actions: z.string(),
})

export type Document = z.infer<typeof documentsSchema>
